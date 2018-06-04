const express = require("express")

const app = express();

/*
app has useful methods like
app.get() takes two arguments url and cb func
app.post()
app.put()
app.delete()
*/


// no if else block. we can move things to a separate file
app.get( '/', (req, res) => {
  res.send('Hello World, user!');
})

app.get('/api/numbers', (req, res) => {
  res.send([1,2,3]);
})

app.get('/api/numbers/:id', (req,res) => {
  res.send(req.params.id);
})

// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port} using express`))
