const fs = require('fs')

// Tableau pour stocker les résultats de chaque exercice
const exerciseResults = []

// Fonction pour imprimer les résultats des tests avec les couleurs
function printColoredStatus(status) {
    if (status === 'success') {
        return '\x1b[32m' + status + '\x1b[0m' // Vert pour succès
    } else {
        return '\x1b[31m' + status + '\x1b[0m' // Rouge pour échec
    }
}


// Boucle pour exécuter les tests pour les exercices de air00 à air10
for (let i = 0; i <= 10; i++) {
    const exerciseName = `air${i.toString().padStart(2, '0')}`
    const testFilePath = `./test/${exerciseName}.test.js`

    if (fs.existsSync(testFilePath)) {
        const runTests = require(testFilePath)
        const results = runTests()

        const totalTests = results.length
        let totalSuccess = 0

        results.forEach((testResult, index) => {
            const testIndex = index + 1;
            const status = testResult.success ? 'success' : 'failure'
            const coloredStatus = printColoredStatus(status)
            console.log(`${exerciseName} (${testIndex}/${totalTests}) [${testResult.test}] : ${coloredStatus}`)

            if (testResult.success) {
                totalSuccess++;
            }
        })

        exerciseResults.push({
            exercise: exerciseName,
            totalTests,
            totalSuccess
        })

        // console.log(`\nTests completed for ${exerciseName}\n`);
    } else {
        console.log(`Tests not found for ${exerciseName}\n`)
    }
}

// Calcul du total global des succès
let globalTotalTests = 0
let globalTotalSuccess = 0

exerciseResults.forEach((result) => {
    globalTotalTests += result.totalTests
    globalTotalSuccess += result.totalSuccess
})

console.log(`Total success: (${globalTotalSuccess}/${globalTotalTests})`)
