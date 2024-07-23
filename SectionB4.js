function checkMeal(X, Y) {
    if (X <= 0 || Y <= 0) {
        console.log("X and Y must be positive integers.");
        return;
    }

    for (let cartons = 1; cartons <= X; cartons++) {
        for (let noodle = 1; noodle <= Y; noodle++) {
            console.log(`Cartons ${cartons} noodles ${noodle}`);
        }
    }6
}


checkMeal(3, 2);
