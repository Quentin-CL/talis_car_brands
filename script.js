const btnArticles = document.querySelectorAll('.btn-article')
const modals = document.querySelectorAll('.modal')
const btnCloses = document.querySelectorAll('.btn-close')
const welcomeMessage = document.querySelector('.welcome-message')
let numToggledModal = 0;

for (let i = 0; i < btnArticles.length; i++) {
    btnArticles[i].addEventListener('click', () => {
        closeToggledModal()
        modals[i].classList.remove('display-none');
        numToggledModal = i;
    });
    btnCloses[i].addEventListener('click', closeToggledModal);
}

function closeToggledModal() {
    modals[numToggledModal].classList.add('display-none');
}
if (location.search) {
    const querySplitted = location.search.split(/([=&])+/);
    const firstname = querySplitted[2];
    const lastname = querySplitted[6];
    welcomeMessage.innerHTML = "Bienvenue <strong>" + firstname + ' ' + lastname + "</strong> !";
}