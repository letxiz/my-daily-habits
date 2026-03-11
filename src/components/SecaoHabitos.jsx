function SecaoHabitos({titulo, children}){
    return(
        <> 
            <h2>{titulo}</h2>
            <div className="lista-habitos">
                 {children}
            </div>
        </>
    )

}
export default SecaoHabitos