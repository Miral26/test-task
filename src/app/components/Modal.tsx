"use client";

import { User } from "@/types/user";
import { Button, Modal, Tabs } from "flowbite-react";
import Image from "next/image";

export function CustomModal({
  setIsOpen,
  user,
  isOpen,
}: {
  isOpen: boolean;
  user: User | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>User Details</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="flex text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {user && (
              <Image
                src={user?.image}
                alt={user?.username}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
            )}
            <div className="flex flex-col gap-4">
              <p>{user?.firstName}</p>
              <p>{user?.lastName}</p>
            </div>
          </p>
          <h1>Address</h1>
          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <Tabs aria-label="Default tabs" variant="default">
              <Tabs.Item active title="Personal">
                <p>
                  Address:- <span>{user?.address?.address}</span>
                </p>
                <p>
                  City:- <span>{user?.address?.city}</span>
                </p>
                <p>
                  State:- <span>{user?.address?.state}</span>
                </p>
              </Tabs.Item>
              <Tabs.Item title="Bussiness">
                <p>
                  Address:- <span>{user?.company?.address?.address}</span>
                </p>
                <p>
                  City:- <span>{user?.company?.address?.city}</span>
                </p>
                <p>
                  State:- <span>{user?.company?.address?.state}</span>
                </p>
              </Tabs.Item>
            </Tabs>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
