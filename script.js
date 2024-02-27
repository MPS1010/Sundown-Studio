const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
} );

/*var a = document.querySelector("#elem1")
var image= a.getAttribute("data-image")
console.log(image)*/


var elemC= document.querySelector("#elem-container")
var fixed=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display="none"
})

/*var elem1= document.querySelector("#elem1")
elem1.addEventListener("mouseenter", function(){
    var image=elem1.getAttribute("data-image")
    fixed.style.backgroundImage=`url(${image})`
    
})*/      // for one image only .
 
var elems= document.querySelectorAll(".elem")   //all deta we will get in console will be in form of node list.
elems.forEach(function(e){                       //loop
    e.addEventListener("mouseenter", function(){
        var image= e.getAttribute("data-image")
        fixed.style.backgroundImage=`url(${image})`
    })

})


 var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });