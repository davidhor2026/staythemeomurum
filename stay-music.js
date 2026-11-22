(function(){
'use strict';
if(document.getElementById('stay-bgm'))return;
var KEY='staySiteMusicV1',state={playing:false,time:0,volume:.35};
try{var saved=JSON.parse(sessionStorage.getItem(KEY)||'null');if(saved&&typeof saved==='object'){
state.playing=saved.playing===true;
state.time=Number.isFinite(Number(saved.time))?Math.max(0,Number(saved.time)):0;
state.volume=Number.isFinite(Number(saved.volume))?Math.max(0,Math.min(1,Number(saved.volume))):.35;
}}catch(e){}
var root=document.createElement('div');root.id='stay-bgm';root.setAttribute('role','group');root.setAttribute('aria-label','홈페이지 배경음악');
root.innerHTML='<button id="stay-bgm-toggle" type="button" aria-label="배경음악 재생">♫ 음악 듣기</button>';
var audio=document.createElement('audio');audio.src='christmas-piano-bgm.mp3';audio.preload='none';audio.loop=true;audio.volume=state.volume;
root.appendChild(audio);
// Put the control inside the existing representative hero/header, never above it.
var hero=document.querySelector('header.home-header, header.sub-header, header.exam-header, header.quiz-hero, main header.hero, header.hero, main > header, body > header');
if(!hero){hero=document.querySelector('main, .checkin-page, .checkout-page, .wrap')||document.body;}
// Anchoring a positioned child doesn't alter the header's height or normal layout.
if(window.getComputedStyle(hero).position==='static')hero.style.position='relative';
hero.appendChild(root);
var toggle=root.querySelector('#stay-bgm-toggle');
var wantsPlayback=state.playing,restoreTime=state.time;
function store(){try{sessionStorage.setItem(KEY,JSON.stringify({playing:wantsPlayback,time:audio.currentTime||restoreTime||0,volume:audio.volume}));}catch(e){}}
function label(){var on=!audio.paused;toggle.textContent=on?'Ⅱ 음악 일시정지':wantsPlayback?'♫ 이어 듣기':'♫ 음악 듣기';toggle.setAttribute('aria-label',on?'배경음악 일시정지':wantsPlayback?'배경음악 이어 듣기':'배경음악 재생');toggle.setAttribute('aria-pressed',String(on));}
function seek(){if(restoreTime>0){try{if(Number.isFinite(audio.duration)&&audio.duration>0){audio.currentTime=restoreTime%audio.duration;}else{audio.currentTime=restoreTime;}}catch(e){}}}
audio.addEventListener('loadedmetadata',seek,{once:true});
function start(){seek();var p=audio.play();if(p&&p.catch)p.catch(function(){label();});label();}
toggle.addEventListener('click',function(){if(!audio.paused){wantsPlayback=false;audio.pause();}else{wantsPlayback=true;start();}store();label();});
audio.addEventListener('play',function(){wantsPlayback=true;store();label();});
audio.addEventListener('pause',function(){store();label();});
audio.addEventListener('timeupdate',function(){restoreTime=audio.currentTime;});
window.addEventListener('pagehide',store);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')store();});
label();if(wantsPlayback)start();
})();
