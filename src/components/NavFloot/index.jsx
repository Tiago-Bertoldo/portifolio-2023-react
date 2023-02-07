import './Style/responsive.scss'
import './Style/desktop.scss'
import { useEffect } from 'react'
export default function NavFloot(){
    useEffect(()=>{
        window.addEventListener('scroll' , e =>{
            let getScrollHeight = window.pageYOffset
            let getElementUl = document.querySelector('#aside ul')
            let getElementBar = document.querySelector('.line-charge-menu')
            if(getScrollHeight >= 350){
                getElementUl.classList.add('active-aside-menu')
                getElementBar.classList.add('active-aside-menu')
                return
            }else if (getScrollHeight <= 350) {
                getElementUl.classList.remove('active-aside-menu')
                getElementBar.classList.remove('active-aside-menu')
                return
            }
        });
    })    
    
    return (
        <>
            <aside id="aside">
                <div className="line-charge-menu"></div>
                    <ul>
                         <li class='active-menu'>
                              <a href="#header">H</a>
                         </li>
                         <li>
                              <a href="#competences">C</a>
                         </li>
                         <li>
                              <a href="#portifolio">P</a>
                         </li>
                         <li>
                              <a href="#aproros">À</a>
                         </li>
                         <li>
                              <a href="#contact">CT</a>
                         </li>
                    </ul>
            </aside>
        </>
    )
}