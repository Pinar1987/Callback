
function displayName(callback) {
    setTimeout(() => {
        console.log("My name is Pinar Buyukcelebi.");
        callback();
    }, 2000);
}

function displayAge(callback) {
    setTimeout(() => {
        console.log("I am 37 years old.");
        callback();
    }, 3000);
}


function displayLocation(callback) {
    setTimeout(() => {
        console.log("I am living in Helsingborg, and I am currently student.");
        callback();
    }, 4000);
}


function displayHobbies(callback) {
    setTimeout(() => {
        console.log("My hobbies include reading, traveling, and cooking.");
        callback();
    }, 5000);
}


displayName(() => {
    displayAgeAge(() => {
        displayLocation(() => {
            displayHobbies(() => {
                console.log("That's all about me! Thanks for reading.");
            });
        });
    });
});


