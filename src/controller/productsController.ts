
import { Request, Response } from 'express'
import Product from '../schemas/Product'
import productService from '../service/productService'


class productsController{

    public async createJSON(req: Request, res: Response) {
      
        try{
            console.log('Para fins didaticos: ',req)
            productService.createProductList(req.body)
        
            return res.status(201).send()
        }catch(err){
            console.log('Error: ',err)
        }
    }

    public async readJSON(res: Response){
        try{
            const readFiles = await productService.readProduct('products.json')
            const result = res.json(readFiles)
            return result

        }catch(err){
            console.log('Erro: ',err)
        }
       
    }

    public async createStockJSON(req: Request, res: Response){
        try{
            const readFiles = await productService.readProduct('products.json')
            const resultStock = readFiles.map(
                (item) => {
                   for(let i = 0;i < item.length;i++){
                        new Product({
                            nome: item[i].nome,
                            preco: parseFloat(item[i].preco),
                            qtde: parseInt(item[i].qtde),
                            valor_estoque: parseInt(item[i].qtde) * parseFloat(item[i].preco)
                        })
                   }
                })
            console.log(resultStock)
        }catch(err){
            console.log('Erro: ',err)
        }
    }

}

export default new productsController()