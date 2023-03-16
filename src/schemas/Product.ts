import { Schema, model, Document } from 'mongoose'

const ProductSchema = new Schema({
    nome: String,
    qtde: String,
    preco: String,
    valor_estoque: String
}, {
    // adiciona os campos createdAt e updatedAt
    timestamps: true
})

export default model('Product', ProductSchema)
