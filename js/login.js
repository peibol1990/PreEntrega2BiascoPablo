const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const video = document.getElementById("popupVideo");
let usuario = "admin",
  contraseña = "initpass";
let fun_user = "",
  fun_pass = "";

const formulario = document.querySelector("#login-form");

deshabilitar_foward();

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  fun_user = document.getElementById("user-input").value;
  fun_pass = document.getElementById("pass-input").value;

  if (validar_vacio() === true) {
    alert("El/Los campos estan vacios");
  } else {
    validar(fun_user, fun_pass);
  }

  deshabilitar_foward();
});

function limpiar_inputs() {
  document.getElementById("user-input").value = "";
  document.getElementById("pass-input").value = "";
}

function validar(user1, pass1) {
  if (user1 != usuario || pass1 != contraseña) {
    limpiar_inputs();
    const condition = false;
    if (!condition) {
      popup.style.display = "block";
      overlay.style.display = "block";

      video.muted = false;
      video.play();

      setTimeout(() => {
        popup.style.display = "none";
        overlay.style.display = "none";
        video.pause();
        video.currentTime = 0;
      }, 8000);
    } else {
      alert("La condición no se cumple.");
    }
    overlay.addEventListener('click', closePopup);
    popup.addEventListener('click', closePopup);
  } else {
    window.location.href = "pages/main_page.html";
  }
}

function validar_vacio() {
  if (fun_user == "" || fun_pass == "") {
    return true;
  } else {
    return false;
  }
}

function deshabilitar_foward() {
  history.pushState(null, null, window.location.href);
  window.addEventListener("popstate", function (event) {
    this.history.pushState(null, null, this.window.location.href);
  });
}


function closePopup() {
  popup.style.display = 'none';
  overlay.style.display = 'none';
  video.pause(); // Pausar el video
  video.currentTime = 0; // Reiniciar el video
}