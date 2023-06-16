const displayError = (args) => {
    if (args.length < 2) {
        console.log("Erreur : Le programme nécessite au moins deux arguments (une liste de nombres et une opération).")
        process.exit(1)
    }
}

function performOperation(numbers, operation) {
    const lastElement = operation.slice(1)
    const operator = operation.charAt(0)
    const result = []

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        let newNumber

        if (operator === '+') {
            newNumber = number + parseInt(lastElement)
        } else if (operator === '-') {
            newNumber = number - parseInt(lastElement)
        } else {
            console.log("Erreur : Opération non valide.")
            process.exit(1)
        }

        result.push(newNumber)
    }

    return result;
}

const args = process.argv.slice(2)

displayError(args)

const numbers = args.slice(0, args.length - 1).map((arg) => parseInt(arg))
const operation = args[args.length - 1]

const result = performOperation(numbers, operation)
console.log(result.join(' '))
