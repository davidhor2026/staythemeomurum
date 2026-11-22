(function(){
'use strict';
if(document.getElementById('stay-bgm'))return;
var KEY='staySiteMusicV1', state={playing:false,time:0,volume:.35};
try{var saved=JSON.parse(sessionStorage.getItem(KEY)||'null');if(saved&&typeof saved==='object'){
state.playing=saved.playing===true;
state.time=Number.isFinite(Number(saved.time))?Math.max(0,Number(saved.time)):0;
state.volume=Number.isFinite(Number(saved.volume))?Math.max(0,Math.min(1,Number(saved.volume))):.35;
}}catch(e){}
var root=document.createElement('div');root.id='stay-bgm';root.setAttribute('role','group');root.setAttribute('aria-label','홈페이지 배경음악');
root.innerHTML='<button id="stay-bgm-toggle" type="button" aria-label="배경음악 재생">♫ 음악 듣기</button><button id="stay-bgm-settings" type="button" aria-label="음량 설정" aria-expanded="false">⚙</button><div id="stay-bgm-panel"><label for="stay-bgm-volume">음량</label><input id="stay-bgm-volume" type="range" min="0" max="100" step="1" aria-label="배경음악 음량"><span id="stay-bgm-percent"></span></div>';
var audio=document.createElement('audio');audio.src='christmas-piano-bgm.mp3';audio.preload='none';audio.loop=true;audio.volume=state.volume;
root.appendChild(audio);document.body.appendChild(root);
var toggle=root.querySelector('#stay-bgm-toggle'),settings=root.querySelector('#stay-bgm-settings'),slider=root.querySelector('#stay-bgm-volume'),pct=root.querySelector('#stay-bgm-percent');
slider.value=Math.round(state.volume*100);pct.textContent=slider.value+'%';
var wantsPlayback=state.playing, restoreTime=state.time;
function store(){try{sessionStorage.setItem(KEY,JSON.stringify({playing:wantsPlayback,time:audio.currentTime||restoreTime||0,volume:audio.volume}));}catch(e){}}
function label(){var on=!audio.paused;toggle.textContent=on?'Ⅱ 음악 일시정지':wantsPlayback?'♫ 이어 듣기':'♫ 음악 듣기';toggle.setAttribute('aria-label',on?'배경음악 일시정지':wantsPlayback?'배경음악 이어 듣기':'배경음악 재생');toggle.setAttribute('aria-pressed',String(on));}
function seek(){if(restoreTime>0){try{if(Number.isFinite(audio.duration)&&audio.duration>0){audio.currentTime=restoreTime%audio.duration;}else{audio.currentTime=restoreTime;}}catch(e){}}}
audio.addEventListener('loadedmetadata',seek,{once:true});
function start(){seek();var p=audio.play();if(p&&p.catch)p.catch(function(){label();});label();}
toggle.addEventListener('click',function(){if(!audio.paused){wantsPlayback=false;audio.pause();}else{wantsPlayback=true;start();}store();label();});
settings.addEventListener('click',function(){var open=root.classList.toggle('open');settings.setAttribute('aria-expanded',String(open));});
slider.addEventListener('input',function(){audio.volume=Number(slider.value)/100;pct.textContent=slider.value+'%';store();});
audio.addEventListener('play',function(){wantsPlayback=true;store();label();});
audio.addEventListener('pause',function(){store();label();});
audio.addEventListener('timeupdate',function(){restoreTime=audio.currentTime;});
window.addEventListener('pagehide',store);document.addEventListener('visibilitychange',function(){if(document.visibilityState==='hidden')store();});
label();
// Safari may reject this attempt after a full-page navigation; user can tap '이어 듣기'.
if(wantsPlayback)start();
})();
