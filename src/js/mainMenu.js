import { useState } from "react";
import "../css/mainMenu.css";

export default function MainMenu(){

    const [menuCur, setMenuCur] = useState([0,0]);

    function curSwap(index){

        const swapArray =  menuCur.map((value, i) => {
            if(i === index){
                return value = !value;
            }else{
                return value = 0;
            }
        })

        setMenuCur(swapArray);
    }

    return(
        <div className="main-header-menu"
            onMouseEnter={()=>{backAnimation(true);}} 
            onMouseLeave={()=>{backAnimation(false);}}
        >
            <StackPart 
                value={menuCur[0]} 
                curSwap={curSwap} />
            <DirectPart 
                value={menuCur[1]} 
                curSwap={curSwap} />
        </div>

    )
}

function backAnimation(isState){

    const background = document.querySelector('.main-menu-background');
    const mainMenuList = document.querySelector('.main-header-menu');

    if(isState){
        mainMenuList.style.zIndex = '1';
        background.style.animationName = 'backdrop';
        background.style.animationDuration = '0.5s';
        background.style.height = '300px';

    }else{
        mainMenuList.style.zIndex = '0';
        background.style.animationName = 'unbackdrop';
        background.style.animationDuration = '0.5s';
        background.style.height = '0px';

    } 
        
}

function StackPart({ value, curSwap }){

    const [ stack, setStack] = useState(false);
    const stackHover = document.querySelector('.stack-hover');

    return(
        <ul
            onMouseEnter={() => {
                setStack(true); 
                curSwap(0);
            }} 

            onMouseLeave={() => {
                setStack(false); 
                curSwap(0);
            }}
        >
            <li className="menu-stack-title">기술스택</li>
            {value && stack ? <StackPartHover /> : ''}
        </ul>
    )
}

function DirectPart({ value, curSwap }){

    const [ direct, setDirect ] = useState(false);

    return(
        <ul
            onMouseEnter={() => {
                setDirect(true);
                curSwap(1);
            }}
            onMouseLeave={() => {
                setDirect(false);
                curSwap(1);
            }}
        >
            <li className="menu-direct-title">다이렉트</li>
            {value && direct ? <DirectPartHover /> : ''}
        </ul>
    )

}

function StackPartHover(){
    return (
        <div className="stack-hover">
            <ul>
                <li>개발언어</li>
                <li>Java</li>
                <li>C</li>
                <li>Linux</li>
                <li>JavaScript</li>
            </ul>   
            <ul>
                <li>디자인 툴</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Figma</li>
                <li>Blender</li>
            </ul>
        </div>
    )
}

function DirectPartHover(){

    return (
        <div className="direct-hover">
            <ul>
                <li>Sns</li>
                <li>github</li>
                <li>instagram</li>
            </ul>   
            <ul>
                <li>Q&a</li>
                <li>email</li>
                <li>board</li>
            </ul>
        </div>
    )
}
