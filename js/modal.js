// Open and close modal functions

const openerList = document.querySelectorAll('.product-image');
const modal = document.querySelector('.modal-container');
const modalBtn = document.querySelector('.closeBtn')

const startModal = () => {
  modal.style.display = "flex";
}

//  Close modal by 'escape' key on keyboard
const closeModal = (e) => {
  if (e.keyCode === 27) modal.style.display = "none";
}

// close by button
openerList.forEach(openerItem => openerItem.addEventListener('click', startModal));

document.body.addEventListener('keydown', closeModal);
modalBtn.addEventListener('click', () => modal.style.display = "none");