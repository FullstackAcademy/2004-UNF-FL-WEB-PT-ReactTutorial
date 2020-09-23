const { client } = require('./index')

async function getLinks() {
  const {
    rows: links,
  } = await client.query( ` SELECT * FROM links `);

  return links
}

async function deleteLinks(id) {
  try {
    const sql = `DELETE FROM links WHERE id = $1`

    await client.query(sql, [id]); 
  } catch (err) {
    console.error('I broke it :(', err.message)

    throw err
  }
}

async function createLink({ url, name }) {
  try {
    const sql = `INSERT INTO links (url, name) values ($1, $2)`

    await client.query(sql, [url, name]); 
  } catch (err) {
    console.error('I broke it :(', err.message)

    throw err
  }
}

module.exports = {
  getLinks,
  deleteLinks,
  createLink,
}