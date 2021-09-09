/*start of spining wheel */

window.onload = function() {
  document.getElementById('button').onclick = function() {
    document.getElementById('modalOverlay').style.display = 'none'
  };
};


/* dialog box*/

$('.display').hide(0);
$('.dismiss').hide(0);


(function() {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Congratulations! You won free Frog Sticker on BLITZPOOLS",
    2: "Congratulations! You won free Snails Sticker on BLITZPOOLS",
    3: "Congratulations! You won free Dolphin Sticker on BLITZPOOLS",
    4: "Congratulations! You won free LadyBug Sticker on BLITZPOOLS",
    5: "Congratulations! You won free Koala Sticker on BLITZPOOLS",
    6: "Congratulations! You won free Unicron Sticker on BLITZPOOLS",
    7: "Congratulations! You won free Dragon Sticker on BLITZPOOLS",
    8: "Congratulations! You won free Snowman Sticker on BLITZPOOLS",
  }

    
  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolSegments[winningSymbolNr];
    $('.display').show(0);
  $('.display').fadeIn(5000);
  
    $('.dismiss').show(0);
  $('.dismiss').fadeIn(5000);
  }
  $('.dismiss').click(function(){
    $('.display').hide(0);
    $('.dismiss').hide(0);
  });

  
  startButton.addEventListener('click', () => {
    // Reset display
    display.innerHTML = "Spinning..";
    // // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(3000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();

/*end of spining wheel */

/*start of mobile spinning wheel */

window.onload = function() {
  document.getElementById('button11').onclick = function() {
    document.getElementById('modalOverlay').style.display = 'none'
  };
};


/* dialog box*/

$('.display1').hide(0);
$('.dismiss1').hide(0);


(function() {
  const wheel1 = document.querySelector('.wheel1');
  const startButton1 = document.querySelector('.button11');
  const display1 = document.querySelector('.display1');
  
  let deg = 0;
  let zoneSize = 45; // deg

  // Counter clockwise
  const symbolSegments = {
    1: "Congratulations! You won free Frog Sticker on BLITZPOOLS",
    2: "Congratulations! You won free Snails Sticker on BLITZPOOLS",
    3: "Congratulations! You won free Dolphin Sticker on BLITZPOOLS",
    4: "Congratulations! You won free LadyBug Sticker on BLITZPOOLS",
    5: "Congratulations! You won free Koala Sticker on BLITZPOOLS",
    6: "Congratulations! You won free Unicron Sticker on BLITZPOOLS",
    7: "Congratulations! You won free Dragon Sticker on BLITZPOOLS",
    8: "Congratulations! You won free Snowman Sticker on BLITZPOOLS",
  }

    
  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display1.innerHTML = symbolSegments[winningSymbolNr];
    $('.display1').show(0);
  $('.display1').fadeIn(5000);
  
    $('.dismiss1').show(0);
  $('.dismiss1').fadeIn(5000);
  }
  $('.dismiss1').click(function(){
    $('.display1').hide(0);
    $('.dismiss1').hide(0);
  });

  
  startButton1.addEventListener('click', () => {
    // Reset display
    display1.innerHTML = "Spinning..";
    // // Disable button during spin
    startButton1.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(3000);
    // Set the transition on the wheel
    wheel1.style.transition = 'all 5s ease-out';
    // Rotate the wheel
    wheel1.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel1.classList.add('blur');
  });

  wheel1.addEventListener('transitionend', () => {
    // Remove blur
    wheel1.classList.remove('blur');
    // Enable button when spin is over
    startButton1.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel1.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel1.style.transform = `rotate(${actualDeg}deg)`;
    // Calculate and display the winning symbol
    handleWin(actualDeg);
  });
})();

/*end of mobile spinning wheel */

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const header=document.getElementById('hea');



openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
mainMenu.addEventListener('click',close1);
function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
function close1(){
  mainMenu.style.top = '110%';
  mainMenu.style.display = 'flex';
    // mainMenu.style.top = '0';
}

window.addEventListener("scroll",function(){
    var header=document.querySelectorAll("nav");
    header.classList.bottom("sticky",window.scrollY>0)

})

/*end of pop up */

/* scroll up*/

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 560) { // Show backToTopButton
    if(!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if(backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function() {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;
  
  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t + 2) + b;
};

/*end of scroll up*/




/*Download now */

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
  });






/*end of download now*/
/* typing animation*/





var acordion = document.getElementsByClassName('accordion');

var i;
var len = acordion.length;
for(i = 0; i<len; i++){
    acordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        var panal = this.nextElementSibling;
        if(panal.style.maxHeight){
            panal.style.maxHeight = null;
        }else{
            panal.style.maxHeight = panal.scrollHeight + 'px';
        }
    })
}








/*review tab*/

function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});


/*start of FAQs*/ 

const faqs=document.querySelectorAll(".faq");

faqs.forEach((faq)=>{
  faq.addEventListener("click",()=>{

  faq.classList.toggle("active");
})
})

/*end of FAQs*/


/*contact*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});








/*start of marquee */
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
/*end of marquee */