"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div
      className="
  relative
  "
    >
      <div
        className="
     flex flex-row items-center gap-3
     "
      >
        <div
          onClick={() => {}}
          className="
            hidden
            md:block
            text-sm 
            font-semibold
            py-3
            px-4
            rounded-full
            bg-neutral-100
            hover:shadow-md
            transition
            cursor-pointer
            "
        >
          Airbnb your home
        </div>
        <div
          className="
        border-[0.5px]
        border-neutral-200
        rounded-full 
        flex 
        flex-row 
        items-center 
        gap-3
        p-0.5
        hover:shadow-md
            transition
            cursor-pointer
        "
        >
          <div
            onClick={toggleOpen}
            className="
            p-4
            md:py-1
            md:px-2
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            
            "
          >
            <AiOutlineMenu />
          </div>
          <div
            className="
        hidden 
        md:block
        "
          >
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="
      absolute
      rounded-xl
      shadow-md
      w-[40vw]
      md:w-3/4
      bg-white
      overflow-hidden
      right-0
      top-12
      text-sm
      hover:cursor-pointer
      "
        >
          <div className="flex flex-col ">
            {currentUser ? (
              <>
                <div className="hover:cursor-pointer hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={() => {}} label="My trips" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={() => {}} label="My reservations" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={() => {}} label="My favourites" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={() => {}} label="My Properties" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={() => {}} label="Airbnb My Home" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem
                    onClick={() => {
                      signOut();
                    }}
                    label="Log Out"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="hover:cursor-pointer hover:bg-neutral-100">
                  {" "}
                  <MenuItem onClick={loginModal.onOpen} label="login" />
                </div>
                <div className="hover:bg-neutral-100">
                  {" "}
                  <MenuItem
                    onClick={() => {
                      registerModal.onOpen();
                    }}
                    label="Sign up"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
