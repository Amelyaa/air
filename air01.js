const displayError = (args) => {
    if (args.length !== 2) {
        console.log("Erreur : Le programme nécessite deux arguments (une chaîne de caractères à découper et un séparateur).")
        process.exit(1)
    }
}

String.prototype.splitBySeparator = function (separator) {
    const inputString = this.toString()

    if (typeof inputString !== "string" || typeof separator !== "string") {
        console.log("Erreur : Les arguments doivent être des chaînes de caractères.")
        process.exit(1)
    }

    return inputString.split(separator)
}

const args = process.argv.slice(2)

displayError(args)

const inputString = args[0]
const separator = args[1]

const result = inputString.splitBySeparator(separator)
console.log(result.join("\n"))
