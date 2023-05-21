import  db  from "../database/db.js";

import {  DataTypes } from "sequelize";
import  MesaModel  from "./MesaModel.js";
import  ProductoModel  from "./ProductoModel.js";

   const Producto_MesaModel = db.define('producto_mesa',{
    id:{type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull:false},
    idproducto: {type: DataTypes.INTEGER,
        allowNull: false,
    },
    idmesa: {type:DataTypes.INTEGER,
        allowNull: false,},
    estado: {type:DataTypes.ENUM('INABILITADO', 'LIBRE', 'OCUPADO', 'TICKET_EMITIDO', 'PAGADO')}
})

Producto_MesaModel.belongsTo(MesaModel,{
    foreignKey: 'idmesa'
})

Producto_MesaModel.belongsTo( ProductoModel,{
    foreignKey: 'idproducto'
})
export default Producto_MesaModel;