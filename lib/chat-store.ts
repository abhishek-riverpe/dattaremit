import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatStore {
  messages: ChatMessage[];
  isLoading: boolean;
  addMessage: (message: Omit<ChatMessage, "id" | "timestamp">) => string;
  updateMessage: (id: string, content: string) => void;
  appendToMessage: (id: string, chunk: string) => void;
  setLoading: (loading: boolean) => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      messages: [],
      isLoading: false,
      addMessage: (message) => {
        const id = crypto.randomUUID();
        set((state) => ({
          messages: [
            ...state.messages,
            { ...message, id, timestamp: Date.now() },
          ],
        }));
        return id;
      },
      updateMessage: (id, content) =>
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, content } : msg
          ),
        })),
      appendToMessage: (id, chunk) =>
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === id ? { ...msg, content: msg.content + chunk } : msg
          ),
        })),
      setLoading: (loading) => set({ isLoading: loading }),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "dattaremit-chat",
      partialize: (state) => ({ messages: state.messages }),
    }
  )
);
