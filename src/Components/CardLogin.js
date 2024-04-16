import "./Styles/CardLogin.modules.css"
import axios from "axios"
import { useState } from "react" 
import Input from "./Input"
import Button from "./Button"
import SlideButton from "./SlideButton"

const CardLogin = () => {

    const [login, setLogin] = useState({
        email: "",
        senha: "",
    });

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login/entrar`, login)
        .then(function (response) {
            //const token = response.data;
        }).catch(error => {
            console.log(error.response.data)
        });
    };
    

    function handleChange(e) {
        setLogin({...login, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <SlideButton></SlideButton>
        </div>
    )
}

export default CardLogin
