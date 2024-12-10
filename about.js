

document.querySelectorAll('.bubble').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

document.querySelectorAll('contact-p').forEach((p) => {
  p.addEventListener('onmouseover', () => {
      document.querySelectorAll('.contact-p').forEach((b) => b.classList.remove('active'));
      p.classList.add('active');
  });
});

const scrollText = document.querySelector('.scroll-indicator');

// Function to check the scroll position
function checkScroll() {
  if (window.scrollY > 0) {
    // Add the 'hidden' class to fade out the text when scrolling down
    scrollText.classList.add('hidden');
  } else {
    // Remove the 'hidden' class to show the text when at the top of the page
    setTimeout(() => {
        // Code to execute after the delay
        scrollText.classList.remove('hidden');
      }, 1200);
    
  }
}
window.addEventListener('scroll', checkScroll);
checkScroll();

// JavaScript
let elementsArray = document.querySelectorAll(".tile");
let workTitle = document.querySelector(".individual-fade-in")
console.log(workTitle);
window.addEventListener('scroll', fadeIn ); 
function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
    var distInView = workTitle.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
        workTitle.classList.add("inView");
    } else {
        workTitle.classList.remove("inView");
    }
}
fadeIn();

var path1 = document.querySelector('.line-orange');
var path2 = document.querySelector('.line-yellow');
var path3 = document.querySelector('.line-blue')

// Get length of path... ~577px in this demo
var pathLength1 = path1.getTotalLength();
var pathLength2 = path2.getTotalLength();
var pathLength3 = path3.getTotalLength();
path1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
path2.style.strokeDasharray = pathLength2 + ' ' + pathLength2;
path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;

// Offset the dashes so the it appears hidden entirely
path1.style.strokeDashoffset = pathLength1;
path2.style.strokeDashoffset = pathLength2;
path3.style.strokeDashoffset = pathLength3;

window.addEventListener("scroll", function(e) {
 
    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      
    // Length to offset the dashes
    var drawLength1 = pathLength1 * scrollPercentage;
    var drawLength2 = pathLength2 * scrollPercentage;
    var drawLength3 = pathLength3 * scrollPercentage;
    
    // Draw in reverse
    path1.style.strokeDashoffset = pathLength1 - drawLength1;
    path2.style.strokeDashoffset = pathLength2 - drawLength2;
    path3.style.strokeDashoffset = pathLength3 - drawLength3;
    
  });
  
  if (scrollPercentage >= 0.99) {
    path1.style.strokeDasharray = "none";
    path2.style.strokeDasharray = "none";
    path3.style.strokeDasharray = "none";
  } else {
    path1.style.strokeDasharray = pathLength1 + ' ' + pathLength1;
    path2.style.strokeDasharray = pathLengt2 + ' ' + pathLength2;
    path3.style.strokeDasharray = pathLength3 + ' ' + pathLength3;
  }

function sendEmail() {
    window.location = "mailto:sjb5@williams.edu";
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


