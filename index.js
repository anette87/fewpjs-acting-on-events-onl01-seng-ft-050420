let dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    console.log(leftNumbers)
    let left = parseInt(leftNumbers, 10);
    console.log(left)
   
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    let rightNumbers = dodger.style.left.replace("px", "");
    console.log(rightNumbers);
    let right = parseInt(rightNumbers, 10);
    console.log(right)
   
    if (right > 0) {
      dodger.style.left = `${right + 1}px`;
      
    }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });