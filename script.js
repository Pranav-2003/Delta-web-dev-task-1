var items = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
var items1 = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17","t18","t19","t20","t21","t22","t23","t24","t25","t26","t27","t28","t29","t30","t31","t32","t33","t34","t35","t36"]
const list = [];
var tl = [];
var clicks = 0;
var round = 0;
var start = 1;
var item = "";
var t = [];
var person = ""
window.addEventListener("load",function(){
  test = document.getElementById("t1");
  if(test==null){
    tile_blink();
  }
  else{
    person = prompt("Please Enter Your Name (if not then score will not be saved):")
    tile_blink1();
  }
},false);
function check(id) {
    if (list.includes(id)) {
      if (!t.includes(id)) {
        t.push(id);
        clicks += 1;
      }
      if (!tl.includes(id)) {
        tl.push(id);
      }
    } else {
      box=document.getElementById("end");
      box.style.display="initial";
      sc=document.getElementById("score");
      sc.innerHTML = round-1;
    }
    if (round == clicks && list.length == tl.length && round!=16) {
      start = 1;
      tile_blink();
    }
    if (clicks == 16 && list.length == tl.length) {
      box=document.getElementById("win");
      box.style.display="initial";
    }
}
function tile_blink() {
  if (start == 1 && round != 16) {
    round += 1;
    clicks = 0;
    start = 0;
    t.length=0
    item = items[Math.floor(Math.random() * items.length)];
    items = items.filter(function (value) {
      return value != item;
    });
    list.push(item);
    for (let i in list) {
      j = document.getElementById(list[i]);
      var n = j.cloneNode(true);
      j.parentNode.replaceChild(n, j);
    }
    for (let x in list) {
      var y = document.getElementById(list[x]);
      y.style.pointerEvents="none";
      y.classList.add(list[x]);
      y.style.animationDelay = x * 1.7 + "s";
      y.style.animationName = list[x];
      setTimeout((function(y){return function(){y.style.pointerEvents="auto"}})(y),round*1550);
    }
  }
}

function check1(id){
  var ts = document.getElementById("tilesound");
  var gs = document.getElementById("endsound");
  var ws = document.getElementById("winsound");
  ts.play();
  if (!t.includes(id)) {
    if (list.includes(id)&&(list[clicks]==id)) {
      t.push(id);
      clicks += 1;
    }
    else {
      var d = {};
      if(person!=null&&person!=""){
        localStorage.setItem(person,round-1);}
      for (var i = 0; i < localStorage.length; i++){
        d[localStorage.key(i)] = localStorage.getItem(localStorage.key(i));
      }
      var arr = Object.keys(d).map(function(key) {
        return [key, d[key]];
      });
      arr.sort(function(first, second) {
        return second[1] - first[1];
      });
      if(arr.length<5){
        for(var j in arr){
          var temp = parseInt(j) + 1;
          var n = "p"+(temp).toString();
          var s = "s"+(temp).toString();
          var sv = document.getElementById(s);
          var nm = document.getElementById(n);
          nm.innerHTML = arr[j][0];
          sv.innerHTML = arr[j][1];
        }
      }
      else{
        for(var j in arr.slice(0,5)){
          var temp = parseInt(j) + 1;
          var n = "p"+(temp).toString();
          var s = "s"+(temp).toString();
          var sv = document.getElementById(s);
          var nm = document.getElementById(n);
          nm.innerHTML = arr[j][0];
          sv.innerHTML = arr[j][1];
        }
      }
      box=document.getElementById("end1");
      sb=document.getElementById("scoreboard");
      sb.style.display="initial"
      box.style.display="initial";
      sc=document.getElementById("score");
      sc.innerHTML = round-1;
      gs.play();
    }
    if (!tl.includes(id)) {
      tl.push(id);
    }
  }
  if (round == clicks && list.length == tl.length && round!=36) {
    start = 1;
    tile_blink1();
  }
  if (clicks == 36 && list.length == tl.length) {
    ws.play()
    box=document.getElementById("win1");
    box.style.display="initial";
  }
}

function tile_blink1(){
  if (start == 1 && round != 36) {
    round += 1;
    clicks = 0;
    start = 0;
    t.length=0
    item = items1[Math.floor(Math.random() * items1.length)];
    items1 = items1.filter(function (value) {
      return value != item;
    });
    list.push(item);
    for (let i in list) {
      j = document.getElementById(list[i]);
      var n = j.cloneNode(true);
      j.parentNode.replaceChild(n, j);
    }
    for (let x in list) {
      var y = document.getElementById(list[x]);
      y.style.pointerEvents="none";
      y.classList.add(list[x]);
      y.style.animationDelay = x * 1.7 + "s";
      y.style.animationName = list[x];
      setTimeout((function(y){return function(){y.style.pointerEvents="auto"}})(y),round*1550);
    }
  }
}
function stop(){
  var s = document.getElementById("tilesound");
  s.pause()
}
function stopdisplay(){
  var b = document.getElementById("scoreboard");
  b.style.display = "none";
}