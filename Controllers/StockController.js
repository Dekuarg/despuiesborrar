
  import MesaModel from "../models/MesaModel.js";
  import UserModel from "../models/UserModel.js";
  import ProductoModel from "../models/ProductoModel.js";
  import Producto_MesaModel from "../models/Producto_MesaModel.js";



  export const getUser = async (req, res) => {
    try {
      const user = await UserModel.findAll({
        where: { id: req.params.id },
      });
      res.json(user);
    } catch (error) {
      res.json({ message: error.message });
    }
  };


  export const createUser = async (req, res) => {
    try {
      await UserModel.create(req.body);
      res.json({
        message: "usuario creado.",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const updateUser = async (req, res) => {
    try {
      await UserModel.update({
        where: { id: req.params.id },
      });
      res.json({
        message: "usuario actualizado.",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
        UserModel.destroy({
        where: { id: req.params.id },
      });
      res.json({
        message: "usuario eliminado con exito",
      });
    } catch (error) {}
  };


  export const getAllMesas = async (req, res) => {
    try {
      const mesas = await MesaModel.findAll();
      res.json(mesas);
    } catch (error) {
      res.json({ message: error.message });
    }
  };

  export const getMesa = async (req, res) => {
    try {
      const blog = await MesaModel.findAll({
        where: { id: req.params.id },
      });
      res.json(blog);
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  

  export const getAllProductos = async (req, res) => {
    try {
      const productos = await ProductoModel.findAll();
      res.json(productos);
    } catch (error) {
      res.json({ message: error.message });
    }
  };

  export const getProducto = async (req, res) => {
    try {
      const blog = await ProductoModel.findAll({
        where: { id_producto: req.params.id},
      });
      res.json(blog[0]);
    } catch (error) {
      res.json({ message: error.message });
    }
  };

  export const createProducto = async (req, res) => {
    try {
      await ProductoModel.create(req.body);
      res.json({
        message: "Producto creado.",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const updateProducto = async (req, res) => {
    try {
      await ProductoModel.update(req.body,{
        where: { id_producto: req.params.id},
      });
      res.json({
        message: "Producto actualizado.",
      });
    } catch (error) {
      res.json({ message: error.message });
    }
  };
  
  export const deleteProducto = async (req, res) => {
    try {
        ProductoModel.destroy({
        where: { id_producto: req.params.id },
      });
      res.json({
        message: "Producto eliminado con exito",
      });
    } catch (error) {}
  };
  
 