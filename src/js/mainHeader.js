import "../css/mainHeader.css"


export default function MainHeader(){
    return(
        <div className="main-header">
            <div 
            onMouseEnter={
                e => TechStackHover(e.target, true)
            }
            onMouseLeave={
                e => TechStackHover(e.target, false)
            }
            >기술스택</div>
            <div>로고</div>
            <div>다이렉트</div>
        </div>
    )
}

function TechStackHover(target, swapVal){

    if(typeof target == 'object' && swapVal == true){
        target.textContent = '';
        target.insertAdjacentHTML(
            "afterbegin",
            `<div>react</div>
            <div>node</div>
            `
        )
    }else{
        target.textContent = '기술스택';
    }

}