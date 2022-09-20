const { Pool } = require('pg');

const dblocal = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  
})
dblocal.connect().then(() => console.log('Conexión Local..DB'))


const poolaws = new Pool ({

    user: 'subpiee',
    host: 'dbsubpiee-aws.cxzcrpauh1po.us-east-2.rds.amazonaws.com',
    database: 'dbsubpiee',
    password: process.env.PASS,
    port: 5432,
    max: 20,
    idleTimeoutMillis: 300000000,
    connectionTimeoutMillis: 100000000,
    ssl: { rejectUnauthorized: false }
  })
  poolaws.connect().then(() => console.log('Conex ws..DB'))

module.exports = { dblocal , poolaws};