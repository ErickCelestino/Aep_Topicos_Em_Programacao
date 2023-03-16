//1 - Criar uma nova rota do tipo POST chamada: /products, onde no corpo da requisição deverá ser passado um objeto JSON, que ao ser enviado através da rota, deverá escrever o corpo dessa requisição em um arquivo chamado products.json


Criar uma nova rota do tipo GET chamada: /products, que ao ser acessada irá ler o arquivo products.json
e retornar os valores presentes nesse arquivo



3 - Uma nova camada chamada service deverá ser criada, e a controller irá delegar as tarefas para ela.

Formato do objeto a ser enviado na requisição:

[
    { "nome": "Caneta", "qtde": 10, "preco": 7.99, "data_compra": "2023-03-15", "data_entrega": "2023-04-25" },
    { "nome": "Impressora", "qtde": 0, "preco": 649.50, "data_compra": "2023-03-17", "data_entrega": "2023-05-26" },
    { "nome": "Caderno", "qtde": 4, "preco": 27.10, "data_compra": "2023-03-10", "data_entrega": "2023-03-12" },
    { "nome": "Lapis", "qtde": 3, "preco": 5.8, "data_compra": "2023-03-02", "data_entrega": "2023-04-20" },
    { "nome": "Tesoura", "qtde": 1, "preco": 19.99, "data_compra": "2023-03-25", "data_entrega": "2023-04-13" }
]



4 - Criar uma nova rota do tipo GET chamada: /products-stock, que ao ser acessada irá ler o arquivo products.json e retornar um novo array de objetos utilizando como exemplo a seguinte estrutura: 

[
    { nome: "Nome do Produto", qtde: 10, preco: 7.99, valor_estoque: 79.99},
]

