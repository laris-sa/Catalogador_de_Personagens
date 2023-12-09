//Comentarios
document.addEventListener("DOMContentLoaded", function() {
  const forms = document.querySelectorAll(".post form");

  function getSavedComments(postId) {
    const savedComments = localStorage.getItem(`comments-${postId}`);
    return savedComments ? JSON.parse(savedComments) : [];
  }

  function displaySavedComments(postId) {
    const savedComments = getSavedComments(postId);
    const listaComentarios = document.querySelector(`.post[data-post-id="${postId}"] .lista-comentarios`);

    savedComments.forEach(function(comment) {
      const novoComentario = document.createElement("div");
      novoComentario.classList.add("comentario");
      novoComentario.innerHTML = `
                <strong>${comment.nome}</strong> em ${comment.data}<br>
                ${comment.comentario}
            `;
      listaComentarios.appendChild(novoComentario);
    });
  }

  forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const postId = this.closest(".post").getAttribute("data-post-id");
      const nome = this.querySelector(".nome").value;
      const comentario = this.querySelector(".comentario").value;
      const data = new Date().toLocaleString();
      const listaComentarios = this.closest(".post").querySelector(".lista-comentarios");

      const novoComentario = document.createElement("div");
      novoComentario.classList.add("comentario");
      novoComentario.innerHTML = `
                <strong>${nome}</strong> em ${data}<br>
                ${comentario}
            `;

      listaComentarios.insertBefore(novoComentario, listaComentarios.firstChild);

      this.querySelector(".nome").value = "";
      this.querySelector(".comentario").value = "";

      const savedComments = getSavedComments(postId);
      savedComments.unshift({ nome, comentario, data });
      localStorage.setItem(`comments-${postId}`, JSON.stringify(savedComments));
    });

    const postId = form.closest(".post").getAttribute("data-post-id");
    displaySavedComments(postId);
  });
});

//--------------------------------------------------------------------------

const stars = document.querySelectorAll('.star');
const submitButton = document.getElementById('submit-rating');

let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener('click', (e) => {
    const rating = e.target.getAttribute('data-rating');
    selectedRating = rating;
    updateStarColors(rating);
  });

  star.addEventListener('mouseover', (e) => {
    const rating = e.target.getAttribute('data-rating');
    updateStarColors(rating);
  });

  star.addEventListener('mouseout', () => {
    updateStarColors(selectedRating);
  });
});

submitButton.addEventListener('click', () => {
  // Aqui você pode enviar a avaliação (selectedRating) para o servidor ou realizar outra ação com ela
  alert(`Avaliação: ${selectedRating}`);
});

function updateStarColors(rating) {
  stars.forEach((star) => {
    const starRating = star.getAttribute('data-rating');
    if (starRating <= rating) {
      star.style.color = '#ffb800';
    } else {
      star.style.color = '#000000';
    }
  });
}