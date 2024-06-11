import "../css/mainLogo.css";

export default function MainHeaderLogo(){

    return(
        <div className="main-header-logo"
            onMouseEnter={e => {logoIntro(true)}}
            onMouseLeave={e => {logoIntro(false)}}
        >
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
        </div>
    )
}

function logoIntro(state){
    let intro = document.querySelector('.logo-intro');

    if(state){
        intro.style.opacity = '1';
        intro.style.transition = '1s';

    }else{
        intro.style.opacity = '0';
        intro.style.transition = '1s';

    }
}