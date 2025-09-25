//ferramenta de consumo de rotas ou endpoints do backend

import axios from "axios"
//hooks do react para controlar estados e rederização
import { useState, useEffect } from "react"
const Produtos = () => {
    //estado com a lista de pizzas
    const [pizzas, setPizzas] = useState([])
    // Objeto com a lista de pizzas
    useEffect(()=>{

    //get - busca os dados da rota ou endpoint
    //then metodo- assincrono, espera o retorno da requisição
    //catch - tratamento de erros da requisição
        axios.get("http://172.19.0.49/pizzariaoficial/api/v1/produto")
        .then(response=>{
            setPizzas(response.data.data)
        })
    }, [])

    // Iteração da lista de pizzas 
    const listaPizzas = pizzas.map(pizza=><li key={pizza.id}>
        {pizza.nome}</li>)
    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos
