const express = require('express')
const cors = require('cors')
const { getLinks, deleteLinks, createLink } = require('./db/links')

const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  console.log('API - ', req.path)
  next()
})

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({
    error: error.toString(),
  });
})

/* Routes */ 
app.get('/links', async (req, res, next) => {
  try {
    const myBOyJC = await getLinks()

    res.status(200).json(myBOyJC)
  } catch (err) {
    next(err)
  }
})

app.delete('/link/:id', async (req, res, next) => {
  try {
    const { id } = req.params

    await deleteLinks(id)

    res.status(204)
  } catch (err) {
    next(err)
  }
})

app.post('/link', async (req, res, next) => {
  try {
    const { url, name } = req.body

    await createLink({ url, name})

    res.status(201)

  } catch (err) {
    next(err)
  }
})

app.get('/', (req, res) => {
  res.status(200).json({ healthy: true })
})
/* End Routes */


app.listen(3001, () => {
  console.log('listening on port 3001')
})
