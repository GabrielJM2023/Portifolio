import { FaJedi } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { SiDelphi } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { DiScrum } from "react-icons/di";

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="menuBar">
          <div className="IconNome">
            <a href="#"><FaJedi/></a>
            <a href="#">G. Jardim</a>
            </div>
          <nav>          
            <ul className="menu">
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#">Trabalhos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>  
        </div>
      </header>
      
      <section className="inicio" >
        <div className="TituloInicio">
          <h1 id="home">Gabriel Jardim</h1>
          <h2>Desenvolvedor Front-End</h2>  
          <div className="IconsTitulo">
            <FaGithub className="IconTitulo"/>
            <FaLinkedinIn className="IconTitulo"/>
            <MdWhatsapp className="IconTitulo"/>
          </div>
        </div>        
      </section> 

      <div className="TituloCentro" id="sobre">
          <div className="Titulo">
            <h1>Sobre</h1>
          </div>
      </div>

      <section className="Sobre" >
        <div className="ImagemSobre">
          <img src='https://github.com/GabrielJM2023.png' className='Avatar'/>
        </div>
        <div className="AreaSobre">
          <h5>Gabriel Jardim</h5>
          <h1>Desenvolvedor Front-End</h1>
          <h3>Com mais de 2 anos de experiência em desenvolvimento em Delphi, estou direcionando minha carreira para o front-end, onde aplico tecnologias modernas para criar experiências de usuário envolventes.</h3>
          <h3>Atualmente, estou me especializando em React, desenvolvendo aplicações interativas e escaláveis com integração a APIs. Tenho experiência na implementação de design responsivo e otimização de desempenho, sempre visando oferecer interfaces atraentes e funcionais.</h3>
        </div>
      </section>   

      <div className="TituloCentro" id="habilidades">
          <div className="Titulo">
            <h1>Habilidades</h1>
          </div>          
      </div>

      <section className="Habilidades">
        <div className="LadoEsquerdo">   
          <div className="ContainerIcon">          
            <div className="AreaIcon Delphi">
              <SiDelphi className="Icon"/>
            </div>  
            
            <div className="AreaIcon React">
              <FaReact className="Icon"/>
            </div>            
            <div className="AreaIcon">
              <IoLogoJavascript className="Icon"/>
            </div>                        
            <div className="AreaIcon">
              <SiTypescript className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <FaNodeJs className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <FaHtml5 className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <FaCss3Alt className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <FaDatabase className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <FaGithub className="Icon"/>              
            </div>          
            <div className="AreaIcon">
              <DiScrum className="Icon"/>  
            </div>                    
          </div>        
        </div>
        <div className="LadoDireito">
          <div className="AreaTexto">
            <h1 className="DefaultText">Teste</h1>
            <h1 className="Text TextDelphi">Dlephi</h1> 
            <h1 className="Text TextReact">Reac</h1> 
          </div>
        </div>      
      </section>


      <div className="TituloCentro">
          <div className="Titulo">
            <h1>Trabalhos</h1>
          </div>
      </div>

      <div className="TituloCentro">
          <div className="Titulo">
            <h1>Contato</h1>
          </div>
      </div>

    </div>
  );
}
