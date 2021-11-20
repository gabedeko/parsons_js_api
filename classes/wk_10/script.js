/* GEOLOCATION */
function youAreHere(position) {
    console.log("position: ", position);
  }
  
  function youHaveMoved(position) {
    console.log("changed position: ", position);
  }
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(youAreHere);
    navigator.geolocation.watchPosition(youHaveMoved);
  }
  
  // Geo options
  const geo_options = {
    enableHighAccuracy: true,
    maximumAge        : 30000,
    timeout           : 27000
  };
  function geo_error() {
    alert("Sorry, no position available.");
  }
  navigator.geolocation.watchPosition(youHaveMoved, geo_error, geo_options);
  
  
  /* simple video play and pause buttons */
  const video = document.getElementsByTagName("video")[0];
  const btn = document.getElementById('play-button');
  const btn1 = document.getElementById('pause-button');
  
  btn.addEventListener('click', playVideo );
  function playVideo(e) {
    video.play();
  }
  
  btn1.addEventListener('click', pauseVideo );
  function pauseVideo(e) {
    video.pause();
  }
  
  /* video progress custom */
  video.addEventListener("timeupdate", updateProgressBar )
  
  function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = Math.floor((100 / video.duration) * video.currentTime);
    progressBar.value = percentage;
    progressBar.innerHTML = percentage + '% played';
  }
  
  // example of a play/pause toggle button
  const btn = document.getElementById('play-pause-button');
  const mediaPlayer = document.getElementById('videoPlayer');
  mediaPlayer.controls = false;
  btn.addEventListener('click', togglePlayPause.bind(btn));
  
  //play pause toggle
  function togglePlayPause() {
     //var btn = document.getElementById('play-pause-button');
     if (mediaPlayer.paused || mediaPlayer.ended) {
        btn.title = 'pause';
        btn.innerHTML = 'pause';
        btn.className = 'pause';
        mediaPlayer.play();
     }
     else {
        btn.title = 'play';
        btn.innerHTML = 'play';
        btn.className = 'play';
        mediaPlayer.pause();
     }
  }
  
  function changeButtonType(btn, value) {
     btn.title = value;
     btn.innerHTML = value;
     btn.className = value;
  }
  
  
  
  /* Canvas - image load */
  
  const canvas = document.getElementById("canvasDrawing1");
  const context = canvas.getContext("2d");
  
  const img = document.createElement('img');
  img.src = 'assets/no_image.gif';
  
  img.addEventListener('load', function() {
    for (let x = 0; x < 200; x+= 30) {
      context.drawImage(img, x, 10, this.height*.05, this.width*.05,);
    }
  })
  
  /* Canvas - random circles */
  const canvas = document.getElementById("canvasDrawing1");
  const context = canvas.getContext("2d");
  
  for (let y = 0; y < 200; y++) {
    let cx = Math.random()*600;
    let cy = Math.random()*400;
    let cw = Math.random()*15;
    // alpha:
    let cc = 'rgba('+ Math.floor(Math.random()*25)*10 + ', ' + Math.floor(Math.random()*25)*10 + ', ' + Math.floor(Math.random()*15)*10 + ', ' + Math.random() + ')';
  
    console.log(y,cx,cy,cw,cc);
  
    context.fillStyle = cc;
    context.moveTo(cx,cy);
    context.beginPath();
  
    context.arc(cx, cy, cw, 0, Math.PI * 2, false);
    context.fill();
    context.lineWidth = 1;
    context.stroke();
  }
  
  
  /* canvas - circles over time */
  //with interval
  let count = 0;
  function init() {
    let timer = setInterval(draw, 10);
    return timer;
  }
  
  function draw() {
    let cx = Math.random()*600;
    let cy = Math.random()*400;
    let cw = Math.random()*15;
    let cc = 'rgb('+ Math.floor(Math.random()*25)*10 + ', ' + Math.floor(Math.random()*25)*10 + ', ' + Math.floor(Math.random()*15)*10 + ')';
  
    console.log(cx,cy,cw,cc);
  
    context.fillStyle = cc;
    context.moveTo(cx,cy);
    context.beginPath();
  
    context.arc(cx, cy, cw, 0, Math.PI * 2, false);
    context.fill();
    count++;
    console.log(count);
    if (count > 200) {
      clearInterval( timer );
    }
  }
  
  init();
  
  