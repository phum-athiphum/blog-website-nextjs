import React, { ReactNode } from "react";
import HeaderBar from "../components/HeaderBar";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#bbc2c0]">
      <HeaderBar />
      <div className="flex mx-auto xl:mx-0">
        <DesktopSidebar />
        <main >
          <div className="flex-1 xl:p-8 h-full">{children}</div>
        </main>
      </div>
    <MobileSidebar/>
    </div>
  );
}
