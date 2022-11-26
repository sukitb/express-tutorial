const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const artistData = [
    {
        image_url: 'https://s359.kapook.com/pagebuilder/a3062a7a-53c0-44d2-8e26-f2f37643d832.jpg',
        name: 'Black Pink'
    },
    {
        image_url: 'https://storage-wp.thaipost.net/2022/02/EP_1-LOSO-DAY.jpg',
        name: 'LOSO'
    },
    {
        image_url: 'https://music.mthai.com/app/uploads/2016/07/ebisu-muscats.jpg',
        name: 'ebisu muscat'
    },
]

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artist', (req, res) => {
    res.send(artistData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})