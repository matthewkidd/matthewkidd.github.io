//	base.js :: framework5 :: 11/01/2024

// DARK MODE DETECTION_
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('theme', '1');
}



// CSS OVERLAY GRID_
var drawLines = function(event) {
    var y = event.pageY;
    var hrLine = document.querySelector('.grid-rule');
    var hrTrans = 'translate(0px, ' + y + 'px)';
    hrLine.style.transform = hrTrans;
  }
  
  document.body.addEventListener('mousemove', function(event) {
     drawLines(event);
  });
  
  document.body.addEventListener('mousedown', function(event) {
     drawLines(event);   
  });
  
  document.body.addEventListener('mouseup', function(event) {
     drawLines(event);
  });
  
  document.body.addEventListener('mouseout', function(event) {
     drawLines(event);
  });
  
  document.onkeydown = keydown;
  function keydown(evt){
  if (!evt) evt = event;
      if (evt.ctrlKey && evt.altKey && evt.shiftKey && evt.keyCode==71){ //CTRL+ALT+SHIFT+G
      var element = document.getElementById("grid-overlay");
      if (element.classList.contains("hide")) {
          element.classList.remove("hide");
      } else {
          element.classList.add("hide");
      }
      } else if (evt.ctrlKey && evt.altKey && evt.shiftKey && evt.keyCode==84) {
          var theme = document.documentElement.getAttribute('theme');
          var themes = 1;
          if (theme) {
              if (parseInt(theme) < themes) {
                  document.documentElement.setAttribute('theme', (parseInt(theme) + 1));
              } else {
                  document.documentElement.setAttribute('theme', '0');
              }
          } else {
              document.documentElement.setAttribute('theme', '1');
          };
      }
  }

/* Usage
--------

<div id="grid-overlay" class="hide">
    <div class="grid-rule"></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>

*/ 



// DISPLAY THE WINDOW SIZE_
 (function() {
    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;
  
    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        // your size calculation code here
        document.getElementById("screen-size").innerHTML = myWidth + "x" + myHeight;
    };
})();

/* Usage
--------

<div id="screen-size" class="smaller text-offset"></div>

*/ 



// DISPLAY CURRENT YEAR_
(function() {
    window.onload = displayFullYear;

    function displayFullYear() {
        const date = new Date();
        let year = date.getFullYear();
        // your size calculation code here
        document.getElementById("current-year").innerHTML = year;
    };
})();

/* Usage
--------

<p class="small">©2013–<span id="current-year"></span></p>

*/ 
//	showhide.js :: framework5 :: 11/01/2024

function showHide(elementToHide, displayParam = "flex") {
    var element = document.getElementById(elementToHide);
    if (element.classList.contains("hide")) {
        element.classList.remove("hide");
        element.classList.add(displayParam);
    } else {
        element.classList.remove(displayParam);
        element.classList.add("hide");
    }

}

/* Usage
--------

<a href="#" onclick="menu('menu')">Menu</a>
<nav>
    <ul id="menu" class="menu hide">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</nav> 

*/

//	textreplace.js :: framework5 :: 11/01/2024

function textReplace(elementID, currentTxt, newTxt) {
    var element = document.getElementById(elementID);
    if (element.innerText == currentTxt) {
        element.innerText = newTxt;
    } else if (element.innerText == newTxt) {
        element.innerText = currentTxt;
    }
}

/* Usage
--------

CONFIRM USAGE

*/
