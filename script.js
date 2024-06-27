function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Mayk Britto no área usando óculos de sol e não de grau, cai de boca no pau"
    );
  } else {
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito na área sorrindo, usando óculos de grau igual gente normal, cai de boca no pau"
    );
  }
}
