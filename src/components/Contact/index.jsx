import './Style/desktop.scss'
import './Style/responsive.scss'
import { MdAlternateEmail } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import {AiOutlineCheckCircle} from 'react-icons/ai'
import { useEffect, useState } from 'react';
import emailJs from '@emailjs/browser'

export default function Contact () {
    let getSpan = document.querySelector('.loading-scroll')
    const [userName , setName] = useState('')
    const [userEmail , setEmail] = useState('')
    const [userMsg, setMessage] = useState('')
    const [isValidName , setIsValidName] = useState(false)
    const [isValidEmail , setIsValidEmail] = useState(false)
    const [isValidMessage , setIsValidMessage] = useState(false)
    const [isValid , setIsValid] = useState(false);
    const [isValidButton , setIsValidButton] = useState(true) ;


    const isSecurity = {
        validEmail : RegExp(
            '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
         ),
         validName : RegExp(
            '[a-zA-Z0-9]+'
         ),
    }


    const validName = () =>{
        let errorName = document.querySelector('.error-name')
        if(userName.length >= 6 && isSecurity.validName.test(userName) ){
            errorName.innerHTML = ''
            return setIsValid(true)
        }else {
            errorName.innerHTML = 'Minimum 6 characters *'
        }
    }

    const validEmail = () =>{
        let errorEmail = document.querySelector('.error-email')
        if(isSecurity.validEmail.test(userEmail) ){
            errorEmail.innerHTML = ''
            return setIsValid(true)
        }else {
            errorEmail.innerHTML = 'Voulez regardez les champ email *'
            setIsValid(false)
        }
    }

    const validMessage = () =>{
        let errorMessage = document.querySelector('.error-message')
        if(userMsg === ''){
            errorMessage.innerHTML = 'Voulez regardez les champ message *'
            return setIsValid(true)
        }else {
            errorMessage.innerHTML = ''
            setIsValid(false)           
        }
    }

    useEffect(()=>{    
        if(isValid) {
            setIsValidButton(false)
        }else {
            setIsValidButton(true)
        }
        return;
    },[isValid])

    useEffect(()=> {
        if(isValidName){
            validName();
        }
        if(isValidEmail){
            validEmail();
        }
        if(isValidMessage){
            validMessage();
        }
        return;
    })




    const handleValidCheckEmail = (e) => {
        e.preventDefault();
        validedForm();
        return;
    }
    
    const setLoading = () => {
        getSpan.classList.add('active-scroll');
    }
    const removeCarosel = () => {
        getSpan.classList.remove('active-scroll');
     }
    const handleSetTimeOut = () => {
        setTimeout(removeCarosel, 2000);
     }

     function validedForm (){
        if(isValid){
            const templateParams = {
                from_name : userName ,
                message : userMsg,
                email : userEmail ,
            }
            emailJs.send('service_czb8ffl' , 'template_whrs8xf' , templateParams , 'erTyDLaYXqcLjq1Wx')
            .then((res) => {
                setLoading();
            })
            .then((res) => {
                setEmail('')
                setMessage('')
                setName('')
                setIsValid(false)
                setIsValidName(false);
                setIsValidEmail(false)
                setIsValidMessage(false)
                handleSetTimeOut();
            })
            .catch((errr) => {
                console.log('error ' , errr)
            })
            return;
        }

        
    }
        
        return (
        <footer id="contact" >
            <span className='loading-scroll'>Votre message a bien été envoyé.  <AiOutlineCheckCircle className='check-styles' /> </span>
           <section className="container-footer">
                <div className="container-footer__header">
                    <h2>Contactez-moi</h2>
                    <p>Je serai disponible avec grand plaisir pour de futurs èchanges</p>
                </div>
               <div className="container-form-footer">
                    <aside className="container-form-footer__left">
                       <form onSubmit={handleValidCheckEmail}>
                            <label htmlFor="username" className='label-style'>Nom:</label>
                            <div className="style-input-icons border-name">
                                <label htmlFor="username"><BiUser/></label>
                                <input type="text" name="username" id="username" data-icon='30' className='input-text-style'
                                onChange={(e) => setName(e.target.value)}
                                onClick={() => setIsValidName(true)}
                                value={userName}
                                />
                            </div>
                            <span className="error-name"></span>
                           
                            <label htmlFor="email">Email:</label>
                            <div className="style-input-icons">
                                <label htmlFor="email"><MdAlternateEmail/></label>
                                <input type="email" name="email" id="email" data-icon='30' className='input-text-style border-email'
                                onChange={(e) => setEmail(e.target.value)}
                                onClick={() => setIsValidEmail(true)}
                                value={userEmail}
                                />
                            </div>
                            <span className="error-email"></span>
                           
                            <label htmlFor="subjet">Message:</label>
                            <textarea name="subjet" id="subjet" cols="30" rows="10"  className='border-message' 
                                onChange={(e) => setMessage(e.target.value)}
                                onClick={() => setIsValidMessage(true)}
                                value={userMsg}>
                            </textarea>
                            <span className="error-message"></span>
                            <button className='btn-submit' type="submit" disabled={isValidButton}> ENVOYER</button>
                        </form> 
                    </aside>
                    <aside className="container-form-footer__right">
                        <section className="footer-right">
                            <h2>Tiago Bertoldo</h2>
                            <p>Front End Developpeur</p>
                        </section>
                        <nav>
                            <ul>
                                <li>
                                <a href="https://www.linkedin.com/in/tiago-bertoldo-6021a61a8/" target="_blank" rel='noreferrer'><AiFillLinkedin/></a>
                                </li>
                                <li>
                                <a href="https://github.com/tiago-bertoldo" target="_blank" rel='noreferrer'><AiFillGithub/></a>
                                </li>
                                <li>
                                <a href="https://drive.google.com/file/d/1u9E4KMqOXSO1h7jH4hkGq1TxuQbI4Jyr/view" target="_blank" rel='noreferrer'><BsFileEarmarkText/></a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
               </div>
           </section>
        </footer>
    )
}