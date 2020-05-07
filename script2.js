const twitter = document.getElementById('twitter');
const github = document.getElementById('github');
const link6 = document.getElementById('link6');
const link7 = document.getElementById('link7');
//ON
twitter.addEventListener('mouseenter', () => {
　　document.getElementById("text").innerHTML="Twitter"
}, false);

//OFF
twitter.addEventListener('mouseleave', () => {
  　　document.getElementById("text").innerHTML=""
}, false);

  //ON
github.addEventListener('mouseenter', () => {
　　document.getElementById("text").innerHTML="Github"
}, false);

//OFF
github.addEventListener('mouseleave', () => {
  　　document.getElementById("text").innerHTML=""
}, false);
//ON
link6.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="TOPへ戻る"
}, false);
  
//OFF
link6.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);
//ON
link7.addEventListener('mouseenter', () => {
  　　document.getElementById("text2").innerHTML="2003年11月20日生まれ。<br>生まれ、育ちが横浜で、<br>昔から絵を描く時間に字ばかりを書くタイプ。<br>幼少期は、自分で紙に書いてボードゲームなどを作っていた。"
}, false);
  
//OFF
link7.addEventListener('mouseleave', () => {
    　　document.getElementById("text2").innerHTML=""
}, false);
