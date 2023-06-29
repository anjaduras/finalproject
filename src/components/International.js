import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/International.css';
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function International() {
    const STS = "images/international/STS.png"
    const GG = "images/international/GG.png"
    const DHH = "images/international/DHH.png"
    const manimundo = "images/international/manimundo.png"
    const VKK = "images/international/VKK.png"

    return (
        <div className='InterBody'>

            <header className='InterHeader'>
                <Link to="/" className='backLink'>ZURÜCK</Link>
                <h1>WANT TO LEARN OTHER SIGN LANGUAGES?</h1>
                <p>Here are some recources for learning German and English sign languages. <span className='BethEllenPhrase'>Enjoy!</span> </p>
            </header>

            <div className='quelle'>
                <img src={STS} alt="" width={300} className='quelleImage'/>
                <div className='quelleText'>
                    <Link to="https://www.spreadthesign.com/"><h2>SPREAD THE SIGN</h2></Link>

                    <p>SpreadTheSign.com ist eine umfassende Online-Ressource für das Erlernen von Gebärdensprachen weltweit. Die Plattform bietet interaktive Gebärdensprachvideos und ermöglicht es Benutzern, nach Phrasen und Vokabeln zu suchen. Mit einer großen Datenbank von Gebärdensprachvideos in verschiedenen Sprachen bietet SpreadTheSign.com eine immersive Lernerfahrung. Benutzer können leicht zwischen verschiedenen Gebärdensprachen wie American Sign Language (ASL) und British Sign Language (BSL) navigieren. Entdecken Sie die Website und beginnen Sie Ihre Reise zu einer effektiven Kommunikation mit der gehörlosen Gemeinschaft. </p>
                </div>

            </div>

            <div className='quelle'>
                <img src={GG} alt="" width={300} className='quelleImage'/>
                <div className='quelleText'>
                    <Link to="https://www.gebaerdengrips.de/"><h2>GEBAERDENGRIPS</h2></Link>

                    <p>GebärdenGrips.de ist eine informative Website, die sich auf die Deutsche Gebärdensprache (DGS) konzentriert. Sie bietet eine Vielzahl von Ressourcen und Tools, um die DGS zu erlernen und zu verstehen. Benutzer können auf eine umfangreiche Sammlung von Gebärdenvideos zugreifen, um verschiedene Wörter und Ausdrücke zu erlernen. Die Website bietet auch Lektionen, Übungen und Spiele, um das Wissen und die Fähigkeiten in der DGS weiterzuentwickeln.</p>
                </div>

            </div>

            <div className='quelle'>
                <img src={DHH} alt="" width={300} className='quelleImage'/>
                <div className='quelleText'>
                    <Link to="https://dialog-in-hamburg.de/dialog-im-stillen/"><h2>DIALOGHAUS HAMBURG</h2></Link>

                    <p>Dialog im Stillen ist ein einzigartiges Erlebnis in Hamburg, das Menschen dazu einlädt, die Welt der Gehörlosen zu entdecken. Bei dieser interaktiven Ausstellung wird den Besuchern die Möglichkeit geboten, in die Stille einzutauchen und die Alltagssituationen von gehörlosen Menschen nachzuerleben. Durch die Kommunikation in Gebärdensprache und die Nutzung anderer nonverbaler Kommunikationsformen können Besucher ihre eigene Perspektive erweitern und ein tieferes Verständnis für die Gehörlosenkultur entwickeln. Dialog im Stillen schafft eine einzigartige Gelegenheit, Barrieren abzubauen und eine inklusive Gesellschaft zu fördern. Es ist eine wertvolle Erfahrung, die Empathie und Sensibilität für die Kommunikationsbedürfnisse gehörloser Menschen fördert. </p>
                </div>

            </div>

            <div className='quelle'>
                <img src={manimundo} alt="" width={300} className='quelleImage'/>
                <div className='quelleText'>
                    <Link to="https://manimundo.de/"><h2>MANIMUNDO</h2></Link>

                    <p>Unsere modernen und spannenden Lernangebote zum Erlernen der Deutschen Gebärdensprache (DGS) sind zielgenau auf die Bedürfnisse verschiedener Nutzer*innengruppen zugeschnitten. Deshalb bieten wir Dir maßgeschneiderte Lernpakete an: Die Bandbreite reicht von reinen Online-Kursen über kombinierte Blended Learning-Formen bis hin zu individuellen Lösungen für Unternehmen und Bildungseinrichtungen. </p>
                </div>

            </div>

            <div className='quelle'>
                <img src={VKK} alt="" width={300} className='quelleImage'/>
                <div className='quelleText'>
                    <Link to="https://web.kestner.de/gebaerdensprache-einfuehrung/"><h2>VERLAG KARIN KESTNER</h2></Link>

                    <p>Die Website bietet eine Einführung in die Gebärdensprache. Sie ist eine Ressource für Menschen, die sich für die Kommunikation mit Gehörlosen interessieren oder selbst Gebärdensprache lernen möchten. Die Website bietet Informationen über die Grundlagen der Gebärdensprache, wie beispielsweise das Fingeralphabet und grundlegende Vokabeln. Zudem enthält sie Videos, die die korrekte Ausführung der Gebärden veranschaulichen. Die Webseite ist eine wertvolle Anlaufstelle für den Einstieg in die Gebärdensprache und fördert das Verständnis und die Inklusion gehörloser Menschen. </p>
                </div>
           
            </div>
            {/* <h3 className='BethEllenPhrase' style={{textAlign:'center'}}>You can also apply for Sign Language courses:</h3> */}

            <footer>
                <div className='socials'>
                    <a href="https://www.instagram.com/tashoklasna/">
                        <FaInstagram size={50} className='icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/annaduras/">
                        <FaLinkedin size={50} className='icon' />
                    </a>
                    <a href="https://github.com/anjaduras">
                        <FaGithub size={50} className='icon' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCuCxer1qR2BBeF99V_n3mKA">
                        <FaYoutube size={50} className='icon' />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default International;