import { Outlet } from "react-router-dom"
import { SideBar } from "../components/sidebar"
import { useToggle } from "../context/toggle_context";

const SideBarLayout = () => {
    const { toggle, toggleMenu } = useToggle();
    return (
        <div className="w-full flex h-screen">
            <aside className={`lg:w-[20%] md:w-[50%] w-[70%] lg:static fixed z-50 transform duration-500 transition-transform ease-in-out lg:translate-x-0 ${toggle ?"translate-x-0" : "-translate-x-full"}`}>
                <SideBar />
            </aside>
            <main className="lg:w-[70%] w-full flex-1 relative overflow-y-auto z-0" onClick={() => toggle && toggleMenu(false)}>
                <Outlet />
            </main>
        </div>
    );
}

export default SideBarLayout;