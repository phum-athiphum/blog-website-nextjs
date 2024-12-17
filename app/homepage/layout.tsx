import React, { ReactNode } from "react";
import HeaderBar from "../components/HeaderBar";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-screen flex flex-col bg-[#bbc2c0]">
      <HeaderBar />
      <div className="flex">
        <DesktopSidebar />
        <main >
          <div className="flex-1 p-8 h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
