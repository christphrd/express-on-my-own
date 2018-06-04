const express = require("express")

const app = express();

/*
app has useful methods like
app.get() takes two arguments url and cb func
app.post()
app.put()
app.delete()
*/

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

app.get('/api/songs/:id', (req,res) => {
  let song = songs.find(song => song.id === Number(req.params.id) )
  song ? res.send(song) : res.status(404).send("Song number not found. Try a different number");
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port} using express`))
