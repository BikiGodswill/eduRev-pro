import React from "react";
import ProfilePreview from "./ProfilePreview";
import { BiBell, BiSearch } from "react-icons/bi";

export default function NavBar() {
  return (
    <nav className="flex h-18 w-full items-center justify-between gap-4 p-4 px-6">
      <div className="has-[input:focus]:border-accent flex w-[50%] items-center gap-1 rounded-lg border border-stone-300 p-4 py-2">
        <BiSearch size={18} className="cursor-pointer text-stone-600" />
        <input
          type="text"
          placeholder="Search.."
          className="w-full p-0.5 text-sm outline-none"
        />
      </div>

      <ProfilePreview />
    </nav>
  );
}
