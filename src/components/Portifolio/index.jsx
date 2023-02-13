import './Style/desktop.scss'
import './Style/responsive.scss'
import { CgWebsite } from 'react-icons/cg';
import { FaGithubSquare } from 'react-icons/fa';
import {infoProjet} from '../../backend-jsx/projets'

export default function Portifolio () {
    return (
        <div id="portifolio">
            <section className="portifolio-container ">
                <div className="portifolio-header">
                    <h2>Mes projets</h2>
                    <p>Une partie des projets sur lesquels j'ai travaillé</p>
                </div>
            <div className="portifolio-blocks">
                    {infoProjet.map((portifolioProjet , index) => (
                        <div className="portifolio-blocks__boxs" key={index}>
                            <h2>{portifolioProjet.nom}</h2>
                            <div className="portifolio-img">
                                <img src={portifolioProjet.urlImg} alt={portifolioProjet.altImg} />
                            </div>
                            <div className="portifolio-blocks__info-user">
                                {portifolioProjet.tecnologie.map((maxCompetences , index) => (
                                    <ul className='teconologie-ul' key={index}>
                                        <li>
                                            <p>{maxCompetences}</p>
                                        </li>
                                    </ul>

                                ))}
                                
                            </div>
                            <aside className="btn-nav-link">
                                <div className="btn-nav-link__left">
                                    <a href={portifolioProjet.url} target='_blank' rel='noreferrer'><CgWebsite/></a>
                                </div>
                                <div className="btn-nav-link__right">
                                    <a href={portifolioProjet.github} target='_blank' rel='noreferrer'><FaGithubSquare/></a>
                                </div>
                                
                              
                            </aside>
                    </div>
                        
                    ))}
                </div>        
            </section>
        </div>
    )
}