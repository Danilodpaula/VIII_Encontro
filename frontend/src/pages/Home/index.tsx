import * as S from "./styles";

// Importa cada seção separada ou tudo no mesmo arquivo.
// Aqui vou mostrar tudo no mesmo arquivo para simplificar.

function Home() {
  return (
    <S.HomeContainer>
      <section id="apresentacao">
        <h2>Apresentação</h2>
        <p>
          O VIII Encontro de Perspectivas promove reflexões críticas sobre
          cidadania e democracia em tempos de crise.
        </p>
      </section>
      
      <section id="locais">
        <h2>Locais</h2>
        <p>O evento acontecerá em Manaus, Tefé e Parintins.</p>
      </section>

      <section id="submissao">
        <h2>Chamada para Submissão</h2>
        <p>Submeta seu trabalho para os Grupos de Trabalho. Prazo final: XX/XX/2025.</p>
      </section>

      <section id="gts">
        <h2>Grupos de Trabalho</h2>
        <p>Confira os temas dos GTs e participe.</p>
      </section>

      <section id="galeria">
        <h2>Galeria</h2>
        <p>Fotos e vídeos das edições anteriores.</p>
      </section>

      <section id="exposicao">
        <h2>Exposição</h2>
        <p>Instalação multimídia sobre o tema do evento.</p>
      </section>

      <section id="contatos">
        <h2>Contatos</h2>
        <p>Email: contato@evento.com</p>
        <p>Redes Sociais: Facebook | Instagram | YouTube</p>
      </section>
    </S.HomeContainer>
  );
}

export default Home;
