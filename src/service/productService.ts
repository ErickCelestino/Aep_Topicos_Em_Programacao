import {writeFile,readFile} from 'fs/promises'

class ProductService {

    async createProductList(data) {
        try{
            console.log('Criando lista de produtos')
            await writeFile('products.json',JSON.stringify(data))
        }catch(err){
            throw new Error('Falha ao salvar a lista de produtos')
        }
    }

    async readProduct(data){
        try{
            console.log('Produto Lido')
            const readFiles = await readFile(`${data}`,'utf-8')
            let result = JSON.parse(readFiles)
            return result
        }catch(err){
            throw new Error('Falha na leitura dos produtos')
        }
    }

    async stockProduct(data){
        try{
            
        }catch(err){
            throw new Error('Falha na criação do estoque')
        }

    }
}

export default new ProductService()