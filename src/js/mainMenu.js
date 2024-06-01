import "../css/mainMenu.css";
import StackList from "../js/mainMenuStack";
import DirectList from "../js/mainMenuDirect";
import { useState } from "react";

function mainMenu(){
    return(
        <div>
            <MainMenuHeader />
        </div>
    )
}

function MainMenuHeader(){
    return(
    <div className="main-menu-header">
        <MenuStack />
        <MenuDirect />
    </div>
    )
}

function MenuStack(){
    const [stackCur, setStackCur] = useState(false);

    function handleStackCur(){
        setStackCur(!stackCur);
    }

    return(
        <div onMouseLeave={handleStackCur}>
            <div className="main-menu-stack" onMouseEnter={handleStackCur}>기술스택</div>
            {stackCur === true && <StackList />}
        </div>
    )
}

function MenuDirect(){
    const [directCur, setdirectCur] = useState(false);

    function handleDirectCur(){
        setdirectCur(!directCur);
    }
    
    return(
        <div onMouseLeave={handleDirectCur}>
            <div className="main-menu-direct" onMouseEnter={handleDirectCur}>다이렉트</div>
            {directCur === true && <DirectList />}
        </div>
        
    )
}
export default mainMenu;