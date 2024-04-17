/*----Para cambiar tema oscuro/claro----*/

const cambio = document.querySelector(".tema-1");
const body = document.querySelector(".body");
const logo = document.querySelector(".logo");
const categoria = document.querySelector(".categorias-1");
const moonDark = document.querySelector(".luna-oscura");
const moonLigth = document.querySelector(".luna-clara");

cambio.addEventListener("click", () => {
  body.classList.toggle("body");
  logo.classList.toggle("logo");
  categoria.classList.toggle("category-1");
  cambio.classList.toggle("temas-1");
  moonDark.classList.toggle("cambio-2");
  moonLigth.classList.toggle("luna-clara");
  moonLigth.classList.toggle("cambio-2");
});

/*----Para boton hamburguesa---*/

const burguer = document.querySelector(".burguer");
const etiquetas = document.querySelector(".etiquetas");
const tema = document.querySelector(".tema-1");
const cruz = document.querySelector(".cruz");

burguer.addEventListener("click", () => {
  etiquetas.classList.toggle("etiquetasOcultar");
  cruz.classList.toggle("cruzOcultar");
  tema.classList.toggle("temaOcultar");
});

/*----Evento para cruz-----*/
cruz.addEventListener("click", () => {
  etiquetas.classList.toggle("etiquetasOcultar");
  cruz.classList.toggle("cruzOcultar");
  tema.classList.toggle("temaOcultar");
});
