function checkForName(inputText) {
    if (includesname(inputText)) {
        alert("Welcome,  O Captain!");
    }
}

function includesname(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) {
        return true;
    }
    return false;
}

export {
    checkForName,
    includesname
}