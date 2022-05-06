import mongoose from "mongoose";

mongoose.connect("mongodb+srv://devoliveiras:123@cluster0.nucvd.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;