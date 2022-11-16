// **********************************************
//admin
// **********************************************


// Base de données
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

// Show users
const tableUsers = document.querySelector("tbody");
const tableRow = document.createElement("tr");
for (let user of users) {
    addRow(user)
}

// Delete users
const deleteBtns = document.querySelectorAll(".delete");
const tableRows = document.querySelectorAll("tr");
for (let rowID = 0; rowID < deleteBtns.length; rowID++) {
    deleteBtns[rowID].addEventListener("click", () => {
        tableRows[rowID + 1].remove();
    })
}

// Add users
const addBtn = document.querySelector('.add-btn');
const addUser = document.querySelector('.add-user');
const addForm = document.querySelector('form');
const formInputs = document.querySelectorAll('input');
addUser.addEventListener('click', () => {
    addForm.classList.toggle('display-none')
})
addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    newUser = {
        lastname: formInputs[0].value,
        firstname: formInputs[1].value,
        username: formInputs[2].value,
        password: formInputs[3].value
    }
    addRow(newUser)
    const deleteBtns = document.querySelectorAll(".delete");
    const tableRows = document.querySelectorAll("tr");
    deleteBtns[deleteBtns.length - 1].addEventListener("click", () => {
        tableRows[deleteBtns.length].remove();
    })
})



// Adding a row with all properties of a user
function addRow(user) {
    const tableRow = document.createElement("tr");
    tableUsers.append(tableRow)
    for (let caracteristic of Object.values(user)) {
        const tableCell = document.createElement("td");
        tableCell.innerText = caracteristic;
        tableRow.append(tableCell)
    }
    const tableCell = document.createElement("td");
    tableCell.innerHTML = "<button class='delete'>Delete</button>";
    tableRow.append(tableCell);
}
