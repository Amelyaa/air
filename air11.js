const displayError = (args) => {
    if (args.length === 0) {
        console.log("Erreur : Le programme nécessite au moins un argument (une liste de nombres).");
        process.exit(1)
    }
}

const quickSort = (array) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : L'argument doit être une liste de nombres.")
        process.exit(1)
    }

    if (array.length <= 1) {
        return array
    }

    const pivot = array[array.length - 1]
    const leftArray = []
    const rightArray = []

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i])
        } else {
            rightArray.push(array[i])
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)]
}

const args = process.argv.slice(2)

displayError(args)

const numbers = args.map((arg) => parseInt(arg))
const sortedArray = quickSort(numbers)

console.log(sortedArray.join(" "))
