const fs = require('fs')
const { spawnSync } = require('child_process')

function runTests() {
    const exerciseName = __filename.split('\\')[__filename.split('\\').length - 1].split('.')[0]
    const testResults = []

    const tests = [
        {
            command: `node ${exerciseName}.js 1 3 4 2`,
            expectedOutput: "1 2 3 4\n"
        },
        {
            command: `node ${exerciseName}.js 10 20 30 40 50 60 70 90 33`,
            expectedOutput: "10 20 30 33 40 50 60 70 90\n"
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
