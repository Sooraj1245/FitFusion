import Dashboard from "./Dashboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
const SidebarItemGen = (props) => (
  <div className=" w-full flex group gap-2 justify-evenly items-center  text-[17px] font-semibold font-Mont bg-gray-50/5 p-3 rounded-lg hover:bg-accent-hover/80 transition-colors duration-150">
    <FontAwesomeIcon
      className="text-[20px] lg:text-[17px] text-blue-400 group-hover:text-blue-950 transition-colors duration-150"
      icon={props.icon}
    />
    <span className="hidden lg:block">{props.name}</span>
  </div>
);
export default function SideBar() {
  return (
    <aside
      className=" w-1/6 md:w-1/8 border-border border-r shadow-md bg-gradient-to-br from-[#141620] to-[#1f2333] flex flex-col items-center py-6"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <div className="flex flex-col gap-10">
        <SidebarItemGen name="Dashboard" icon={faDashboard} />
        <SidebarItemGen name="Food" icon={faUtensils} />
        <SidebarItemGen name="Workout" icon={faDumbbell} />
      </div>
    </aside>
  );
}
