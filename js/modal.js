const loadModal = () =>{
    const modalActive = document.querySelectorAll('.modal');
    M.Modal.init(modalActive);
}


document.addEventListener('DOMContentLoaded', () =>{
    loadModal()
})