// untuk memindahkan active navbar

const navbar = document.querySelectorAll('.nav-link');
// console.log(navbarActive);
navbar.forEach(element => {
    element.addEventListener('click', function () {
        const navbarActive = document.querySelector('.nav-link.active');
        navbarActive.classList.remove('active');
        element.classList.add('active');
    });
});


// submit ke Google Form
const scriptURL =
    'https://script.google.com/macros/s/AKfycby7kgRu_1X6dA3EanEASl9SeMowOq4vWBuAqJnDmDqb_MRBEh4_-AojWe3xfu9IVCAUTw/exec';
const form = document.forms['myPortofolioContactForm'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const alertSuccess = `<div class="alert alert-success alert-dismissible fade show"
                        role="alert">
                        Terimakasih, pesan anda berhasil dikirim
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`;
const tempatAlert = document.querySelector('.tempat-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnKirim.classList.toggle('d-none');
    btnLoading.classList.toggle('d-none');
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            tempatAlert.innerHTML = alertSuccess;
            form.reset();
            console.log('Success!', response);
        }).catch(error => {
            btnKirim.classList.toggle('d-none');
            btnLoading.classList.toggle('d-none');
            alertPesanGagalDikirim.classList.remove('d-none');
            console.error('Error!', error.message);
        })
});