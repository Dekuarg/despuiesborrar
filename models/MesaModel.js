import db  from "../database/db.js";

import {  DataTypes } from "sequelize";

 const MesaModel = db.define('mesas',{
    id:{type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false},
    precio: {type: DataTypes.INTEGER},
    nmesa: {type:DataTypes.INTEGER},
    estado: {type:DataTypes.ENUM('INABILITADO', 'LIBRE', 'OCUPADO', 'TICKET_EMITIDO', 'PAGADO')}
})

export default MesaModel;