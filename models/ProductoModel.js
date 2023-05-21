import  db  from "../database/db.js";

import { DataTypes } from "sequelize";

   const ProductoModel = db.define('productos',{
    id_producto:{type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false},
    nombre_producto: {type: DataTypes.INTEGER},
    descripcion_producto: {type:DataTypes.STRING},
    precio: {type:DataTypes.INTEGER},
    fecha_registro: {type:DataTypes.DATE},
    cantidad: {type:DataTypes.INTEGER},
    id_tipo: {type: DataTypes.INTEGER,
        allowNull: false,
    },
})

export default ProductoModel;