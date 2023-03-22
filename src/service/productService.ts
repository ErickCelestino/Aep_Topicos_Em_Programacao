import {writeFile,readFile, } from 'fs/promises'

class ProductService {

    async createProductList(data) {
        try{
            await writeFile('products.json',JSON.stringify(data))
        }catch(err){
            throw new Error('Falha ao salvar a lista de produtos')
        }
    }

    async readProduct(){
        try{
            const readFiles = await readFile('products.json','utf-8')
            let result = JSON.parse(readFiles)
            return result
        }catch(err){
            throw new Error('Falha na leitura dos produtos')
        }
    }

    async stockProduct(){
        try{
            const readFiles = await readFile('products.json','utf-8')
       
            let result = JSON.parse(readFiles)
            
            let stock = result.map(item => {
                let product_stock ={
                    nome: item.nome,
                    qtde: item.qtde,
                    preco: item.preco,
                    valor_estoque: item.qtde * item.preco
                }   
              return product_stock
                }
            )
            return stock
        }catch(err){
            throw new Error('Falha na criação do estoque')
        }

    }

    async getStockValue(){
        
        const stockProduct = await this.stockProduct()

        let stockValue = stockProduct.reduce((acumudador,preco) => {
            return acumudador + preco.value.valor_estoque
        },0)
        return stockProduct
    }
}

export default new ProductService()
