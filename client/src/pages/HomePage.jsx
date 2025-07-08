import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function HomePage(){
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex flex-1 overflow-hidden">
                <SideBar/>
                <main className="flex-1 overflow-y-auto">
                    <Dashboard />
                </main>
                
            </div>
        </div>
    )
}