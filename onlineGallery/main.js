let moveStartX; // 手指移动开始位置
let con;
let curStart = 0;
let curMoveX;
let picList;
let halfBodyWidth = document.body.clientWidth / 2;
window.onload = ()=>{
  con = document.querySelector('.con');
  con.onclick = showDetail;
};
function showDetail(e){
  let curEle = e.target;
  if(curEle.className.toLowerCase() !== "single-pic"){ return false; }

  let con = document.querySelector('.con');
  let exitBtn = document.querySelector('.exit-btn');
  picList = document.querySelectorAll('.single-pic');
  let curPos = getCurPos(curEle);

  picList.forEach(val=>{
    val.style.transition = 'width .3s linear,height .3s linear';
  });
  curStart = -1 * curPos * document.body.clientWidth;
  exitBtn.style.display = 'inline-block';
  con.classList.add('preview-mode');
  con.style.transform = `translateX(${curStart}px)`;
  addTouchListener(con);
  exitBtn.onclick = exitPreview;
  con.onclick = undefined;
}
function getCurPos(curPicEle){
  return Array.from(picList).findIndex(val=>{
    return curPicEle === val;
  })
}
function addTouchListener(con){
  con.ontouchstart = (e)=>{
    con.classList.remove('animation');
    moveStartX = e.changedTouches[0].pageX;
  };
  con.ontouchmove = (e)=>{
    e.preventDefault();

    curMoveX = e.changedTouches[0].pageX - moveStartX;
    con.style.transform = `translateX(${curMoveX + curStart}px)`;
  };
  con.ontouchend = (e)=>{
    con.classList.add('animation');
    if(Math.abs(curMoveX) > halfBodyWidth) {
      if(!(curStart === 0 && curMoveX > 0) &&
         !(curStart === con.offsetWidth - document.body.offsetWidth && curMoveX < 0)){
        if(curMoveX < 0){ curStart -= document.body.clientWidth; }
        if(curMoveX > 0){ curStart += document.body.clientWidth; }
      }
    }
    con.style.transform = `translateX(${curStart}px)`;
  }
}
function exitPreview(e){
  picList.forEach(val=>{
    val.style.transition = 'none';
  });
  con.classList.remove('preview-mode');
  con.style.transform = `none`;
  e.target.style.display = 'none';
  removeTouchListener(con);
  con.onclick = showDetail;
}
function removeTouchListener(con){
  con.ontouchstart = undefined;
  con.ontouchmove= undefined;
  con.ontouchend= undefined;
}