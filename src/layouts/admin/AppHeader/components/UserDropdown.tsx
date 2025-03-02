import { ShareIcon } from "@components/Svg";
import { Avatar } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown/Dropdown";
import { DropdownItem } from "./Dropdown/DropdownItem";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  const handleSignOut = (): void => {};

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="flex items-center text-gray-700 dark:text-gray-400">
        <span className="mr-3 h-11 w-11 overflow-hidden rounded-full">
          {/* <Image width={44} height={44} src="/images/user/owner.jpg" alt="User" /> */}
          <Avatar className={"bg-primary align-middle font-bold"} size={44}>
            H
          </Avatar>
        </span>

        <span className="mr-1 block text-theme-sm font-medium">Huy</span>

        <svg
          className={`stroke-gray-500 transition-transform duration-200 dark:stroke-gray-400 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="dark:bg-gray-dark absolute right-0 mt-[17px] flex w-[260px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800"
      >
        <div>
          <span className="block text-theme-sm font-medium text-gray-700 dark:text-gray-400">Do Anh Huy</span>
          <span className="mt-0.5 block text-theme-xs text-gray-500 dark:text-gray-400">huyda1610@gmail.com</span>
        </div>

        <ul className="flex flex-col gap-1 border-b border-gray-200 pb-3 pt-4 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <ShareIcon.SolarUser />
              Thông tin
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <ShareIcon.SolarSettings />
              Cài đặt tài khoản
            </DropdownItem>
          </li>
          <li>
            <DropdownItem
              onItemClick={closeDropdown}
              tag="a"
              href="/profile"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              <ShareIcon.SolarInfo />
              Hỗ trợ
            </DropdownItem>
          </li>
        </ul>
        <Link
          to="/signin"
          className="group mt-3 flex items-center gap-3 rounded-lg px-3 py-2 text-theme-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
          onClick={handleSignOut}
        >
          <ShareIcon.SolarLogout />
          Thoát
        </Link>
      </Dropdown>
    </div>
  );
}
