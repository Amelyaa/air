const displayError = (args) => {
    if (args.length !== 1) {
       console.log("Erreur : Le programme nécessite un seul argument (une chaîne de caractères).")
       process.exit(1)
    }
}

const removeAdjacentDuplicates = (inputString) => {
    if (typeof inputString !== "string") {
        console.log("Erreur : L'argument doit être une chaîne de caractères.")
        process.exit(1)
    }

    let result = ""
    let prevChar = ""

    for (let i = 0; i < inputString.length; i++) {
        const currentChar = inputString[i]

        if (currentChar !== prevChar) {
            result += currentChar
            prevChar = currentChar
        }
    }

    return result
}

const args = process.argv.slice(2)

displayError(args)

const inputString = args[0]
const result = removeAdjacentDuplicates(inputString)

console.log(result)
