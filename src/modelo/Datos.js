import { Schema, model } from "mongoose";

const coleccion = new Schema({
    title: String,
    description: String,
    done:{
        type: Boolean,
        default:false
    }
});

export default model('coleccion', coleccion)