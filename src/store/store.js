import { create } from "zustand";

const useUserStore = create((set) => ({
  user: [],
  addUser: (payload) =>
    set((state) => {
      const newUser = [...state.user, payload];
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
  removeUser: (id) =>
    set((state) => {
      const newUser = state.user.filter((el) => el.id !== id);
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    }),
}));

export default useUserStore;
