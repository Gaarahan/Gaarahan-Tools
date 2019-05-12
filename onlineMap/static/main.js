let map ;
let watching = false;
let path = [];
let watchId = undefined;
let curPosMarker = undefined;
let geoOptions = {
  maximumAge : 0, // 不使用缓存位置值
  timeout : 3000, // 三秒判定超时
  enableHighAccuracy : true // 高精度
};
let lines = [];
window.onload = ()=>{
  map = initMap();
  initEnv();
  document.querySelector('#btnStart').onclick = startWatch;
  document.querySelector('#btnStop').onclick = stopWatch;
};

// 初始化
function initMap(){
  let map = new AMap.Map('map',{
    center: [116.397428, 39.90923],
    zoom : 10
  });
// 添加控制插件 [工具条，定位]
  AMap.plugin(['AMap.Geolocation','AMap.ToolBar'],function(){//异步加载插件
    const toolbar = new AMap.ToolBar();
    map.addControl(toolbar);
    const geolocation = new AMap.Geolocation();
    map.addControl(geolocation);
  });
  return map;
}
function initEnv(){
// 获取权限
  if(!navigator.geolocation){
    alert('您的浏览器还不支持获取地理位置，不能使用该工具 *_*! ');
  }
  else{
    watchId = undefined;
    watching = false;
    path = [];
    navigator.geolocation.getCurrentPosition(
        getPosSuccess,
        getPosFail,
        geoOptions
    );
  }
}
function getPosSuccess(position){
  convertPos(position,(curPos)=>{
    // 更新地图并定位
    map.setZoomAndCenter(18,curPos);
    curPosMarker = new AMap.Marker({
      position :curPos,
    });
    // 创建一个指示文本框
    let markerText = `<span>你在这儿</span>`;
    curPosMarker.setLabel({
      content : markerText,
      direction : 'top'
    });
    map.add(curPosMarker);
  });
}
function getPosFail(error){
  switch (error.code) {
    case 1 : {
      let req = confirm('请允许获取位置请求，否则无法记录您的位置');
      if(req){
        getCurPos();
      }
      else{
        alert('您拒绝了获取位置的请求，应用无法正常运行');
      }
      break;
    }
    default : {
      alert('获取位置失败，请检查您的设备');
    }
  }
}
// 初始化结束

// 监听事件
function startWatch(){
  if(watching){
    alert('正在记录中。。。');
    return false;
  }

  watching = true;
  map.remove(lines);
  map.remove(curPosMarker);
  lines = [];
  watchId = navigator.geolocation.watchPosition((pos)=>{
    convertPos(pos,(curPos)=>{
      path.push(curPos);
      renderPath(path);
    })
  },()=>{
    alert('记录你的位置时出错');
  },geoOptions);
}
function stopWatch(){
  navigator.geolocation.clearWatch(watchId);
  watching = false;
  setMarker(path[path.length - 1],'stopMarker');
}
// 监听事件结束

// 工具
function convertPos(pos,callback){
  let gpsPos = [pos.coords.longitude,pos.coords.latitude];
  console.log('beforeParse',gpsPos);
  AMap.convertFrom(gpsPos,'gps',function (status, result) {
    if(result.info === 'ok'){
      console.log('parsed',result.locations[0]);
      callback(result.locations[0]);
    }
    else{
      alert('地址转化失败');
    }
  })
}
function renderPath(path) {
  if(path.length === 1){
    setMarker(path[0]);
  }
  else{
    const polyline = new AMap.Polyline({
      path : path.slice(-2),
      borderWeight: 1,
      showDir : true,
      strokeColor: "#23c789",
      lineJoin : 'round',
      strokeOpacity: .6,
      strokeWeight: 4,
      strokeStyle: "solid",
    });
    lines.push(polyline);
    polyline.setMap(map);
  }
}
function setMarker(pos,kind = 'startMarker'){
  const curIcon = createMarkerIcon(kind);

  let curPosMarker = new AMap.Marker({
    position : pos,
    title : kind,
    icon : curIcon
  });
  map.add(curPosMarker);
}
function createMarkerIcon(kind){
  let offset = kind === "startMarker"?new AMap.Pixel(-9, -3):new AMap.Pixel(-95,-3);
  let options = {
    size: new AMap.Size(25, 34),
    image: './source/dir-marker.png',
    imageSize: new AMap.Size(135, 40),
    imageOffset: offset
  };
  return new AMap.Icon(options);
}
