import { createContext, useContext, useState } from "react"
import { Outlet } from "react-router-dom"

type toggleProp = {
    toggle : boolean,
    toggleMenu : (display : boolean) => void
}
const toggleContext = createContext<toggleProp | undefined>(undefined)

const ToggleState = () => {
    const [toggle, setToggle] = useState<boolean>(false);

    const toggleMenu = (display : boolean) => {
        setToggle(display);
    }

    return (
        <toggleContext.Provider value={{ toggle, toggleMenu }}>
            <Outlet />
        </toggleContext.Provider>
    );
}

export const useToggle = () => {
    const context = useContext(toggleContext);

    if (!context) return null;

    return context;
}

export { ToggleState };
