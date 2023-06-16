const displayError = (args) => {
    if (args.length === 0) {
        console.log("Erreur : Le programme nécessite au moins un argument (une liste de valeurs).")
        process.exit(1)
    }
}

const findUnpairedValue = (array) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : L'argument doit être une liste de valeurs.")
        process.exit(1)
    }

    const valueCounts = {}

    for (const value of array) {
        if (valueCounts[value]) {
            valueCounts[value] += 1
        } else {
            valueCounts[value] = 1
        }
    }

    for (const value in valueCounts) {
        if (valueCounts[value] % 2 !== 0) {
            return value
        }
    }

    return null
}

const args = process.argv.slice(2)

displayError(args)

const unpairedValue = findUnpairedValue(args)

if (unpairedValue === null) {
    console.log("Erreur : Aucune valeur sans paire trouvée dans la liste.")
} else {
    console.log(unpairedValue)
}
