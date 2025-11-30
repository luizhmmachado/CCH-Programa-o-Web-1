const menu = document.getElementById("menu");

let menuAberto = false;

function validarTamanhoTela() {

  const menuLateral = document.getElementById("menu-lateral");

  if (!menuLateral) {
    return;
  }

  if (window.innerWidth >= 900) {
    menuAberto = false;
    menuLateral.style.display = "flex";
    menuLateral.style.position = "static";
    return;
  }
  menuAberto = false;
  menuLateral.style.display = "none";
}


window.addEventListener("resize", validarTamanhoTela);
window.addEventListener("load", validarTamanhoTela);

menu.addEventListener("pointerdown", () => {

  const menuLateral = document.getElementById("menu-lateral");

  if (!menuLateral) {
    return;
  }

  menuAberto = !menuAberto;

  const style = menuLateral.style;

  if (menuAberto) {
    style.display = "flex";
    style.zIndex = 2;
    style.position = "absolute";
    style.height = "100%";
    return;
  }

  style.display = "none";

});


