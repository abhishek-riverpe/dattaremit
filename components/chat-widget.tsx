"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { useChatStore, ChatMessage } from "@/lib/chat-store";
import {
  MessageSquare,
  X,
  Send,
  Trash2,
  Bot,
  User,
  Loader2,
} from "lucide-react";
import { SyncLoader } from "react-spinners";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const SUGGESTIONS = [
  "What is DattaRemit?",
  "How do I send money to India?",
  "What are the fees?",
  "How fast is the transfer?",
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/chat_sound.mp3");
  }, []);
  const {
    messages,
    isLoading,
    addMessage,
    appendToMessage,
    setLoading,
    clearMessages,
  } = useChatStore();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (open) {
      scrollToBottom();
    }
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    setInput("");
    addMessage({ role: "user", content: trimmed });
    setLoading(true);

    const assistantId = addMessage({ role: "assistant", content: "" });

    try {
      const chatMessages = [
        ...messages.map((m: ChatMessage) => ({
          role: m.role,
          content: m.content,
        })),
        { role: "user", content: trimmed },
      ];

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMessages }),
      });

      if (!res.ok) throw new Error("Failed to get response");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error("No reader available");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk
          .split("\n")
          .filter((line) => line.startsWith("data: "));

        for (const line of lines) {
          const data = line.replace("data: ", "");
          if (data === "[DONE]") break;

          try {
            const parsed = JSON.parse(data);
            if (parsed.text) {
              appendToMessage(assistantId, parsed.text);
            }
          } catch {
            // skip malformed chunks
          }
        }
      }

      audioRef.current?.play().catch(() => {});
    } catch {
      appendToMessage(
        assistantId,
        "Sorry, I encountered an error. Please try again or contact support@dattaremit.com for help.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Chat Panel */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-end md:inset-auto md:bottom-24 md:right-6">
          {/* Backdrop on mobile */}
          <div
            className="absolute inset-0 bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex flex-col w-full h-full bg-background md:w-105 md:h-150 md:rounded-2xl md:border md:border-border md:shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold">DattaRemit Assistant</h2>
                  <p className="text-xs text-muted-foreground">
                    Ask anything about DattaRemit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {messages.length > 0 && (
                  <button
                    onClick={clearMessages}
                    className="flex items-center justify-center h-8 w-8 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                    aria-label="Clear messages"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center h-8 w-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Ask me about fees, rates, or how DattaRemit works.
                  </p>
                  <div className="grid gap-2 w-full">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => handleSuggestionClick(s)}
                        className="rounded-xl border border-border bg-card px-3 py-2 text-left text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border bg-background px-4 py-3">
              <form onSubmit={handleSubmit}>
                <div className="relative flex items-end gap-2 rounded-2xl border border-border bg-card p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/50 transition-all">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about DattaRemit..."
                    rows={1}
                    className="flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground min-h-9 max-h-25"
                    style={{
                      height: "auto",
                      overflow:
                        input.split("\n").length > 3 ? "auto" : "hidden",
                    }}
                    onInput={(e) => {
                      const target = e.target as HTMLTextAreaElement;
                      target.style.height = "auto";
                      target.style.height =
                        Math.min(target.scrollHeight, 100) + "px";
                    }}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 ${open ? "hidden md:flex" : ""}`}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>
    </>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-2 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
          isUser
            ? "bg-primary text-primary-foreground"
            : "bg-muted text-muted-foreground"
        }`}
      >
        {isUser ? (
          <User className="h-3.5 w-3.5" />
        ) : (
          <Bot className="h-3.5 w-3.5" />
        )}
      </div>
      <div
        className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
          isUser
            ? "bg-primary text-primary-foreground rounded-tr-md whitespace-pre-wrap"
            : "bg-muted text-foreground rounded-tl-md"
        }`}
      >
        {!message.content ? (
          <SyncLoader color="hsl(var(--primary))" size={6} />
        ) : isUser ? (
          message.content
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              ul: ({ children }) => (
                <ul className="mb-2 last:mb-0 list-disc pl-4">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-2 last:mb-0 list-decimal pl-4">{children}</ol>
              ),
              li: ({ children }) => <li className="mb-0.5">{children}</li>,
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:opacity-80"
                >
                  {children}
                </a>
              ),
              code: ({ children }) => (
                <code className="rounded bg-black/10 px-1 py-0.5 text-xs">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="mb-2 last:mb-0 overflow-x-auto rounded bg-black/10 p-2 text-xs">
                  {children}
                </pre>
              ),
              h1: ({ children }) => (
                <h1 className="mb-2 text-base font-bold">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="mb-2 text-sm font-bold">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="mb-1 text-sm font-semibold">{children}</h3>
              ),
              blockquote: ({ children }) => (
                <blockquote className="mb-2 last:mb-0 border-l-2 border-current/20 pl-3 italic">
                  {children}
                </blockquote>
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
