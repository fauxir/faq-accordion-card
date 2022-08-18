function myMoveIn() {
    let id = null;
    const elem = document.getElementById("animation");   
    let pos = -420;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == -450) {
        clearInterval(id);
      } else {
        pos--; 
        elem.style.left = pos + "px"; 
      }
    }
  }

  function myMoveOut() {
    let id = null;
    const elem = document.getElementById("animation");   
    let pos = -450;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == -420) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.left = pos + "px"; 
      }
    }
  }