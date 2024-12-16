import { useContext } from "react";
import { store } from "../context/store";

const useContextUsers = () => {
  const { users, loading, error,fetchUsers } = useContext(store);
  return { users, loading, error, fetchUsers };
};

export default useContextUsers;
