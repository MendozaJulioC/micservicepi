require('dotenv').config();
const app= require('./app');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(require('./routes/index'))

async function main(){
    app.listen(process.env.PORT||4000);
    console.log(`Servidor activo ${process.env.PORT}`)
}

main();