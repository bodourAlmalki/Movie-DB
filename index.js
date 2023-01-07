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


const movies = [ 
{ id:1 ,title: 'Jaws', year: 1975, rating: 8 }, 
{ id:2 ,title: 'Avatar', year: 2009, rating: 7.8 }, 
{ id:3 ,title: 'Brazil', year: 1985, rating: 8 }, 
{ id:4 ,title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } 
]



app.get('/movies/create', (req, res) => {
    // Handle movie create
    res.send('Movie create')
  })
  
  app.get('/movies/read', (req, res) => {
    res.json({ status: 200, data: movies })
  })
  
  app.get('/movies/update', (req, res) => {
    // Handle movie update
    res.send('Movie update')
  })
  
  app.get('/movies/delete', (req, res) => {
    // Handle movie delete
    res.send('Movie delete')
  })
  
  app.get('/movies/create', (req, res) => {
    // Handle movie create
    res.send('Movie create')
  })
  //http://localhost:3000//movies/read/by-date/
  app.get('/movies/read/by-date', (req, res) => {
    // sort the movies db by  year from From oldest to newest
    const sortedMovies = movies.sort((a, b) => a.year - b.year)
    res.json({ status: 200, data: sortedMovies })
  })

   //http://localhost:3000//movies/read/by-rating/
  app.get('/movies/read/by-rating', (req, res) => {
    //sort the movies db by rating from the highest to the lowest
    const sortedMovies = movies.sort((a, b) => b.rating - a.rating)
    res.json({ status: 200, data: sortedMovies })
  })
  
    //http://localhost:3000//movies/read/by-title/
  app.get('/movies/read/by-title', (req, res) => {
    //sort the movies db by title  from A-Z

    const sortedMovies = movies.sort((a, b) => (a.title < b.title) ? -1 : 1)
    res.json({ status: 200, data: sortedMovies })
  })

  
    //http://localhost:3000//movies/read/id/
    app.get('/movies/read/id/:id', (req, res) => {

        // Find the movie with the matching id
        const movie = movies.find(movie => movie.id === parseInt(req.params.id))
        // If a movie was found, send a response with the movie data
        if (movie) {
          res.json({ status: 200, data: movie })
        // Otherwise, send a response with a 404 status code and an error message
        } else {
          res.status(404).json({ status: 404, error: true, message: `The movie ${req.params.id} does not exist` })
        }
      })
      



  
  app.listen(3000, () => console.log('Example app listening on port 3000!'))
  