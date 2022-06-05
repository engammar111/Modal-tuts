const modal = document.querySelector("#modal");
const openModal = document.querySelector("#open-modal-btn");
const closeModal = document.querySelector("#close-modal-btn");
const modalOverlay = document.querySelector("#overlay");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
  modalOverlay.classList.add("open");
});

closeModal.addEventListener("click", closeModalFunc);

function closeModalFunc() {
  modal.classList.remove("open");
  modalOverlay.classList.remove("open");
}
