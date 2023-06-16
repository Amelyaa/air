const fs = require('fs')

const displayError = (args) => {
    if (args.length === 0) {
        console.log("Erreur : Le programme nécessite un argument (le nom du fichier).")
        process.exit(1)
    }
}

const readFileContent = (fileName) => {
    try {
        return fs.readFileSync(fileName, 'utf-8')
    } catch (error) {
        console.log(`Erreur : Impossible de lire le fichier "${fileName}".`)
        process.exit(1)
    }
}

const args = process.argv.slice(2)

displayError(args)

const fileName = args[0]
const fileContent = readFileContent(fileName)

console.log(fileContent)
