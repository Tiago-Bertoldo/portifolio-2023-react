import './Style/responsive.scss'
import './Style/desktop.scss'
import {userCompetences} from '../../backend-jsx/infoUser'
export default function Competences () {
    return (
        <section id="competences">
            <div className="shape-curved">
                <h2>Competences</h2>
            </div>
            <div className="competences-container">
                <div className="competences-blocks">
                    {userCompetences.map((competencesUser , index) => (
                        <div className="competences-blocks__boxs" key={index}>
                            <h2>{competencesUser.title}</h2>
                            <div className="competences-blocks__info-user">
                                {competencesUser.competences.map((maxCompetences , index) => (
                                    <ul key={index}>
                                        <li>
                                            <p>{maxCompetences}</p>
                                        </li>
                                    </ul>

                                ))}
                            </div>
                    </div>
                    ))}
                </div>        
            </div>
        </section>
    )
}