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
        <div className="main-header-menu">
            <StackPart value={menuCur[0]} curSwap={curSwap} />
            <DirectPart value={menuCur[1]} curSwap={curSwap} />
        </div>

    )
}

function backAnimation(){
    const background = document.querySelector('.main-menu-background');
    background.style.height = 0;
    let upIndex = 0;

    for(let i = 0; i < 200; i++){
        upIndex += 1;
        background.style.height = `${upIndex}px`;
    }
}

function unBackAnimation(){
    const background = document.querySelector('.main-menu-background');

    for(let i = 0; i < 200; i++){
        let curHeight = 200;
        curHeight -= 1;
        background.style.height = `${curHeight}px`;
    }
}

function StackPart({ value, curSwap }){

    const [ header, setHeader] = useState(false);

    return(
        <ul
            onMouseEnter={e => {
                setHeader(true); 
                curSwap(0);
                backAnimation();
            }} 

            onMouseLeave={e => {
                setHeader(false); 
                curSwap(0);
                unBackAnimation();
            }}
        >
            <li className="menu-stack-title">기술스택</li>
            { value && header ? <StackPartHover /> : '' }
        </ul>
    )
}

function StackPartHover(){
    return (
        <li className="stack-hover">
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
        </li>
    )
}

function DirectPart({value, curSwap}){

    const [ direct, setDirect ] = useState(false);

    return(
        <ul
            onMouseEnter={e => {
                setDirect(true);
                curSwap(1);
            }}
            onMouseLeave={e => {
                setDirect(false);
                curSwap(1);
            }}
        >
            <li className="menu-direct-title">다이렉트</li>
            {value && direct ? <DirectPartHover /> : ''}
        </ul>
    )
}

function DirectPartHover(){
    return (
        <li className="direct-hover">
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
        </li>
    )
}