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
        <>
            <div className="main-header-menu"
                onMouseEnter={()=>
                    {
                        backAnimation(true, '120px');
                        backBodyBlur(true, '4px');
                    }
                } 
                onMouseLeave={()=>
                    {
                        backAnimation(false);
                        backBodyBlur(false);
                    }
                }
            >
            <StackPart 
                value={menuCur[0]} 
                curSwap={curSwap} />
            <DirectPart 
                value={menuCur[1]} 
                curSwap={curSwap} />
            </div>
            <div className="main-menu-background"></div>
        </>

    )
}

function backBodyBlur(isState, blurValue){
    const mainBody = document.querySelector('#main-body');

    if(isState){
        mainBody.style.animationName = 'blur';
        mainBody.style.animationDuration = '0.5s';
        mainBody.style.filter = `blur(${blurValue})`;
    }else{
        mainBody.style.animationName = 'unBlur';
        mainBody.style.animationDuration = '0.5s';
        mainBody.style.filter = 'blur(0px)';
    }
}

function backAnimation(isState, backHeight){

    const background = document.querySelector('.main-menu-background');


    if(isState){
        background.style.animationName = 'backdrop';
        background.style.animationDuration = '0.5s';
        background.style.height = backHeight;

    }else{
        background.style.animationName = 'unbackdrop';
        background.style.animationDuration = '0.5s';
        background.style.height = '0px';
    } 
        
}

function StackPart({ value, curSwap }){

    const [ stack, setStack] = useState(false);

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
