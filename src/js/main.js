const publicaciones = document.querySelector(".publicaciones");
const btnPublicar = document.getElementById("btnPublicar");

btnPublicar.addEventListener("click", () => {
    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const imagenInput = document.getElementById("imagen");

    if (!titulo || !descripcion || !imagenInput.files[0]) {
    alert("Por favor, completa todos los campos");
    return;
    }

    const lector = new FileReader();
    lector.readAsDataURL(imagenInput.files[0]);
    lector.onload = () => {
    // Crear la card
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    card.innerHTML = `
        <img src="${lector.result}" class="card-img-top" alt="imagen">
        <div class="card-body">
        <h4 class="card-title">${titulo}</h4>
        <p class="card-text">${descripcion}</p>
        <a href="#" class="btn btn-primary btn-like">
        <i class="bi bi-hand-thumbs-up"></i> <span class="like-count">0</span>
        </a>
        </div>
    `;

    publicaciones.prepend(card);

    // Sistema de likes
    const btnLike = card.querySelector(".btn-like");
    const likeCount = card.querySelector(".like-count");
    let contador = 0;

    btnLike.addEventListener("click", (e) => {
        e.preventDefault();
        contador++;
        likeCount.textContent = contador;
        btnLike.style.background = "red";
    });

    // Limpiar formulario
    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("imagen").value = "";
    };
});