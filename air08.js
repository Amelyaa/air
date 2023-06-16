const displayError = (args) => {
    if (args.length < 3 || !args.includes("fusion")) {
        console.log("Erreur : Le programme nécessite au moins trois arguments et doit inclure le mot clé 'fusion' pour séparer les deux listes d'entiers triées.")
        process.exit(1)
    }
}

const sortedFusion = (array1, array2) => {
    return [...array1, ...array2].sort((a, b) => a - b)
}

const args = process.argv.slice(2)

displayError(args)

const fusionIndex = args.indexOf("fusion")
const array1 = args.slice(0, fusionIndex).map(Number)
const array2 = args.slice(fusionIndex + 1).map(Number)

const newArray = sortedFusion(array1, array2)
console.log(newArray.join(" "))
