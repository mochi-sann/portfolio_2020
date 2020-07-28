const twitter = document.getElementById('twitter');
const github = document.getElementById('github');
const link1 = document.getElementById('link1');
const link2 = document.getElementById('link2');
const link3 = document.getElementById('link3');
const link4 = document.getElementById('link4');
const link5 = document.getElementById('link5');
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
link1.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="Nakano's portfolio 2019"
}, false);
  
//OFF
link1.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);

//ON
link2.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="PROFILE"
}, false);
  
//OFF
link2.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);

//ON
link3.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="WORKS"
}, false);
  
//OFF
link3.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);

//ON
link4.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="SKILL"
}, false);
  
//OFF
link4.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);

//ON
link5.addEventListener('mouseenter', () => {
  　　document.getElementById("text").innerHTML="HOBBY"
}, false);
  
//OFF
link5.addEventListener('mouseleave', () => {
    　　document.getElementById("text").innerHTML=""
}, false);