function Cabecalho({descricao, titulo}){
    return(
        <>
        <header>
            <h1>
                {titulo}
            </h1>
            <p>{descricao}</p>
        </header>
        </>
    )
    
}
export default Cabecalho