// **********************************************
//login
// **********************************************

const users = [
    {
        lastname: "Flocas",
        firstname: "Jean-michel",
        username: "jean-mich",
        password: "12345"
    },
    {
        lastname: "Demaison",
        firstname: "Romain",
        username: "romain",
        password: "azerty"
    },
    {
        lastname: "Carriere",
        firstname: "Robert",
        username: "robert",
        password: "2022"
    },
    {
        lastname: "Lancelote",
        firstname: "Lancelot",
        username: "lancelot",
        password: "753159"
    }
];
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginBtn = document.querySelector('form button');
const loginError = document.querySelector('.login-error');

loginError.style.color = 'red'

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    for (const user of users) {
        if (user.username === usernameInput.value && user.password === passwordInput.value) {
            location.assign(`index.html?firstname=${user.firstname}&lastname=${user.lastname}`);
            return
        }
    }
    loginError.innerText = "L'indentifiant ou le mot de passe sont erronés. Veuillez réessayer.";
})