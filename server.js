const express = require('express')
const cors = require('cors')
const path = require('path')
const config = require('config')

const app = express()
const PORT = config.get('port') || 5000

app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'frontend', 'dist')))

    // app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    // })
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/list', (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    res.send(['Pit', 'Tim', "Bim"]);
})

app.listen(PORT, () => {
    if (process.env.NODE_ENV === 'production') {
        console.log('PRODUCTION MODE');
    }

    console.log(`Example app listening on: http://localhost:${PORT}/`)
})