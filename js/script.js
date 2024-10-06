// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".bottom-header ").style.backgroundColor =
      " #222222";
    // document.querySelector(".bottom-header ").style.marginTop = "-40px";
    document.querySelector(".top-container ").style.display = "none";
  } else {
    document.querySelector(".bottom-header ").style.backgroundColor =
      "transparent";
    document.querySelector(".top-container ").style.display = "flex";
  }
}

// countdown script
let countdownDate = new Date("Dec 30 , 2024 00:00:00").getTime();
let x = setInterval(function () {
  let current = new Date().getTime();
  let distance = countdownDate - current;
  // hour

  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  let second = Math.floor((distance % (1000 * 60)) / 1000);
  let year = new Date(countdownDate).getFullYear();

  document.getElementById("count-down").innerHTML = `
      <div><strong id="year">${year}<br><span class="txt">Years</span></strong></div>
                               
                               <div><strong id="hour">${hour}<br><span class="txt">Hours</span></strong></div>

                               <div><strong id="minute">${minute}<br><span class="txt">Minutes</span></strong></div>
                               
                               <div class="second"><strong id="second">${second}<br><span class="txt">Seconds</span></strong></div>
    `;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Countdown is over!";
  }
}, 1000);
