const backdrop = document.querySelector(".backdrop");
const maodalBtnOpen = document.querySelector(".modal-btn-open");
const maodalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => backdrop.classList.toggle("is-hidden");

maodalBtnClose.addEventListener("click", toggleModal);
maodalBtnOpen.addEventListener("click", toggleModal);
