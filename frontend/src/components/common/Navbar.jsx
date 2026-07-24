import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

import SideMenu from "./SideMenu";

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-100 py-3.5 px-8 sticky top-0 z-30 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="flex items-center gap-4">
        <button
          className="block lg:hidden text-slate-700 hover:text-purple-600 font-bold cursor-pointer transition-colors"
          onClick={() => {
            setOpenSideMenu(!openSideMenu);
          }}
        >
          {openSideMenu ? (
            <HiOutlineX className="text-2xl" />
          ) : (
            <HiOutlineMenu className="text-2xl" />
          )}
        </button>

        <h2 className="text-xl font-extrabold text-slate-800 tracking-tight">
          Expense <span className="text-purple-600">Tracker</span>
        </h2>
      </div>

      {/* Optional: Add user greeting or indicators here in future */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1.5 rounded-full">
          Live Panel
        </span>
      </div>

      {openSideMenu && (
        <div className="fixed top-[65px] left-0 right-0 bottom-0 bg-slate-900/20 backdrop-blur-xs z-30 lg:hidden" onClick={() => setOpenSideMenu(false)}>
          <div className="w-64 bg-white h-full" onClick={(e) => e.stopPropagation()}>
            <SideMenu activeMenu={activeMenu} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
