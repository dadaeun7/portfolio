import "../css/mainHeader.css"
import Logo from "../js/mainHeaderLogo.js"


export default function MainHeader(){
    return(
        <>
            <div className="main-header">
                <div className="main-header-left"
                onMouseEnter={
                    e => TechStackHover(e.target, true)
                }
                onMouseLeave={
                    e => TechStackHover(e.target, false)
                }
                ><span>기술스택</span></div>
                <div><Logo /></div>
                <div>다이렉트</div>
            </div>
            <div className="logo-intro" 
                style={{ 
                    fontSize: '11px',
                    marginTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    opacity: '0',
                }}>‘Let's always try new things and show something new and different from the past.’</div>
            </>
    )
}

function TechStackHover(target, swapVal){

    if(typeof target == 'object' && swapVal == true){
        target.textContent = '';
        target.insertAdjacentHTML(
            "afterbegin",
            `
            <div>node</div>
            <div>react</div>
            <div>c</div>
            <div>linux</div>
            `
        )
        target.style.width = '243.672px';
        target.className = 'main-header-left-hover';
    }else{
        target.textContent = '기술스택';
        target.className = 'main-header-left';
        target.style.width = '60px';
    }

}