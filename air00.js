const displayError = (args) => {
    if (args.length !== 1) {
        console.log("Erreur : Le programme nécessite un argument (une chaîne de caractères).")
        process.exit(1)
    }
}

String.prototype.splitBySeparators = function () {
    const inputString = this.toString()

    if (typeof inputString !== "string") {
        console.log("Erreur : L'argument doit être une chaîne de caractères.")
        process.exit(1)
    }

    const separators = [" ", "\t", "\n"]
    const resultArray = []
    let currentWord = ""

    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i]

        if (separators.includes(char)) {
            if (currentWord !== "") {
                resultArray.push(currentWord)
                currentWord = ""
            }
        } else {
            currentWord += char
        }
    }

    if (currentWord !== "") {
        resultArray.push(currentWord)
    }

    return resultArray
}

const args = process.argv.slice(2)

displayError(args)

const inputString = args[0]

const result = inputString.splitBySeparators()
console.log(result.join("\n"))
