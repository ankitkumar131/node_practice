const EventEmitter = require('events');

const celab = new EventEmitter(); // <-- ✅ Use 'new'

// celab.on("win", () => {
//     console.log("You win");
// });

// celab.on("lose", () => {
//     console.log("You lose");
// });

// celab.emit("win"); // <-- ✅ Emit the event
// celab.emit("lose"); // <-- ✅ Emit the event

celab.on('race', (result) => {
    if (result === 'win') {
        console.log("You win");
    } 
});

celab.on('race win', (result) => {
    if(result ==='win'){

        console.log("You win1"); 
    }
}); 

celab.emit('race','win'); // <-- ✅ Emit the event