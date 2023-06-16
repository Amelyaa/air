const fs = require('fs')
const { spawnSync } = require('child_process')

function runTests() {
    const exerciseName = __filename.split('\\')[__filename.split('\\').length - 1].split('.')[0]
    const testResults = []

    /////////////////////////////
    const command = `node ${exerciseName}.js "Crevette magique dans la mer des étoiles" "la"`
    const expectedOutput = "Crevette magique dans \n mer des étoiles\n"
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
