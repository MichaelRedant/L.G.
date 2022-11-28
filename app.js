function rotateMeR() {
  var element = document.getElementById('img');
  element.classList.add("rotateMeR");
}

function rotateMeV() {
  var element = document.getElementById('img');
  element.classList.add("rotateMeV");
}

function rotateMeF() {
  var element = document.getElementById('img');
  element.classList.add("rotateMeF");
}

function rotateMeK() {
  var element = document.getElementById('img');
  element.classList.add("rotateMeK");
}

function rotateMeO() {
  var element = document.getElementById('img');
  element.classList.add("rotateMeO");
}

function toggleTextR() {
  var text = document.getElementById("R");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  rotateMeR();
}
function toggleTextV() {
  var text = document.getElementById("V");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  rotateMeV();
}
function toggleTextF() {
  var text = document.getElementById("F");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  rotateMeF();
}
function toggleTextK() {
  var text = document.getElementById("K");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  rotateMeK();
}
function toggleTextO() {
  var text = document.getElementById("O");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  rotateMeO();
}