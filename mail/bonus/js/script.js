// Definiamo l'event
let button = document.getElementById("confirm");
button.addEventListener("click", 
    function() {
        // 1- Chiedi all'utente la sua email
        let email_user = document.getElementById("email").value;
        
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
            document.getElementById("access-granted").innerText = "Access Granted";
            document.getElementById("access-granted").classList.remove("d-none")
            document.getElementById("access-denied").classList.add("d-none");
            console.log("access granted")
        }
        else {
            document.getElementById("access-denied").innerText = "Access Denied";
            document.getElementById("access-denied").classList.remove("d-none")
            document.getElementById("access-granted").classList.add("d-none");
            console.log("access not granted")
        }
    })
