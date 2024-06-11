import "../css/mainBody.css";


export default function mainBody(){
    return(
        <div className="main-body">
            <div className="main-body-desgin"
                onMouseEnter={e => {lineSet(true, 'design')}}
                onMouseLeave={e => {lineSet(false, 'design')}}
            >#디자인
            </div>
            <div className="design-line" 
                style={{
                    height: '2px',
                    width: '0px',
                    backgroundColor: '#657EBF',
                    transform: 'translate(-1000px,-10px)',
                }}></div>
            <div className="main-body-project"
                onMouseEnter={e => {lineSet(true, 'project')}}
                onMouseLeave={e => {lineSet(false, 'project')}}
            >#프로젝트</div>
            <div className="project-line"
                style={{
                    height: '2px',
                    width: '0px',
                    backgroundColor: '#65BF89',
                    transform: 'translate(1000px, 8px)',
                }}>
            </div>
            <div className="main-body-report"
                onMouseEnter={e => {lineSet(true, 'report')}}
                onMouseLeave={e => {lineSet(false, 'report')}}
            >#보고서</div>
            <div className="report-line"
                style={{
                    height: '2px',
                    width: '0px',
                    backgroundColor: '#BFA665',
                    transform: 'translate(-1000px, 30px)',
                }}></div>
            <div className="main-body-cursor" style={{opacity: '0'}}>
                <div className="mouse"><img src="mouse.png" alt="mouse" style={{width: '18px', height: '27px'}}/></div>
                <div style={{fontSize: '11px'}}>카테고리를 클릭해보세요. </div>
            </div>
        </div>
    )
}

function mouseOnOff(state){
    let cursor = document.querySelector('.main-body-cursor');

    if(state){
        cursor.style.opacity = '1';
        cursor.style.transition = '1s';
    }else{
        cursor.style.opacity = '0';
        cursor.style.transition = '1s';
    }
}
function lineSet(state, target){

    let line = 0;
    let tarLength = 0;
    mouseOnOff(state);

    if(target === 'design')
    {
        tarLength = '1900px';
        line = document.querySelector('.design-line');
    }else if(target === 'project')
    {
        tarLength = '2400px'
        line = document.querySelector('.project-line');
    }else
    {
        tarLength = '2250px'
        line = document.querySelector('.report-line');
    }

    if(state){
        line.style.width = tarLength;
        line.style.transition = '1.5s';
    }else{
        line.style.width = '0px';
        line.style.transition = '1.5s';
    }

}