import './Aboutus.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';

export default function Informations() {
    return (
        <div className="about-us">
            <h1 id='about-title'>À PROPOS DE NOUS</h1>
            <div className="pics-text">
                <div className="pics">
                    <img id="pic1" src={pic1} alt="pic1" />
                    <img id="pic2" src={pic2} alt="pic2" />
                </div>
                <div className="paragraph">
                    <p id="def">
                        Chez Noor Power Service, nous nous engageons à construire un avenir plus brillant, plus propre et plus durable grâce à des solutions d'énergie solaire intelligentes.<br /><br />
                        Basée au Maroc, notre mission est de fournir aux foyers, aux entreprises et aux industries des technologies solaires fiables et abordables adaptées à leurs besoins énergétiques uniques.
                        <br /><br />
                        Que vous cherchiez à alimenter votre maison, à réduire les coûts énergétiques de votre entreprise ou à investir dans un avenir durable, Noor Power Service est votre partenaire solaire de confiance.
                        <br /><br />
                        "Let’s harness the power of the sun — together."
                    </p>
                </div>
            </div>

        </div>
    );
}