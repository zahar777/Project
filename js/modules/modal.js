function modal(){

     //Modal
    // что б не было скрола
    //  открыв мод окно 
    //   закрыв по эск

    const modal = document.querySelector('.modal'),
        modalTrigger = document.querySelectorAll('[data-modal]');


    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });




    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = "";
    }



    document.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });
    document.addEventListener('keydown', (e) => {

        if (e.code == "Escape") {
            closeModal();

        }


    });

    const modalTimerId = setTimeout(openModal, 50000);


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


}

module.exports = modal;  