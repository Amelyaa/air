const displayError = (args) => {
    if (args.length < 2) {
        console.log("Erreur : Le programme nécessite au moins deux arguments (un tableau de chaînes de caractères et un séparateur).")
        process.exit(1)
    }
}

const joinArrayToString = (array, separator) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : Le premier argument doit être un tableau de chaînes de caractères.")
        process.exit(1)
    }

    return array.join(separator)
}

const args = process.argv.slice(2)

displayError(args)

const array = args.slice(0, -1)
const separator = args[args.length - 1]

const result = joinArrayToString(array, separator)
console.log(result)
