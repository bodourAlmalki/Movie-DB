const express = require('express')
const app = express()


// http://localhost:3000/
app.get('/', (req, res) => res.send('OK'))

//http://localhost:3000/test
app.get('/test', (req, res) => res.json({ status: 200, message: 'OK' }))

//http://localhost:3000/test/time/

app.get('/time', (req, res) => {
  const currentTime = new Date()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()

  res.json({ status: 200, message: `${hours}:${minutes}` })
})


app.listen(3000, () => console.log('Example app listening on port 3000!')) 

