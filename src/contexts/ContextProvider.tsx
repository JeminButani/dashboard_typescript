import React, {  useState } from 'react'

type MyInitialStateType = {
    chat: boolean,
    cart: boolean,
    userProfile: boolean,
    notification: boolean,
}

const initialState: MyInitialStateType = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

type MyContextType = {
    initialState: MyInitialStateType,
    screenSize: number | undefined,
    setScreenSize: React.Dispatch<React.SetStateAction<number | undefined>>,
    currentColor: string,
    setCurrentColor: React.Dispatch<React.SetStateAction<string>>,
    currentMode: string,
    setCurrentMode: React.Dispatch<React.SetStateAction<string>>,
    themeSettings: boolean,
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>,
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>,
    isClicked: MyInitialStateType,
    setIsClicked: React.Dispatch<React.SetStateAction<MyInitialStateType>>,
    handleClick: (clicked: string) => void,
    setMode: (e: any) => void,
    setColor: (color: string) => void
}

const Context = React.createContext<MyContextType>({} as MyContextType)

interface Props {
    children: React.ReactNode
  }

const ContextProvider: React.FC<Props> = ({ children } ) : JSX.Element => {
    const [screenSize, setScreenSize] = useState<number | undefined>(undefined);
    const [currentColor, setCurrentColor] = useState<string>('#03C9D7');
    const [currentMode, setCurrentMode] = useState<string>('Light');
    const [themeSettings, setThemeSettings] = useState<boolean>(false);
    const [activeMenu, setActiveMenu] = useState<boolean>(true);
    const [isClicked, setIsClicked] = useState<MyInitialStateType>(initialState);

    const setMode = (e : any) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color : string) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked: string) => setIsClicked({ ...initialState, [clicked]: true });

    return (
        <Context.Provider
            value={{
                currentColor,
                currentMode,
                activeMenu,
                screenSize,
                setScreenSize,
                handleClick,
                isClicked,
                initialState,
                setIsClicked,
                setActiveMenu,
                setCurrentColor,
                setCurrentMode,
                setMode,
                setColor,
                themeSettings,
                setThemeSettings
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default ContextProvider

export const useStateContext = () => React.useContext(Context)
