

const Aluno = (props) => {
    return (
        <>
            <h2>PROPS-PROPRIEDADES</h2>
            <p>O nome do aluno é: {props.nome}</p>
            <p>A idade do aluno é: {props.idade}</p>
        </>
    )
}

export default Aluno
