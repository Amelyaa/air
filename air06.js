const displayError = (args) => {
    if (args.length < 2) {
        console.log("Erreur : Le programme nécessite au moins deux arguments (un tableau de chaînes de caractères et une autre chaîne de caractères).");
        process.exit(1);
    }
}

//On cherche toutes les lettres de chaque mot et on forme un tableau si la lettre est présente
const filterStrings = (array, searchString) => {
    if (!Array.isArray(array)) {
        console.log("Erreur : Le premier argument doit être un tableau de chaînes de caractères.")
        process.exit(1)
    }

    if (typeof searchString !== "string") {
        console.log("Erreur : Le deuxième argument doit être une chaîne de caractères.")
        process.exit(1)
    }

    return array.filter((item) => {
        for (let i = 0; i < item.length; i++) {
            if (item[i].toLowerCase() === searchString.toLowerCase()) {
                return true
            }
        }
        return false
    })
}

const args = process.argv.slice(2)

displayError(args)

const array = args.slice(0, -1)
const searchString = args[args.length - 1]

//on retourne le reste du tableau en excluant les mots qui contiennent la lettre recherchée
const filteredArray = filterStrings(array, searchString)
const remainingArray = array.filter((item) => !filteredArray.includes(item))

if (remainingArray.length === 0) {
    console.log("Erreur : Aucun élément ne contient la chaîne de caractères recherchée.")
} else {
    console.log(remainingArray.join(", "))
}
