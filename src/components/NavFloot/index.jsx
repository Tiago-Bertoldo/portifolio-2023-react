import './Style/responsive.scss'
import './Style/desktop.scss'
import { useEffect } from 'react'
export default function NavFloot(){
    useEffect(()=>{
        window.addEventListener('scroll' , e =>{
            let getScrollHeight = window.pageYOffset
            console.log(getScrollHeight)
            let lineEffectBar = document.querySelector('.line-charge-effectived')
            let bollEffectBar = document.querySelectorAll('.aside-bar-effect li')
            let getElementUl = document.querySelector('#aside ul')
            let getElementBar = document.querySelector('.line-charge-menu')
            if(getScrollHeight >= 350){
                getElementUl.classList.add('active-aside-menu')
                getElementBar.classList.add('active-aside-menu')
            }else if (getScrollHeight <= 350) {
                getElementUl.classList.remove('active-aside-menu')
                getElementBar.classList.remove('active-aside-menu')
            }

        });
    }) 

    useEffect(()=>{
        document.addEventListener('click' , e => {
            let lineEffectBar = document.querySelector('.line-charge-effectived')
            let bollEffectBar = document.querySelectorAll('.aside-bar-effect li')
            const el = e.target;
            switch (el.text) {
                case 'H':
                    lineEffectBar.style.transform = 'scaleY(2)';
                    bollEffectBar[0].style.backgroundColor = '#678983';
                    bollEffectBar[1].style.backgroundColor = '#181D31';
                    bollEffectBar[2].style.backgroundColor = '#181D31';
                    bollEffectBar[3].style.backgroundColor = '#181D31';
                    bollEffectBar[4].style.backgroundColor = '#181D31';
                    
                    break;
                case 'C':
                    lineEffectBar.style.transform = 'scaleY(2)';
                    bollEffectBar[1].style.backgroundColor = '#678983';
                    bollEffectBar[2].style.backgroundColor = '#181D31';
                    bollEffectBar[3].style.backgroundColor = '#181D31';
                    bollEffectBar[4].style.backgroundColor = '#181D31';
                    break; 
                case 'P':
                    lineEffectBar.style.transform = 'scaleY(8)';
                    bollEffectBar[2].style.backgroundColor = '#678983';
                    bollEffectBar[3].style.backgroundColor = '#181D31';
                    bollEffectBar[4].style.backgroundColor = '#181D31';
                    break; 
                case 'À':
                    lineEffectBar.style.transform = 'scaleY(13)';
                    bollEffectBar[3].style.backgroundColor = '#678983';
                    bollEffectBar[4].style.backgroundColor = '#181D31';
                    break; 
                case 'CT':
                    lineEffectBar.style.transform = 'scaleY(17)';
                    bollEffectBar[4].style.backgroundColor = '#678983';
                    break; 
                default:
                    break;
            }
        })
    })
       
    
    return (
        <>
            <aside id="aside" className='aside-bar-effect'>
                    <ul >
                        <div className="line-charge-menu">
                            <div className="line-charge-effectived"></div>
                        </div>
                         <li className='active-menu'>
                              <a href="#header">H</a>
                         </li>
                         <li>
                              <a href="#competences">C</a>
                         </li>
                         <li>
                              <a href="#portifolio">P</a>
                         </li>
                         <li>
                              <a href="#apropos">À</a>
                         </li>
                         <li>
                              <a href="#contact">CT</a>
                         </li>
                    </ul>
            </aside>
        </>
    )
}