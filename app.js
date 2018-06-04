const express = require("express")

const app = express();

app.use(express.json()); //middleware used to turn frontend post to json

/*
app has useful methods like
app.get() takes two arguments url and cb func
app.post()
app.put()
app.delete()
*/

//simple db
const songs = [
  {id: 1, name: "Whatever It Takes"},
  {id: 2, name: "It's Time"},
  {id: 3, name: "Radioactive"},
  {id: 4, name: "Walking the Wire"}
]
// no if else block. we can move things to a separate file
app.get( '/', (req, res) => {
  res.send('Hello World, user!');
})

app.get('/api/songs', (req, res) => {
  res.send(songs);
})

app.post('/api/songs', (req, res) => {
  //Joi is a class. package that can validate
  if (!req.body.name) {
    res.status(400).send('Bad Request: Name is required.')
    return
  }
  let song = {
    id: songs.length + 1,
    name: req.body.name
  }
  songs.push(song)
  res.send(song)
})

app.get('/api/songs/:id', (req,res) => {
  let song = songs.find(song => song.id === Number(req.params.id) )
  song ? res.send(song) : res.status(404).send("Song number not found. Try again");
})

app.put('/api/songs/:id', (req, res) => {
  //look up song
  //404 if not found
  //Logic from get
  let song = songs.find(song => song.id === Number(req.params.id) )
  if (!song) {
    res.status(404).send("Song number not found. Try again")
  }
  //validate request
  //if invalid 400 bad request
  //logic from post
  if (!req.body.name) {
    res.status(400).send('Bad Request: Name is required.')
    return
  }

  //update song
  //return updated
  song.name = req.body.name;
  res.send(song)
})

// app.delete('/api/songs/:id', (req, res) => {
//   let song = songs.find(song => song.id === Number(req.params.id))
//   if (!song) {
//     res.status(404).send("Song number not found. Try a different number")
//   } else {
//     let song = {
//       ...song,
//       name: req.body.name
//     }
//   }
// })

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port} using express`))
