const displayError = (args) => {
    if (args.length < 2) {
        console.log("Erreur : Le programme nécessite au moins deux arguments (une liste d'entiers triée et un nouvel entier à ajouter).")
        process.exit(1)
    }
}

const sortedInsert = (array, newElement) => {
    if (!Array.isArray(array) || !array.every(Number.isInteger)) {
        console.log("Erreur : Le premier argument doit être une liste d'entiers triée.")
        process.exit(1)
    }

    if (!Number.isInteger(newElement)) {
        console.log("Erreur : Le deuxième argument doit être un entier.")
        process.exit(1)
    }

    let i = 0

    while (i < array.length && newElement > array[i]) {
        i++;
    }

    array.splice(i, 0, newElement)

    return array
}

const args = process.argv.slice(2)

displayError(args)

const array = args.slice(0, -1).map(Number)
const newElement = Number(args[args.length - 1])

const newArray = sortedInsert(array, newElement)
console.log(newArray.join(" "))
