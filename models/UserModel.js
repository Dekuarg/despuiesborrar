import  db  from "../database/db.js";

import {  DataTypes } from "sequelize";

   const UserModel = db.define('usuarios',{
    id:{type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false},
    nombre: {type: DataTypes.STRING},
    contraseña: {type:DataTypes.STRING},
    email: {type:DataTypes.STRING}
})

export default UserModel