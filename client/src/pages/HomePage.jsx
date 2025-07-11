import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Intake from "./Intake";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden min-h-0">
        <SideBar />
        <main className="flex-1 overflow-auto min-h-0">
          <Intake />
        </main>
      </div>
    </div>
  );
}
