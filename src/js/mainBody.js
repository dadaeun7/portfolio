import "../css/mainBody.css";

function mainBody(){
    return(
        <div id="main-body">
            <div className="main-body-design" onWheel={designDrag}>디자인</div>
            <div className="main-body-project">프로젝트</div>
            <div className="main-body-report">보고서</div>
        </div>
    )
}

function designDrag(){
    console.log(window.scrollY);

}

export default mainBody;