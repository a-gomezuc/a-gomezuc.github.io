var en_US = {
  welcome: "Welcome!",
  name: "My name is Alex Gómez Uceda",
  portfolio: "This is my portfolio.",
  know: "If you want to know more about me, keep scrolling down.",
  about: "About me",
  par1:
    "My name is Alex Gómez Uceda. I live in a town in Toledo (Spain) and I am Software Engineering from Rey Juan Carlos University since 2018.",
  par2:
    "I consider myself a hard-working, quiet and a very curious person. Technology and sports are my two main passions. I think that life is a continuous learning and we should never stop learning.",
  par3:
    "If you still want to know more about me, you can do it in the last section.",
  contact: "Contact",
  cv: "Click on the image to download my resume.",
  email: "Click on the image to send me an email.",
  github: "Click on the image to see my projects.",
};

var es_ES = {
    welcome: "¡Bienvenido!",
    name: "Mi nombre es Alex Gómez Uceda",
    portfolio: "Este es mi portfolio.",
    know: "Si quieres conocer más sobre mí, sigue bajando.",
    about: "Sobre mí",
    par1:
      "Mi nombre es Alex Gómez Uceda. Vivo en un pueblo de Toledo (España) y soy graduado en Ingeniería del Software por la Universidad Rey Juan Carlos desde el año 2018.",
    par2:
      "Me considero una persona trabajadora, tranquila y muy curiosa. La tecnología y el deporte son mis dos grandes pasiones. Pienso que la vida es un continuo aprendizaje y nunca hay que dejar de aprender.",
    par3:
      "Si aún deseas saber más sobre mí, puedes hacerlo en el último apartado.",
    contact: "Contacto",
    cv: "Pulsa en la imagen para descargar mi currículum.",
    email: "Pulsa en la imagen para enviarme un correo electrónico.",
    github: "Pulsa en la imagen para ver mis proyectos.",};

var lang=es_ES
// set all the text
function changeLanguage(variable) {
    if (variable =="English"){
        lang = en_US
        document.getElementById('englishButton').style.display = "none";
        document.getElementById('spanishButton').style.display = "inline-block";
    }
    else{
        lang = es_ES
        document.getElementById('spanishButton').style.display = "none";
        document.getElementById('englishButton').style.display = "inline-block";

    }
  for (value in lang) {
    document.getElementById(value).innerHTML = lang[value];
  }
}
