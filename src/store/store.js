import { create } from "zustand";

const initialUsers = JSON.parse(localStorage.getItem("user")) || [];

const useUserStore = create((set) => ({
  user: initialUsers,
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
  editUser: (id, payload) =>
    set((state) => {
      const updatedUsers = state.user.map((user) =>
        user.id === id ? { ...user, ...payload } : user
      );
      localStorage.setItem("user", JSON.stringify(updatedUsers));
      return { user: updatedUsers };
    }),
}));

export default useUserStore;
