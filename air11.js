const displayError = (args) => {
    if (args.length !== 2) {
        console.log("Erreur : Le programme nécessite deux arguments (un caractère et un nombre d'étages).")
        process.exit(1)
    }
}

const buildPyramid = (character, numFloors) => {
    if (typeof character !== 'string' || character.length !== 1) {
        console.log("Erreur : Le premier argument doit être un caractère.")
        process.exit(1)
    }

    if (typeof numFloors !== 'number' || !Number.isInteger(numFloors) || numFloors < 1) {
        console.log("Erreur : Le deuxième argument doit être un nombre entier positif.")
        process.exit(1)
    }

    for (let i = 1; i <= numFloors; i++) {
        const spaces = ' '.repeat(numFloors - i)
        const stairs = character.repeat(2 * i - 1)
        console.log(spaces + stairs)
    }
}

const args = process.argv.slice(2)

displayError(args)

const character = args[0]
const numFloors = parseInt(args[1])

buildPyramid(character, numFloors)
