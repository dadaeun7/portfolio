import { useEffect } from "react";
import "../css/mainHeader.css"
import Logo from "../js/mainHeaderLogo.js"


export default function MainHeader(){

    return(
        <>
            <div className="main-header">
                <div className="main-header-left"
                ><div>기술스택</div>
                <div className="stack-list" style={{opacity: '0'}}>
                    <div>javascript</div>
                    <div>node</div>
                    <div>typescript</div>
                    <div>react</div>
                </div>
                </div>
                <div><Logo /></div>
                <div className="main-header-right"
                ><div>다이렉트</div>
                <div className="direct-list" style={{opacity: '0'}}>
                    <div>sns</div>
                    <div>email</div>
                    <div>board</div>
                </div>
                </div>
            </div>
            <div className="logo-intro" 
                style={{ 
                    fontSize: '11px',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    opacity: '0',
                }}>‘세개의 체를 이루어 예측할 수 없는 새로운 것을 제공합니다.’</div>
            </>
    )
}