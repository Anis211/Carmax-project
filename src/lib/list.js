import { create } from "zustand";
import { persist } from "zustand/middleware";

const useList = create(
  persist(
    (set) => ({
      list: [],
      clicked: [],
      setList: (newList) => set(() => ({ list: newList[0] })),
      addToList: (elem) =>
        set((state) =>
          state.list.includes(elem) == false
            ? { list: [...state.list, elem] }
            : { list: state.list }
        ),
      clearList: () => set(() => ({ list: [] })),
      deleteItem: (value) =>
        set((state) => ({
          list: [...state.list.filter((item) => item != value)],
        })),
      addToClicked: (id) =>
        set((state) =>
          state.clicked.includes(id) == false
            ? { clicked: [...state.clicked, id] }
            : { clicked: state.clicked }
        ),
      deleteClicked: (id) =>
        set((state) => ({
          clicked: [...state.clicked.filter((item) => item != id)],
        })),
      clearClicked: () => set(() => ({ clicked: [] })),
    }),
    { name: "list storage", skipHydration: true }
  )
);

export default useList;
