// 1- Generare due numeri random in due variabili diverse

// 1.1- una variabile per il giocatore
let computer = Math.floor((Math.random() * 6) + 1);
console.log(`computer ha estratto: ${computer}`);

// 1.2- una per il computer
let player = Math.floor((Math.random() * 6) + 1);
console.log(`player ha estratto: ${player}`);

// 2- Stampare il giocatore con il numero più alto

if (computer > player) {
    console.log("computer wins");
}
else if (computer == player) {
    console.log("draw");
}
else {
    console.log("player wins");
}