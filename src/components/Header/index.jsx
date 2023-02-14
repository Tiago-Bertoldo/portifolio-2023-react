import '../Header/Style/desktop.scss'
import '../Header/Style/resposive.scss'
import  moveEffect from '../Header/assets/coverr-coding-technology-5974-1080p.mp4'
import imgProfil from '../Header/assets/img-profil.png'
import { AiFillLinkedin } from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai'
import { useState } from 'react';


export default  function Header() {
     const [activeBurguer , setActiveburguer] = useState(false)
     
     const handleActiveBurguer = () => {
          activeBurguer ? setActiveburguer(false) : setActiveburguer(true)  ; 
          let activeBurguerEffect = document.querySelector('.container-menu-nav ul')
          let animationBurguer = document.querySelector('.container-burguer-btn');
          animationBurguer.classList.toggle('toggle')
          activeBurguerEffect.classList.toggle('active-menu-responsive');
     }
    return (
       <header id='header'>
          <div className="container-movie">
               <video  className='move-style' autoPlay muted loop>
                    <source className='testess' src={moveEffect} type="video/mp4" />
               </video>
          </div>
          <div className="container-header">
              <nav className='container-menu-nav'>
                    <div onClick={() => handleActiveBurguer()} className="container-burguer-btn">
                         <div className="burguer line1"></div>
                         <div className="burguer line2" ></div>
                         <div className="burguer line3"></div>
                    </div>
                    <ul>
                         <li>
                              <a href="#header">Home</a>
                         </li>
                         <li>
                              <a href="#competences">Competences</a>
                         </li>
                         <li>
                              <a href="#portifolio">Portifolio</a>
                         </li>
                         <li>
                              <a href="#aproros">À propos</a>
                         </li>
                         <li>
                              <a href="#contact">Contact</a>
                         </li>
                    </ul>
              </nav>
              <section className="container-info-header">
                    <div className="container-info-header__left">
                              <div className="container-info-header__reseaux">
                                   <span>
                                        <a href="https://www.linkedin.com/in/tiago-bertoldo-6021a61a8/" target="_blank" rel='noreferrer'><AiFillLinkedin/></a>
                                   </span>
                                   <span>
                                        <a href="https://github.com/sadberto" target="_blank" rel='noreferrer'><AiFillGithub/></a>
                                   </span>
                              </div>
                              <div className="container-info-header__text-apresentation">
                                   <p>Hello World , je suis</p>
                                   <h2>Tiago Bertoldo</h2>
                                   <p>Front End Developpeur</p>
                                   <div className="container-info-header__btn-download">
                                   <ul>
                                        <li>
                                             <a href="https://drive.google.com/file/d/1u9E4KMqOXSO1h7jH4hkGq1TxuQbI4Jyr/view">Download CV</a>
                                        </li>
                                        <li>
                                             <a href="#contact">Contact</a>
                                        </li>
                                   </ul>
                              </div>
                              </div>
                              
                    </div>
                    <div className="container-info-header__right">
                              <figcaption>
                                   <img src={imgProfil} alt="my de profil" />
                              </figcaption>
                    </div>
              </section>

          </div>
       </header>
    )
}
