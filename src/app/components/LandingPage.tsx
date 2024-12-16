"use client";
import React, { useMemo, useState } from "react";
import useContextUsers from "../hooks/useUsers";
import Image from "next/image";
import { User } from "@/types/user";
import { CustomModal } from "./Modal";
import { Pagination } from "flowbite-react";

const LandingPage = () => {
  const { users, loading } = useContextUsers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const updatedData = useMemo(() => {
    const start = (currentPage - 1) * 10;
    const end = start + 10;
    return users?.slice(start, end);
  }, [currentPage]);

  return (
    <div>
      {!loading && updatedData?.length > 0
        ? updatedData?.map((user: User, index: number) => (
            <div
              key={`${index}-${user?.id}`}
              className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4 m-8"
            >
              <div className="h-full w-full bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-center p-4">
                <Image
                  src={user?.image}
                  alt={user?.username}
                  width={100}
                  height={100}
                  className="rounded-full mb-4"
                />
                <h1 className="text-lg font-semibold mb-2 !text-black">
                  {user?.username}
                </h1>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => {
                    setSelectedUser(user);
                    setIsOpen(true);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        : users?.length === 0 && (
            <div className="h-80 w-40">
              <h1>No users found</h1>
            </div>
          )}
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={onPageChange}
        showIcons
      />
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} user={selectedUser} />
    </div>
  );
};

export default LandingPage;
