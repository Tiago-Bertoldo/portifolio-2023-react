import './Style/desktop.scss'
import './Style/responsive.scss'

export default function Apropos () {
    return (
        <div id="apropos">
            <section className="container-apropos">
                <h1>À Propos</h1>
                <p>Je suis développeur web et j'aime ça !</p>
            </section>
            <article className='apropos__articles'>
                    <div className="apropos__articles__left">
                            <h2>Un développeur web passionné</h2>
                            <p>Passionné par la technologie depuis mon enfance, j’ai toujours été quelqu'un de dévoué à l’apprentissage. J’ai appris avec la programmation à être une personne autodidacte et polyvalent</p>
                            <p>Actuellement en changement de voie professionnelle, je suis à la recherche de une première expérience en tant que programmeur Front End avec des expériences et des connaissances en technologie comme; Javascript , NodeJS, Sass, React et PHP, Symphony</p>
                    </div>
                    <div className="apropos__articles__center">
                        <h2>Expérience en développement</h2>
                        <p>J'ai acquis beaucoup d'expérience au cours de mes études, tout en créant de vrais projets</p>
                        <p>Comme de projet e-commerce , location , portifolio, ici mon <a href="https://www.linkedin.com/in/tiago-bertoldo/" target="_blank" rel='noreferrer'>linkedin</a> avec tous mes projets</p>
                    </div>
                    <div className="apropos__articles__right">   
                            <div className="apropos__articles__right__aside__left">
                                <h2>Skills</h2>
                                <p>Html 5 + Css/Sass</p>
                                <p>Javascript</p>
                                <p>React.js</p>
                                <p>Node.Js</p>
                                <p>MongDB</p>
                                <p>Express</p> 
                                <p>Typescript</p>
                            </div>
                            <div className="apropos__articles__right__aside__right">
                                <h2>Tools</h2>
                                <p>Vscode et Sublime</p>
                                <p>Git et GitHub</p>
                                <p>Git Bash</p>
                                <p>Figma</p>
                                <p>Photoshop</p>
                            </div> 
                    </div> 
            </article>
        </div>
    )
}