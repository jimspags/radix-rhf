import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <main className="bg-highlight h-full">
        <aside className="w-[300px] fixed">
          <Sidebar />
        </aside>

        <div className="ml-[300px] max-w-6xl pt-16 px-24">{children}</div>
      </main>
    </>
  );
};

export default Layout;
