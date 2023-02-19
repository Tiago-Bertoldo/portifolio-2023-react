import './Style/desktop.scss'
import './Style/responsive.scss'
import { MdAlternateEmail } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { useState } from 'react';

export default function Contact () {

    return (
        <footer id="contact">
           <section className="container-footer">
                <div className="container-footer__header">
                    <h2>Contactez-moi</h2>
                    <p>Je serai disponible avec grand plaisir pour de futurs èchanges</p>
                </div>
               <div className="container-form-footer">
                    <aside className="container-form-footer__left">
                       <form action="">
                            <label htmlFor="user" className='label-style'>Nom:</label>
                            <div className="style-input-icons">
                                <label htmlFor="user"><BiUser/></label>
                                <input type="text" name="user" id="user" data-icon='30' className='input-text-style'/>
                            </div>
                            <label htmlFor="email">Email:</label>
                            <div className="style-input-icons">
                                <label htmlFor="email"><MdAlternateEmail/></label>
                                <input type="email" name="email" id="email" data-icon='30' className='input-text-style'/>
                            </div>
                            <label htmlFor="subjet">Subjet:</label>
                            <textarea name="subjet" id="subjet" cols="30" rows="10"></textarea>
                            <input type="submit" value="ENVOYER" className='btn-submit'/>
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