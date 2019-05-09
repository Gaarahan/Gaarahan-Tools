// 添加监听输入改变的事件
window.onload = ()=>{
  let editArea =  document.querySelector('#edit-area');

  editArea.oninput = throttle(onChange);
  editArea.onkeydown = onKeyPress;
};

function onChange(event){
  let previewArea = document.querySelector('.preview-area');
  let markdownStr = event.target.value;

  marked.setOptions({
    langPrefix : 'hljs language-',
    highlight : function(code){
      return hljs.highlightAuto(code).value;
    }
  });
  previewArea.innerHTML = marked(markdownStr);
}
function onKeyPress(){
  if(event.code !== "Tab") return true;

  event.preventDefault();

  let start = this.selectionStart;
  let end = this.selectionEnd;
  if(start === end){
    document.execCommand('insertText',false,"  ");
  }
  else{
    let strBefore = this.value.slice(0,start);
    let curLineStart = strBefore.includes('\n')?strBefore.lastIndexOf('\n')+1 : 0;
    let strBetween = this.value.slice(curLineStart,end+1);
    let newStr = "  " + strBetween.replace(/\n/g,'\n  ');
    let lineBreakCount = strBetween.split('\n').length;
    let newStart = start + 2;
    let newEnd = end + (lineBreakCount + 1)*2;

    this.setSelectionRange(curLineStart,end);
    document.execCommand("insertText",false,newStr);
    this.setSelectionRange(newStart,newEnd);
  }
}
function throttle(fn,time = 500){
  let canRun = true;
  return function(){
    if(!canRun) return;
    canRun = false;
    setTimeout(()=>{
      fn.apply(this,arguments);
      canRun = true;
    },time);
  }
}
