$(document).ready(function(){$(".bar-icon-div i").click(function(){$(".overly-nav").addClass("open-nav")}),$(".close-icon").click(function(){$(".overly-nav").removeClass("open-nav")}),$(".overly-content a,.overly-social a,.login-div a").click(function(){$(".overly-nav").removeClass("open-nav")}),$(".top-area").click(function(){$(".overly-nav").removeClass("open-nav")}),AOS.init(),$(".carousel-wrap").owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:3e3,dots:!0,responsive:{0:{items:1},325:{items:1}}}),$(window).scroll(function(){var a=$(window).scrollTop();a>=60?($(".header-area").addClass("sticky"),$(".header-area .logo-div h3").addClass("white"),$(".bar-icon-div i").addClass("white"),$(".header-area .menu-div ul li a").addClass("white"),$(".header-area .menu-div ul li a").addClass("background")):a>=0&&($(".header-area").removeClass("sticky"),$(".header-area .logo-div h3").removeClass("white"),$(".bar-icon-div i").removeClass("white"),$(".header-area .menu-div ul li a").removeClass("white"),$(".header-area .menu-div ul li a").removeClass("background"))});$(".header-area .menu-div ul li a");$(".header-area .menu-div ul li a").click(function(a){$(".header-area .menu-div ul li a").removeClass("mactive"),a.target.classList.add("mactive")})});let url="https://rayhan926.github.io/popup/popup.json";fetch(url).then(e=>e.json()).then(function(e){var t=document.createElement("style");t.appendChild(document.createTextNode(e.styles)),document.querySelector("body").appendChild(t);let o=document.createElement("div");o.classList.add("s35_popup_parent"),document.querySelector("body").append(o),setTimeout(()=>{document.querySelector(".s35_popup_parent").innerHTML=e.piroll},1500)}),document.addEventListener("click",function(e){"s35_close"==e.target.classList&&document.querySelector(".s35_popup_wrap").classList.add("s35_hide_popup")});