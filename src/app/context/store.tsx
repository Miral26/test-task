import { InitialState } from "@/types/user";
import { createContext } from "react";



export const initialState:InitialState = {
  users: [],
  loading: false,
  error: null,
  fetchUsers: () => {},
};
export const store = createContext(initialState);



