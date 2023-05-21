import { Sequelize } from "sequelize";

const db = new Sequelize('u545779845_mendostock','u545779845_mendostock','Temaukel2023!',{
    host:'149.100.155.1',
    port: 3306,
    dialect:'mysql'
})

export default db;