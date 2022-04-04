history.scrollRestoration = "manual";

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// Preloader Start
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloaderClose');
        const bodyScroll = document.querySelector('body');
        bodyScroll.classList.remove('loading');
    }, 2000);
});
// Preloader End

// Cursor Start
const moveCursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    moveCursor.style.top = y + "px";
    moveCursor.style.left = x + "px";
    moveCursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped() {
        moveCursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 10000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    moveCursor.style.display = "none";
});

$(document).ready(function() {

    $('.hero').hover(
        function() { $('#body').addClass('circleHide') },
        function() { $('#body').removeClass('circleHide') }
    )
    $('.activeLink').hover(function() {
        $('#body').toggleClass('defaultCursor activeLink');
    });
    $('.projectBox').hover(function() {
        $('#body').toggleClass('defaultCursor caseStudy');
    });
    $('.carousel-control-prev').hover(function() {
        $('#body').toggleClass('defaultCursor controlPrev');
    });
    $('.carousel-control-next').hover(function() {
        $('#body').toggleClass('defaultCursor controlNext');
    });
});

// Cursor End

//vLetter Start

// Get a reference to the <path>
var path = document.querySelector('#star-path');

// Get length of path... ~577px in this demo
var pathLength = path.getTotalLength();
// console.log(pathLength)
path.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;
window.addEventListener("scroll", function(e) {

    // What % down is it? 
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log(scrollPercentage)
    // Length to offset the dashes
    var drawLength = pathLength * scrollPercentage;

    // Draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength;

});

// vletter movement



var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 20;


$(window).on('mousemove', function(e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    // console.log(lMouseX, lMouseY)
    lFollowX = (60 * lMouseX) / 100;
    lFollowY = (40 * lMouseY) / 100;
    // console.log(lFollowX, lFollowY)
});

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    // console.log(x, y)
    translate = 'translate(' + x + 'px, ' + y + 'px)';
    // console.log(translate)
    $('.bg').css({
        '-webit-transform': translate,
        '-moz-transform': translate,
        'transform': translate
    });
    window.requestAnimationFrame(moveBackground);
}

moveBackground();
//vLetter End

// Scroll Start
window.addEventListener('scroll', function(e) {
    const target = document.querySelectorAll('.scroll');

    var id = $('#hero').offset().top;
    var idX = (id - window.pageYOffset) * .5;
    target[0].style.transform = 'translate3d(' + idX + 'px, 0px, 0px)';
    target[1].style.transform = 'translate3d(' + -idX + 'px, 0px, 0px)';
    target[0].style.opacity = 1 - (idX * -2) / 480;
    target[1].style.opacity = 1 - (idX * -2) / 480;
});



// jQuery(function($) {
//     var $win = $(window);
//     var winH = $win.height(); // Get the window height.
//     $win.on("scroll", function() {
//         if ($(this).scrollTop() > winH) {
//             $('#scrollDown').html('Scroll top');
//         } else {
//             $('#scrollDown').html('Scroll down');
//         }
//     }).on("resize", function() { // If the user resizes the window
//         winH = $(this).height(); // you'll need the new height value
//     });
// });

// var path = document.querySelector('.squiggle-container path');
// console.log(path.getTotalLength());


const text = document.querySelector('.text p');
const circle = document.querySelector('.circle');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 19}deg)">${char}</span>`
).join('');

document.addEventListener("mousemove", function(e) {
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
});

const scrollingTxt = document.querySelector('.scrollingTxt .skills');
scrollingTxt.innerHTML = scrollingTxt.innerText.split('#').map(
    (char, i) =>
    `<span class="outlineTxt">#${char}</span>`
).join('');
console.log(scrollingTxt.innerHTML)