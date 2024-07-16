const text =
  "Hi, I'm Franklin Jetty Johnson, and I'm the founder of BrosCode and Infinity! I make noodles, music, and websites when I'm bored.  ";
const intro = document.getElementById("intro");
let i = 0;
let j = 0;

function autoType() {
  if (i === text.length) return;
  if (text.charAt(i) === " ") {
    intro.innerHTML += text.substring(j, i);
    j = i;
  }
  i++;

  setTimeout(autoType, 20);
}
autoType();
