const text = document.getElementById("text");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");
const leaf = document.getElementById("leaf");
const tree = document.getElementById("tree");
const link = document.getElementById("link")

window.addEventListener("scroll", () => {
  const value = window.scrollY;

  text.style.marginTop = value * 2 + 'px';
  leaf.style.top = value * -2 + 'px';
  leaf.style.left = value * 2 + 'px';
  hill1.style.top = value * 1 + 'px';
  hill4.style.left = value * -2 + 'px';
  hill5.style.left = value * 2 + 'px';
});
