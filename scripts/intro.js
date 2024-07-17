const text =
  "Hi, I'm Franklin Jetty Johnson, and I'm the founder of BrosCode! I make noodles, music, and websites when I'm bored. My coding journey began in 8th grade with Java, but JavaScript recently became my go-to language. Beyond coding, I make music covers and post them on social media. I'm also the proud founder of a multi-genre music band named Infinity. My journey in tech and music is driven by creativity and innovation, aiming to deliver excellence in both fields. ";
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
//  I excel in crafting intuitive designs for websites and apps, aiding businesses in enhancing user experience, improving key metrics, and achieving digital leadership.
