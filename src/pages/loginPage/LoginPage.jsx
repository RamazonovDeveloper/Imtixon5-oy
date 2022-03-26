import React, { useEffect, useRef, useState } from 'react';
import './LoginPage.scss'
import ell1 from '../../img/Ellipse 1.png'
import ell2 from '../../img/Ellipse 2.png'
import img1 from '../../img/login_img_1.png'
import img2 from '../../img/login_img_2.png'
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

    // const [login, setLogin] = useState(false)

    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()


    // useEffect(() => {
    //     localStorage.setItem('token', login)
    //     console.log(emailRef.current.value)
    //     console.log(passRef.current.value)
    //     if(login){
    //         fetch('https://reqres.in/api/login',{
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    // //           },
    // //           method: "POST",
    // //           body: JSON.stringify(
    // //               {
    // //                   email:emailRef.current.value, 
    // //                   password: passRef.current.value
    // //             })
    // //     })
    // //     .then(res => res.json())
    // //     .then(res => {console.log(res)})
    // //     // .then(res => {console.log(res.token)})
    // //     .then(res => {
    // //         console.log()
    // //         if(res.token){
    // //             localStorage.setItem('token', 'QpwL5tke4Pnpja7X4')
    // //             navigate('/')
    // //         }
    // //     })
    // //     // .then(res => {navigate('/')})
    // //     .catch(err => {alert(err)})
    // //     }

    // //     // if(localStorage.getItem('token')!==''){
    // //     //     navigate('/')
    // //     // }

    // // },[login])

    // // const [token, setToken] = useToken()

    // // const [unReg, setUnReg] = useUnReg()
    
    // const [conTok, setConTok] = useState(false)

    // // const [conReg, setConReg] = useState(false)

    // const emailRef = useRef()
    // const passwordRef = useRef()


    // useEffect(() => {

    //     const checkEmail = (data) => {
    //         return fetch('https://reqres.in/api/login', {
    //                 method: "POST",
    //                 headers: {
    //                 "content-type": "application/json",
    //                 },
    //                 body: JSON.stringify(data)
    //             }).then(res => res.json())
    //             .then(res => {localStorage.setItem('token', res.token)})
    //             .catch(err => {alert(err)})
    //         // return result
    //     }

    //     const newUser = {
    //         email: "eve.holt@reqres.in",
    //         password: "cityslicka"
    //     }

        
        
    //     const user = {
    //         email:emailRef.current.value,
    //         password:passwordRef.current.value
    //     }
    //     checkEmail(user)
    // },[conTok])

    // // useEffect(() => {
    // //     if(conReg){
    // //         // setUnReg('limited')
    // //     }
    // //     console.log(unReg)
    // // },[conReg])


    const handleClick = () => {
        if(emailRef.current.value != '' && passRef.current.value !=''){
            localStorage.setItem('token', 'salom')
            navigate(`/`)
        }
        else{
            alert('Something went wrong')
        }

    }

    
    

    return (
        <div className='login'>
            <div className='desighn'>
                <img className='desighn__left' src={ell1} alt="" />
                <img className='desighn__right' src={ell2} alt="" />
            </div>
            <div className='login__text'>
                <p className='login__text__subtitle'>Free UI Kit</p>
                <h2 className='login__text__title'>Film & TV</h2>
                <div className='login__text__form'>
                    <input ref={emailRef} placeholder='Login' type="text" />
                    <input ref={passRef} placeholder='Password' type="password" />
                    <button onClick={() => {handleClick()}}>Login</button>
                </div>
            </div>
            <div className='login__img'>
                <img className='login__img__1' src={img1} alt="" />
                <img className='login__img__2' src={img2} alt="" />
            </div>
        </div>
    );
}

export default Loginpage;
