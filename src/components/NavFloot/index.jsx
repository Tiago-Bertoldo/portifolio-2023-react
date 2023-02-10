import './Style/responsive.scss'
import './Style/desktop.scss'
import { useEffect } from 'react'
export default function NavFloot(){
    useEffect(()=>{
        window.addEventListener('scroll' , e =>{
            let getScrollHeight = window.pageYOffset
            let getElementBollCharge = document.querySelectorAll('.background-charge-menu')
            let lineEffectBar = document.querySelector('.line-charge-effectived')
            let getElementUl = document.querySelector('#aside ul')
            let getElementBar = document.querySelector('.line-charge-menu')
            if(getScrollHeight >= 350){
                getElementUl.classList.add('active-aside-menu')
                getElementBar.classList.add('active-aside-menu')
            }else if (getScrollHeight <= 350) {
                getElementUl.classList.remove('active-aside-menu')
                getElementBar.classList.remove('active-aside-menu')
            }

            if(getScrollHeight >= 400) {
                getElementBollCharge[0].classList.add('active-boll-bar')
                getElementBollCharge[1].classList.add('active-boll-bar')
                lineEffectBar.style.transform = 'scaleY(2)';
            }else {
                getElementBollCharge[1].classList.remove('active-boll-bar')
            }
            if(getScrollHeight >= 800) {
                getElementBollCharge[2].classList.add('active-boll-bar')
                lineEffectBar.style.transform = 'scaleY(8)';
            }else {
                getElementBollCharge[2].classList.remove('active-boll-bar')
            }
            if(getScrollHeight >= 1000) {
                getElementBollCharge[3].classList.add('active-boll-bar')
                lineEffectBar.style.transform = 'scaleY(13)';
            }else {
                getElementBollCharge[3].classList.remove('active-boll-bar')
            }
            if(getScrollHeight >= 1200) {
                getElementBollCharge[4].classList.add('active-boll-bar')
                lineEffectBar.style.transform = 'scaleY(18)';
            }else {
                getElementBollCharge[4].classList.remove('active-boll-bar')
            }
            return;

        });
    }) 
 
    
    return (
        <>
            <aside id="aside" className='aside-bar-effect'>
                    <ul >
                        <div className="line-charge-menu">
                            <div className="line-charge-effectived"></div>
                        </div>
                         <li className='active-menu'>
                              <div className="background-charge-menu"></div>
                              <a href="#header">H</a>
                         </li>
                         <li>
                              <div className="background-charge-menu"></div>
                              <a href="#competences">C</a>
                         </li>
                         <li>
                            <div className="background-charge-menu"></div>
                              <a href="#portifolio">P</a>
                         </li>
                         <li>
                         <div className="background-charge-menu"></div>
                              <a href="#apropos">À</a>
                         </li>
                         <li>
                         <div className="background-charge-menu"></div>
                              <a href="#contact">CT</a>
                         </li>
                    </ul>
            </aside>
        </>
    )
}