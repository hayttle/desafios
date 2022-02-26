var btn = document.getElementById("playAgain");
var modal = document.getElementById("modal");
var container = document.getElementById("container");
var card16 = document.getElementById("card16");
var card17 = document.getElementById("card17");

btn.addEventListener("click", function () {
  modal.style.display = "none";
  container.style.opacity = "1";
});

card16.addEventListener("click", function () {
  card16.style.backgroundColor = "var(--dark)";
  card16.style.border = "0";
  card16.style.boxShadow = "none";
  card16.innerHTML =
  '<img src="./assets/images/boneco.svg" alt="" class="img16">';
});

card17.addEventListener("click", function () {
  card17.style.backgroundColor = "var(--dark)";
  card17.style.border = "0";
  card17.style.boxShadow = "none";
  card17.innerHTML =
  '<img src="./assets/images/boneco.svg" alt="" class="img17">';
});

// modal.style.display = "flex";
// container.style.opacity = "0.25";