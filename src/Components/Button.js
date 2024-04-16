const Button = ({nomeBotao, evento}) => {

    return(
        <button onClick={evento}>{nomeBotao}</button>
    );

}

export default Button