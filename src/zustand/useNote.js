import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useNote = create(
  persist(
    (set) => ({
      notes: [],
      setNote: (payload) =>
        set((prev) => ({
          notes: [...prev.notes, payload],
        })),
      deleteNote: (id) =>
        set((prev) => ({
          notes: prev.notes.filter((item) => item.id !== id),
        })),
      updateNote: (id, payload) =>
        set((prev) => ({
          notes: prev.notes.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                ...payload,
              };
            } else {
              return item;
            }
          }),
        })),
    }),
    { name: "notebook" }
  )
);
