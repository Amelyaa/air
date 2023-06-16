const fs = require('fs')
const { spawnSync } = require('child_process')

function runTests() {
    const exerciseName = __filename.split('\\')[__filename.split('\\').length - 1].split('.')[0]
    const testResults = []

    const tests = [
        {
            command: `node ${exerciseName}.js "Michel" "Albert" "Thérèse" "Benoit" "t"`,
            expectedOutput: "Michel\n"
        },
        {
            command: `node ${exerciseName}.js "Michel" "Albert" "Thérèse" "Benoit" "a"`,
            expectedOutput: "Michel, Thérèse, Benoit\n"
        },
    ]

    if (fs.existsSync(`${exerciseName}.js`)) {
        testResults.push({ test: 'File exists', success: true })
    } else {
        testResults.push({ test: 'File exists', success: false })
    }

    tests.forEach((test, index) => {
        const command = test.command
        const expectedOutput = test.expectedOutput
        const result = spawnSync(command, { shell: true, encoding: 'utf-8' })

        if (result.status === 0 && result.stdout === expectedOutput) {
            testResults.push({ test: `Command execution, ex: ${index + 1}`, success: true })
        } else {
            testResults.push({ test: `Command execution, ex: ${index + 1}`, success: false })
        }
    })

    return testResults
}

module.exports = runTests
