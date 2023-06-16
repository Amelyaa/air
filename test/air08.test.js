const fs = require('fs')
const { spawnSync } = require('child_process')

function runTests() {
    const exerciseName = __filename.split('\\')[__filename.split('\\').length - 1].split('.')[0]
    const testResults = []

    /////////////////////////////
    const command = `node ${exerciseName}.js 10 20 30 fusion 15 25 35`
    const expectedOutput = "10 15 20 25 30 35\n"
    /////////////////////////////

    const result = spawnSync(command, { shell: true, encoding: 'utf-8' })

    if (fs.existsSync(`${exerciseName}.js`)) {
        testResults.push({ test: 'File exists', success: true })
    } else {
        testResults.push({ test: 'File exists', success: false })
    }

    if (result.status === 0 && result.stdout === expectedOutput) {
        testResults.push({ test: 'Command execution', success: true })
    } else {
        testResults.push({ test: 'Command execution', success: false })
    }

    return testResults
}

module.exports = runTests
