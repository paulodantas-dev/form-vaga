import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50 min-h-screen h-full">
      <Outlet />
    </div>
  );
};
