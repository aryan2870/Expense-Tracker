import React from "react";

import { LuTrendingUpDown } from "react-icons/lu";

import CARD_2 from "../../assets/images/card2.png";
import AUTH_BG from "../../assets/images/auth_background.png";
import StatsInfoCard from "../Common/StatsInfoCard";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen flex overflow-hidden bg-slate-900">
      {/* Background Image across the entire screen at 20% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${AUTH_BG})` }}
      />
      
      {/* Subtle dotted pattern overlay for high-tech premium feel */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#875cf5 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Floating neon ambient glow blobs */}
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] rounded-full bg-purple-600/25 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-5%] left-[25%] w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[30%] w-[350px] h-[350px] rounded-full bg-pink-500/15 blur-[110px] pointer-events-none z-0" />

      {/* Clean overlay to balance the dark background and visual contrast */}
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px] z-0" />

      {/* Main Content Area */}
      <div className="relative z-10 flex w-full h-full">
        {/* Left Side: Login / Register Form enclosed in Glassmorphic Card */}
        <div className="w-full md:w-[60vw] h-full px-6 md:px-16 py-8 flex flex-col justify-between">
          <h2 className="text-2xl font-bold text-white tracking-wide drop-shadow-md">
            Expense <span className="text-purple-400">Tracker</span>
          </h2>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[32px] border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-[1.01]">
              {children}
            </div>
          </div>
          <div className="text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Expense Tracker. All rights reserved.
          </div>
        </div>

        {/* Right Side: Stats Panel */}
        <div className="hidden md:flex w-[40vw] h-full bg-white/5 backdrop-blur-xl border-l border-white/10 flex-col justify-between p-8 relative overflow-hidden">
          <div className="w-48 h-48 rounded-[40px] bg-purple-600/15 absolute -top-7 -left-5" />
          <div className="w-48 h-56 rounded-[40px] border-[20px] border-fuchsia-600/10 absolute top-[30%] -right-10" />
          <div className="w-48 h-48 rounded-[40px] bg-violet-500/15 absolute -bottom-7 -left-5" />

          <div className="grid grid-cols-1 z-20 w-full">
            <StatsInfoCard
              icon={<LuTrendingUpDown />}
              label="Track Your Income & Expenses Easily"
              value="430,000"
              color="bg-primary"
            />
          </div>

          <div className="relative z-20 w-full flex justify-center mb-8">
            <img
              src={CARD_2}
              alt="Card_2"
              className="w-64 lg:w-[95%] shadow-2xl shadow-purple-950/40 rounded-2xl border border-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
