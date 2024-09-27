
export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="menuBar">
          <a href="#">Gabriel Jardim</a>                      
          <nav>          
            <ul className="menu">
              <li><a href="#">Sobre</a></li>
              <li><a href="#">Trabalhos</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>  
        </div>
      </header> 
      <section className="inicio">
        <div className="TituloInicio">
          <h1>Gabriel</h1>
          <h1>Jardim</h1>  
          <h4>Um pouco sobre mim e minha carreira</h4>            
        </div>        
      </section> 

      <div className="TituloCentro">
          <div className="Titulo">
            <h1>Sobre</h1>
            <div className="Linha">

            </div>
          </div>
      </div>

      <section className="Sobre">
        
        <div className="ImagemSobre">          
        </div>
        <div className="AreaSobre">
          <h5>Gabriel Jardim</h5>
          <h1>Desenvolvedor Front-End</h1>
          <h3>Sou desenvolvedor de software com foco em soluções robustas e integrações de APIs, especialmente em Delphi e React. Minha jornada começou no ensino médio integrado e evoluiu para o tecnólogo em Análise e Desenvolvimento de Sistemas. Com experiência em desenvolvimento back-end e front-end, já atuei em projetos de integração com APIs, como Sicredi e Santander, para automação de pagamentos via PIX. Além disso, estou sempre buscando novas tecnologias e aprimoramento constante.</h3>
        </div>
      </section>      
    </div>
  );
}
