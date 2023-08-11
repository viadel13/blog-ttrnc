import transport1 from '../../assets/images/transport1.jpeg';
import transport2 from '../../assets/images/transport2.jpeg';
import transport3 from '../../assets/images/transport3.jpeg';
import transport4 from '../../assets/images/transport4.jpeg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
       <div id="contenu2">

    <article className="gauche">
      <h2>Qui Sommes nous?</h2>
      <h3>TTNRC Sarl :Transit Transport negoce Representation Commerciale</h3>
      <p> Pr&eacute;sentation du portfolio et de l'expérience de l'entreprise <strong>TTNRC</strong> dans ses déploiements au Littoral, au Centre, au Nord et dans la sous région Afrique Centrale.
         </p>
      <h3>Nos compétences</h3>
      <h4>En logistique import et export, par mer-air-terre</h4>
      
      <ul>
        <li>Proc&eacute;dure de pr&eacute;d&eacute;douanement des marchandises</li>
        <li>Proc&eacute;dure de d&eacute;douanement</li>
        <li>Proc&eacute;dure d'enl&egrave;vement selon les cas ci-apr&egrave;s:</li>            
      </ul>
      
      <ul>
        <li>Mise &agrave; la consommation directe/suite &agrave; un r&eacute;gime suspensif</li>
          <li>Admission temporaire normale-Admission temporaire sp&eacute;ciale</li>
          <li>Mise en entrep&ocirc;t de stockage direct/Mise en entrep&ocirc;t suite admission temporaire normale</li>
          <li>Transit-Transbordement</li>
          <li>Exportation d&eacute;finitive/R&eacute;exportation suite admission temporaire</li>
      
      </ul>
    </article>
    <div className="droite">A PROPOS </div>
  </div>
  )
}

export default Portfolio
