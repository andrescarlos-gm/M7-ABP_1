const { Pool } = require('pg');

// const clientstring = "postgres://usuario:123456@127.0.0.1:5432/usuarios"

const pool = new Pool({
    user: 'usuario',
    password: '123456',
    host: 'localhost',
    port: 5432,
    database: 'usuarios'
});

pool.connect();

const crearTabla = async () => {
    try {
        await clientobj.query(`CREATE TABLE IF NOT EXISTS usuarios (id SERIAL PRIMARY KEY, nombre VARCHAR(50))`);
        console.log('Tabla creada');
    } catch (error) {
        console.log(error);
    }
}
crearTabla();



const poolQuery = () => {
try {
    pool.query((`INSERT INTO usuarios nombre VALUES $1;`), (err, res) =>{
        if(!err) {
            console.log(res.rows[0].now);
        }
    });

    }catch (err){
        console.log(err);
    }
const datos = []

}

poolQuery();
pool.end();