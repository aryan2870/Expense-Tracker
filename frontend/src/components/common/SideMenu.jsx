import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SIDE_MENU_DATA } from "../../utils/data";

import { UserContext } from "../../context/UserContext";
import CharAvatar from "../Cards/CharAvatar";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "logout") {
      handleLogout();
      return;
    }

    navigate(route);
  };

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/login");
  };

  return (
    <div className="w-64 h-[calc(100vh-65px)] bg-white border-r border-slate-100 p-6 sticky top-[65px] z-20 flex flex-col justify-between">
      {/* Profile & Navigation Section */}
      <div className="space-y-8">
        {/* Profile Card */}
        <div className="flex flex-col items-center justify-center p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
          <div className="relative group cursor-pointer mb-3">
            {user?.profileImageUrl ? (
              <img
                src={user?.profileImageUrl || ""}
                alt="Profile"
                className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-white ring-4 ring-purple-100 group-hover:ring-purple-200 transition-all duration-300"
              />
            ) : (
              <div className="shadow-md border-2 border-white ring-4 ring-purple-100 group-hover:ring-purple-200 rounded-2xl overflow-hidden transition-all duration-300">
                <CharAvatar
                  fullName={user?.fullName || ""}
                  width="w-16"
                  height="h-16"
                  style="text-lg font-bold"
                />
              </div>
            )}
          </div>

          <h5 className="text-slate-800 font-bold text-sm tracking-tight text-center">
            {user?.fullName || "User"}
          </h5>
          <p className="text-[11px] text-slate-400 mt-0.5 text-center truncate w-full max-w-[150px]">
            {user?.email || "personal account"}
          </p>
        </div>

        {/* Navigation Menu */}
        <div className="space-y-1.5">
          {SIDE_MENU_DATA.map((item, index) => {
            const isActive = activeMenu === item.label;
            return (
              <button
                key={`menu_${index}`}
                className={`w-full flex items-center gap-3.5 text-sm font-semibold cursor-pointer py-3.5 px-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/20"
                    : "text-slate-500 hover:text-purple-600 hover:bg-purple-50/40"
                }`}
                onClick={() => handleClick(item.path)}
              >
                <item.icon className={`text-lg transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-[10px] text-slate-400 text-center">
        v1.0.0 • Expense Tracker
      </div>
    </div>
  );
};

export default SideMenu;
