//- scrivo nella console i numeri multipli di 3 e multipli di 5 stampi con le parole da stampare per ognuno dei multipli

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
    console.log(i);
    } 
}

// ora creo la griglia con i numeri

const numbGrid = document.querySelector(".grid");

for (let i = 1; i < 101; i++) {
    let box; 
    if (i % 3 == 0 && i % 5 == 0) {
        box = `<div class="box red"></div>`;
    } else if (i % 3 == 0) {
        box = `<div class="box green"></div>`; 
    } else if (i % 5 == 0) {
        box = `<div class="box yellow"></div>`;
    } else { 
        box = `<div class="box blue"></div>`;
    }

}

