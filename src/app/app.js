export const app = () => {
  const body = document.getElementById("main");
  let i = 0;
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.textAlign = "center";
  const btn = document.querySelector(".toggle");
  btn.addEventListener("click", () => {
    if (i & 1) {
      btn.textContent = "🌞";
    } else btn.textContent = "🌙";
    btn.classList.toggle("toggle-light");
    body.classList.toggle("light");
    i++;
  });
};
