
import { Request, Response } from 'express'
import productService from '../service/productService'


class productsController{

    public async createJSON(req: Request, res: Response) {
      
        try{
            //console.log('Para fins didaticos: ',req)
            productService.createProductList(req.body)
        
            return res.status(201).send()
        }catch(err){
            console.log('Error: ',err)
        }
    }

    public async readJSON(req: Request, res: Response){
        try{
            const readFiles = await productService.readProduct()
            return res.status(200).json(readFiles)

        }catch(err){
            console.log('Erro: ',err)
        }
       
    }

    public async createStockJSON(req: Request, res: Response){
        try{
           
            const Stock = await productService.stockProduct()
            return res.status(200).json(Stock)

        }catch(err){
            console.log('Erro: ',err)
        }
    }

}

export default new productsController()