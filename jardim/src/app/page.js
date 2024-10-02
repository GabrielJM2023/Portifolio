"use client"

import { useEffect } from "react";
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
import { RxHamburgerMenu } from "react-icons/rx";

import Carrosel from "../Components/Carrossel";

export default function Home() {
  useEffect(() => {
    const menu = document.querySelector('.menuMobile');
    const navList = document.querySelector('.menu');
    const activeClass = "active";

    function handleClick() {
      navList.classList.toggle(activeClass);
    }
  
    if (menu) {
      menu.addEventListener('click', handleClick);
    }
      
    const icons = document.querySelectorAll('.AreaIcon');
    const texts = document.querySelectorAll('.Text');

    icons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        texts.forEach(text => {
          text.style.display = 'none'; 
        });

        const textToShow = document.querySelector(`.Text${icon.classList[1]}`);
        if (textToShow) {
          textToShow.style.display = 'block'; 
        }
      });

      icon.addEventListener('mouseout', () => {
        texts.forEach(text => {
          text.style.display = 'none'; 
        });        
      });
    });

    return () => {
      icons.forEach(icon => {
        icon.removeEventListener('mouseover', () => {});
        icon.removeEventListener('mouseout', () => {});
      });

      if (menu) {
        menu.removeEventListener('click', handleClick);
      };
    };
  }, []);

  return (
    <div className="home">
      <header className="header">
        <nav className="menuBar">  
          <div className="IconNome">
            <h1 href="#">G. Jardim</h1>
          </div>
        
          <div className="Responsivo menuResponsivo">
            <RxHamburgerMenu className="menuMobile"/>
          </div>        
         
          <ul className="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#trabalho">Trabalhos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>          
      </header>
      
      <section className="inicio">
        <div className="TituloInicio">
          <h1 id="home">Gabriel Jardim</h1>
          <h2>Desenvolvedor Front-End</h2>  
          <div className="IconsTitulo">
            <a href="https://github.com/GabrielJM2023" target="_blank" rel="noopener noreferrer">
              <FaGithub className="IconTitulo" />
            </a>

            <a href="https://www.linkedin.com/in/gabriel-jardim-machado/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="IconTitulo"/>
            </a>
            <a href="https://wa.me/5566999421158" target="_blank" rel="noopener noreferrer">
              <MdWhatsapp className="IconTitulo"/>
            </a>
          </div>
        </div>        
      </section> 

      <div className="TituloCentro" id="sobre">
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
        <div className="Titulo" id="habilidades">
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
            <div className="AreaIcon Javascript">
              <IoLogoJavascript className="Icon"/>
            </div>                        
            <div className="AreaIcon Typescript">
              <SiTypescript className="Icon"/>              
            </div>          
            <div className="AreaIcon Node">
              <FaNodeJs className="Icon"/>              
            </div>          
            <div className="AreaIcon HTML">
              <FaHtml5 className="Icon"/>              
            </div>          
            <div className="AreaIcon CSS">
              <FaCss3Alt className="Icon"/>              
            </div>          
            <div className="AreaIcon DataBase">
              <FaDatabase className="Icon"/>              
            </div>          
            <div className="AreaIcon Git">
              <FaGithub className="Icon"/>              
            </div>          
            <div className="AreaIcon Scrum">
              <DiScrum className="Icon"/>  
            </div>                    
          </div>        
        </div>
        <div className="LadoDireito">
          <div className="AreaTexto">
            <div className="Text TextDelphi"> 
              <div className="TituloHabilidade">
                <h1 className="TextDelphi">
                  Delphi
                </h1>
              </div> 
              <h3 className="Descricao">
                Trabalho com Delphi há bastante tempo. Tenho experiência em manipulação de JSON, especialmente para integrações e autenticação via API. Estou acostumado a trabalhar com diversos componentes, como TUniQuery, TJvMemoryData, TMS FNC Widget Progress, TRestRequest, TRestResponse, TRestClient, TIdHTTP. Recentemente, realizei integrações com APIs, como as do Santander e Sicredi, para criação de pagamentos e recebimentos via PIX e também estou familiarizado com o uso de certificados digitais (arquivos PEM e KEY) para autenticações seguras.                
              </h3>
            </div>

            <div className="Text TextReact"> 
              <div className="TituloHabilidade">
                <h1 className="TextReact">
                  React
                </h1>
              </div> 
              <div>
                <h3 className="Descricao">
                  Tenho trabalhado em projetos com React. Já desenvolvi Progressive Web Apps (PWA) para criar aplicações modernas e responsivas. Já adquiri um bom entendimento sobre componentes e gerenciamento de estado em React e continuo estudando e me aprimorando na tecnologia para melhorar minhas habilidades.
                </h3>
              </div>
            </div>

            <div className="Text TextJavascript"> 
              <div className="TituloHabilidade">
                <h1 className="TextJavasScript">
                  JavasScript
                </h1>
              </div> 
              <h3 className="Descricao">
                Como JavaScript é a base do React, já tenho uma boa familiaridade com a linguagem. Sei como manipular o DOM, trabalhar com eventos e realizar requisições assíncronas usando Promises e Async/Await, o que é essencial para lidar com APIs e dados dinâmicos nos meus projetos.
              </h3>
            </div>

            <div className="Text TextTypescript"> 
              <div className="TituloHabilidade">
                <h1 className="TextTypescript">
                  TypeScript
                </h1>
              </div> 
              <h3 className="Descricao">
                Ainda estou me aprofundando em TypeScript, mas entendo que ele é um ótimo complemento ao JavaScript, especialmente em projetos maiores e mais complexos. Gosto da ideia de adicionar tipagem estática ao código, já que isso traz mais segurança e previsibilidade no desenvolvimento.  
              </h3>
            </div>

            <div className="Text TextHTML"> 
              <div className="TituloHabilidade">
                <h1 className="TextHTML">
                  HTML 
                </h1>
              </div> 
              <h3 className="Descricao">
                Utilizo HTML para construir as estruturas das páginas nos meus projetos, especialmente em React. Tenho noção de como aplicar boas práticas de SEO e acessibilidade, que são importantes para garantir que as aplicações sejam encontradas e acessíveis para todos os usuários.
              </h3>
            </div>

            <div className="Text TextCSS"> 
              <div className="TituloHabilidade">
                <h1 className="TextCSS">
                  CSS  
                </h1>
              </div> 
              <h3 className="Descricao">
                No quesito estilização, uso CSS para dar vida aos meus componentes em React, seja com CSS puro, frameworks como Bootstrap ou até CSS-in-JS. Também estou atento à criação de layouts responsivos, para garantir que minhas aplicações se adaptem a diferentes dispositivos e tamanhos de tela, especialmente em PWAs.
              </h3>
            </div>

            <div className="Text TextDataBase"> 
              <div className="TituloHabilidade">
                <h1 className="TextDataBase">
                  Banco de Dados  
                </h1>
              </div> 
              <h3 className="Descricao">
                Tenho experiência em trabalhar com bancos de dados, especialmente na criação e manipulação de tabelas, consultas e relacionamentos. Estou familiarizado com conceitos de modelagem de dados, normalização e otimização de consultas, o que me ajuda a garantir a eficiência nas operações com dados.
              </h3>
            </div>

            <div className="Text TextNode"> 
              <div className="TituloHabilidade">
                <h1 className="TextNode">
                  Nodejs
                </h1>
              </div> 
              <h3 className="Descricao">
                Estou começando a me aprofundar em Node.js e reconheço sua importância para o desenvolvimento de aplicações web. Estou aprendendo sobre como utilizar o Node.js para criar servidores e APIs, além de trabalhar com pacotes do npm para gerenciar dependências. Compreendo o conceito de execução assíncrona no Node.js e a importância de eventos e callbacks para a construção de aplicações responsivas e eficientes.
              </h3>
            </div>

            <div className="Text TextGit"> 
              <div className="TituloHabilidade">
                <h1 className="TextGit">
                  Git  
                </h1>
              </div> 
              <h3 className="Descricao">
                Utilizo o Git como meu sistema de controle de versão, o que me permite gerenciar alterações no meu código de forma eficaz. Tenho experiência em criar repositórios, fazer commits, branches e merges, e utilizo comandos básicos como git clone, git pull, git push, entre outros. Além disso, compreendo a importância do Git para a colaboração em equipe e para o gerenciamento de versões de projetos.
              </h3>
            </div>

            <div className="Text TextScrum"> 
              <div className="TituloHabilidade">
                <h1 className="TextScrum">
                  Scrum
                </h1>
              </div> 
              <h3 className="Descricao">
                Estou familiarizado com a metodologia Scrum, que utilizo para gerenciar projetos de desenvolvimento. Entendo os papéis de Scrum Master, Product Owner e a equipe de desenvolvimento, além de como funcionam as sprints, reuniões diárias (stand-ups) e revisões de sprint. A metodologia Scrum me ajuda a manter o foco nas prioridades do projeto e a promover uma comunicação eficaz dentro da equipe, resultando em entregas contínuas e melhoria contínua.
              </h3>
            </div>
          </div>
        </div>      
      </section>

      <div className="TituloCentro" id="trabalho">
        <div className="Titulo">
          <h1>Trabalhos</h1>
        </div>
      </div>

      <section className="Trabalho">
        <div className="Carrosel">       
          <Carrosel/>
        </div>
      </section>

      <div className="TituloCentro" id='contato'>
        <div className="Titulo">
          <h1>Contato</h1>
        </div>
      </div>

      <section className="Contato">
        <div className="AreaContato">
          <div className="InfoContato">
            <h1>Localização</h1>
            <h4>Butanã, São Paulo</h4>
          </div>
          <div className="InfoContato">
            <h1>Email</h1>
            <h3>jardimgabriel2022@gmail.com</h3>
          </div>
          <div className="InfoContato">
            <h1>Celular</h1>
            <h3>(66) 9 9942-1158</h3>
          </div>
        </div>
      </section>

    </div>
  );
}
