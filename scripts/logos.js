const logos = [
  {
    path: "./assets/logos/icons8-node-js.svg",
    name: "Node.js",
  },
  {
    path: "./assets/logos/icons8-express-js.svg",
    name: "Express.js",
  },
  {
    path: "./assets/logos/icons8-mysql.svg",
    name: "MySQL",
  },
  {
    path: "./assets/logos/mongodb-svgrepo-com.svg",
    name: "MongoDB",
  },
  {
    path: "./assets/logos/icons8-material-ui.svg",
    name: "MUI",
  },
  {
    path: "./assets/logos/icons8-tailwind-css.svg",
    name: "Tailwind CSS",
  },
  {
    path: "./assets/logos/fortinet-svgrepo-com.svg",
    name: "FortiGate",
  },
  {
    path: "./assets/logos/icons8-git.svg",
    name: "Git",
  },
  {
    path: "./assets/logos/icons8-photoshop.svg",
    name: "Photoshop",
  },
  {
    path: "./assets/logos/icons8-figma.svg",
    name: "Figma",
  },
  {
    path: "./assets/logos/icons8-javascript.svg",
    name: "JavaScript",
  },
  {
    path: "./assets/logos/icons8-css.svg",
    name: "CSS",
  },
  {
    path: "./assets/logos/icons8-html.svg",
    name: "HTML",
  },
  {
    path: "./assets/logos/icons8-react-native.svg",
    name: "React",
  },
];

const logo = document.getElementById("logo");
const name = document.getElementById("name");
const totalLogos = logos.length;
let index = 0;

document.getElementById("less-than").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = totalLogos - 1;
  }
  updateCarousel();
});

document.getElementById("greater-than").addEventListener("click", () => {
  index++;
  if (index >= totalLogos) {
    index = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  logo.src = logos[index].path;
  name.innerHTML = logos[index].name;
}

setInterval(() => {
  logo.src = logos[index].path;
  name.innerHTML = logos[index].name;
  index++;
  if (index >= totalLogos) {
    index = 0;
  }
}, 1000);
