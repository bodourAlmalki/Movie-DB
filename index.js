const express = require('express')
const app = express()


// http://localhost:3000/
app.get('/', (req, res) => res.send('OK'))

//http://localhost:3000/test
app.get('/test', (req, res) => res.json({ status: 200, message: 'OK' }))

//http://localhost:3000/time/

app.get('/time', (req, res) => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  res.json({ status: 200, message: `${hours}:${minutes}` })
})
//http://localhost:3000/hello/:id(anything)/
app.get('/hello/:id', (req, res) => {
  const { id } = req.params
  res.json({ status: 200, message: `Hello, ${id || 'world'}` })
})

//http://localhost:3000/search/
app.get('/search', (req, res) => {
    const { s } = req.query
    if (s) {
      res.json({ status: 200, message: 'OK', data: s })
    } else {
      res.status(500).json({ error: true, message: 'You have to provide a search' })
    }
  })

app.listen(3000, () => console.log('Example app listening on port 3000!')) 

