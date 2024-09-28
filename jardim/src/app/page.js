import { FaJedi } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="menuBar">
          <div className="IconNome">
            <a href="#"><FaJedi/></a>
            <a href="#">Jardim</a>                      
            </div>
          <nav>          
            <ul className="menu">
              <li><a href="#">Início</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Trabalhos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>  
        </div>        
      </header>
      
      <section className="inicio">
        <div className="TituloInicio">
          <h1>Gabriel Jardim</h1>
          <h2>Desenvolvedor Front-End</h2>  
          <div className="IconsTitulo">
            <FaGithub className="IconTitulo"/>
            <FaLinkedinIn className="IconTitulo"/>
            <MdWhatsapp className="IconTitulo"/>
          </div>
        </div>        
      </section> 

      <div className="TituloCentro">
          <div className="Titulo">
            <h1>Sobre</h1>
          </div>
      </div>

      <section className="Sobre">        
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

      <div className="TituloCentro">
          <div className="Titulo">
            <h1>Contato</h1>
          </div>
      </div>

    </div>
  );
}
