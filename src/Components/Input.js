const  Input = ({type, name, placeholder, value, handlerOnChange}) => {
 
    return(
        <input 
            type={type} 
            name={name} 
            id={name}
            placeholder={placeholder} 
            value={value} 
            onChange={handlerOnChange}
        ></input>
    );

}

export default Input