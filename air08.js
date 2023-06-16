const displayError = (args) => {
    if (args.length === 0) {
        console.log("Erreur : Le programme nécessite au moins un argument (un tableau).")
        process.exit(1)
    }

    if (!Array.isArray(args)) {
        console.log("Erreur : L'argument doit être un tableau.")
        process.exit(1)
    }
}

const rotateLeft = (array) => {
    if (array.length < 2) {
        return array
    }

    const firstElement = array.shift()
    array.push(firstElement)

    return array
}

const args = process.argv.slice(2)

displayError(args)

const newArray = rotateLeft(args)
console.log(newArray.join(", "))
