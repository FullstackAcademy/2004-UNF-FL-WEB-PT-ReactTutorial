// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function seedData() {
  try {
    client.connect();

    await client.query(`
      DROP TABLE if exists links;


      CREATE TABLE links (
          id serial primary key,
          url VARCHAR ( 4000 ) NOT NULL,
          name varchar (50) NOT NULL
      );
      
      INSERT INTO links (url, name) values ('http://google.com/', 'Bing');
      
      SELECT * FROM links; 
    `)

  } catch (error) {
    throw error;
  }
}

seedData()
  .catch(console.error)
  .finally(() => client.end());