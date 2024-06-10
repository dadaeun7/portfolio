import "../css/mainBody.css";


export default function mainBody(){
    return(
        <div className="main-body">
            <div className="main-body-desgin"
                onMouseEnter={e => {desingLine(true)}}
                onMouseLeave={e => {desingLine(false)}}
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
                onMouseEnter={e => {projectLine(true)}}
                onMouseLeave={e => {projectLine(false)}}
            >#프로젝트</div>
            <div className="project-line"
                style={{
                    height: '2px',
                    width: '0px',
                    backgroundColor: '#65BF89',
                    transform: 'translate(1000px, 8px)',
                }}>
            </div>
            <div className="main-body-report">#보고서</div>
            <div className="main-body-cursor">
                <div className="mouse"><img src="mouse.png" alt="mouse" style={{width: '18px', height: '27px'}}/></div>
                <div style={{fontSize: '11px'}}>카테고리를 클릭해보세요. </div>
            </div>
        </div>
    )
}

function desingLine(state){

    let line = document.querySelector('.design-line');

    if(state){
        line.style.width = '2000px';
        line.style.transition = '1.5s';
    }else{
        line.style.width = '0px';
        line.style.transition = '1.5s';
    }

}

function projectLine(state){

    let project = document.querySelector('.project-line');

    if(state){
        project.style.width = '2500px';
        project.style.transition = '1.5s';
    }else{
        project.style.width = '0px';
        project.style.transition = '1.5s';
    }
}