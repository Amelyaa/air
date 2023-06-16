const fs = require('fs')
const { spawnSync } = require('child_process')

function runTests() {
    const exerciseName = 'air00'
    const testResults = []

    const command = `node ${exerciseName}.js "Bonjour les gars"`
    const result = spawnSync(command, { shell: true, encoding: 'utf-8' })

    if (fs.existsSync(`${exerciseName}.js`)) {
        testResults.push({ test: 'File exists', success: true })
    } else {
        testResults.push({ test: 'File exists', success: false })
    }

    if (result.status === 0 && result.stdout === "Bonjour\nles\ngars\n") {
        testResults.push({ test: 'Command execution', success: true })
    } else {
        testResults.push({ test: 'Command execution', success: false })
    }

    return testResults
}

module.exports = runTests
