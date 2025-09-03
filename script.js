// Cambia aleatoriamente el color de fondo cada 5 segundos
const colores = ["#ffe4e1", "#e6f7ff", "#f0fff0", "#fffacd", "#f5f5f5", "#e0ffff"];
setInterval(() => {
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}, 5000);

// Muestra la fecha actual
window.onload = function () {
  const fecha = new Date();
  const fechaFormateada = fecha.toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("fecha").textContent = "Hoy es " + fechaFormateada;
};
📌 ¿Se actualiza automáticamente en GitHub Pages?
❌ No. Los cambios no se suben solos.
✅ Para actualizarlos en línea, haz esto desde Visual Studio Code:

bash
Copiar código
git add .
git commit -m "Agrego estilos, colores aleatorios y fecha"
git push
