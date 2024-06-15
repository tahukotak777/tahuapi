const dataRamalan = require('../resources/data_ramal.json')

const ramal = () => {
    const data = dataRamalan
    const random = Math.floor(Math.random() * 31)
    return data[random]
}

module.exports = ramal