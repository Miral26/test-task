"use client";
import React, { useEffect } from "react";
import { initialState, store } from "./store";
import { fetcherUsers } from "@/utils";
import { InitialState } from "@/types/user";

const { Provider } = store;

const StateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, setState] = React.useState<InitialState>(initialState);
  const fetchUsers = async () => {
    setState({ ...state, loading: true });
    try {
      const response = await fetcherUsers("/usersList");
      const data = response?.data?.users ?? [];
      setState({ ...state, users: data, loading: false });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setState({ ...state, error, loading: false });
    }
  };

  const value = {
    ...state,
    fetchUsers,
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <Provider value={value}>{children}</Provider>;
};

export default StateProvider;
