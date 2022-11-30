// 1- Chiedi all'utente la sua email
let email_user = prompt("inserisci la tua mail di accesso");

// 2- Fai una lista di email con l'arrey
const users = ['ciao_worldpeace@gmail.com', 'uffa_nonhoidee@gmail.com', 'sostanco_destamale@hotmail.com', 'basta_mail@live.com'];

// 3- Verifica che l'email inserita sia presente nell'arrey
let access = false;

for (let i = 0; i < users.length; i++) {
    if (users[i] == email_user) {
        access = true;
    }
}

if (access) {
    console.log("access granted")
}
else {
    console.log("access not granted")
}