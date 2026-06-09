import { create } from 'zustand';

export interface Snippet {
  id: number;
  name: string;
  code: string;
}

interface SnippetStore {
  snippets: Snippet[];
  isInitialized: boolean;
  setInitialized: (val: boolean) => void;
  setSnippets: (snippets: Snippet[]) => void;
  // Change to explicit void for synchronous state updates
  upsertSnippet: (snippet: Snippet) => void;
  deleteSnippet: (id: number) => void;
}

export const useSnippetStore = create<SnippetStore>((set) => ({
  snippets: [],
  isInitialized: false,
  setInitialized: (isInitialized) => set({ isInitialized }),
  setSnippets: (snippets) => set({ snippets }),
  upsertSnippet: (snippet) => set((state) => ({
    snippets: state.snippets.some(s => s.id === snippet.id)
      ? state.snippets.map(s => s.id === snippet.id ? snippet : s)
      : [...state.snippets, snippet]
  })),
  deleteSnippet: (id) => set((state) => ({
    snippets: state.snippets.filter(s => s.id !== id)
  })),
}));