import Dashboard from "./Dashboard";

export default function SideBar() {
  return (
    <aside
      className="w-1/10 bg-header text-text flex flex-col gap-10 p-6 font-Inter text-[18px] border-r border-border"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <h3 className="text-accent font-semibold">Dashboard</h3>
      <h3 className="text-text-secondary">Dashboard</h3>
      <h3 className="text-text-secondary">Dashboard</h3>
      <h3 className="text-text-secondary">Dashboard</h3>
    </aside>
  );
}
