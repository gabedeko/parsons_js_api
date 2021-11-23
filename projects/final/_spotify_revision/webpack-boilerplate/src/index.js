// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of an asset
//import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Appending to the DOM
//const logo = document.createElement('img')
//logo.src = webpackLogo

//const heading = document.createElement('h1')
//heading.textContent = example()

// Test a background image url in CSS
//const imageBackground = document.createElement('div')
//imageBackground.classList.add('image')

// Test a public folder asset
//const imagePublic = document.createElement('img')
//imagePublic.src = '/assets/example.png'

gsap.to(".test-title", {
    
    scrollTrigger: {
        scroller: "#path-container",
        trigger: ".recent-artist-section",
      }, // start the animation when ".box" enters the viewport (once)
    y: -100
  });

/*
var xhr = get("http://api.giphy.com/v1/gifs/search?q=young+dolph&api_key=qOntlWq9Jt5KNQDn0wzCNgKPbmsio60r&limit=5");

xhr.done(function(data) { console.log("success got data", data); });
*/
getUserData();

function getUserData() {
  let url = "http://api.giphy.com/v1/gifs/search?q=young+dolph&api_key=qOntlWq9Jt5KNQDn0wzCNgKPbmsio60r&limit=5";
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(resp) {
      //document.getElementById("Output").innerHTML = JSON.stringify(resp.results);
      //buildUserData( resp.results );

      console.log(resp);
      console.log(resp.data[0].embed_url);

      var img = document.createElement("img");
      img.className += "artist-clip";
      img.src = resp.data[0].embed_url;

      let artist_clip = resp.data[0].embed_url;

      let img_container = document.getElementById("clip-container");
      //img_container.appendChild(img);

      img_container.innerHTML = `<iframe src=${artist_clip} allowFullScreen></iframe>`;

      
      

      //document.getElementById("clip-container").style.backgroundImage = `url(${clip_url})`;
    })
    .catch(function(error) {
      document.getElementById("Output").innerHTML = "There was an error "+error;
    });
}

const app = document.querySelector('#root')
//app.append(logo, heading, imageBackground, imagePublic)
