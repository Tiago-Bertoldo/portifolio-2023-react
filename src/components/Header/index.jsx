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
          activeBurguerEffect.classList.toggle('active-menu-responsive')
          
     }
     


     console.log(activeBurguer);

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
                         <div className="burguer"></div>
                         <div className="burguer"></div>
                         <div className="burguer"></div>
                    </div>
                    <ul className='teste'>
                         <li>
                              <a href="#header">Home</a>
                         </li>
                         <li>
                              <a href="#header">Competences</a>
                         </li>
                         <li>
                              <a href="#header">Portifolio</a>
                         </li>
                         <li>
                              <a href="#header">À propos</a>
                         </li>
                         <li>
                              <a href="#header">Contact</a>
                         </li>
                    </ul>
              </nav>
              <section className="container-info-header">
                    <div className="container-info-header__left">
                              <div className="container-info-header__reseaux">
                                   <span>
                                        <a href="https://www.linkedin.com/in/tiago-bertoldo-6021a61a8/"><AiFillLinkedin/></a>
                                   </span>
                                   <span>
                                        <a href="https://github.com/sadberto"><AiFillGithub/></a>
                                   </span>
                              </div>
                              <div className="container-info-header__text-apresentation">
                                   <p>Hello World , je suis</p>
                                   <p>Tiago Bertoldo</p>
                                   <p>Front End Developpeur</p>
                                   <div className="container-info-header__btn-download">
                                   <ul>
                                        <li>
                                             <a href="#cv">Download CV</a>
                                        </li>
                                        <li>
                                             <a href="cv">Contact</a>
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
