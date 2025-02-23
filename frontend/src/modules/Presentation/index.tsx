import { BulletList, Container, Highlight, SectionTitle, TextBlock } from "./styles";

export function Presentation() {
  return (
    <Container>
      <SectionTitle>VIII Encontro de Perspectivas</SectionTitle>

      <Highlight>
        <p>
          <strong>Reflexões sobre cidadania em tempos de crise.</strong>
          {""}
          <br />
          Uma jornada imersiva para entender os desafios e perspectivas do mundo
          contemporâneo.
        </p>
      </Highlight>

      <TextBlock>
        <p>
          A oitava edição do <strong>Encontro de Perspectivas</strong> mantém
          sua missão de incentivar o pensamento crítico sobre cidadania e
          democracia, desta vez com um olhar voltado à <strong>emergência climática e
          seus impactos sociais e políticos</strong>.
        </p>

        <p>
          Sob o tema{" "}
          <strong>“Experienciar a Cidadania numa Terra em Transe”</strong>, o
          evento propõe uma análise profunda sobre as transformações que moldam
          nossa sociedade, inspirada na icônica obra de Glauber Rocha.
        </p>

        <p>
          Ao longo de quatro dias, especialistas, pesquisadores e cidadãos
          engajados se reunirão para{" "}
          <strong>
            debater soluções, compartilhar experiências e traçar novos caminhos
            para um futuro mais sustentável e igualitário
          </strong>
          .
        </p>
      </TextBlock>

      <TextBlock>
        <h3>Temas abordados:</h3>
        <BulletList>
          <li>🟢 Direitos humanos e justiça social</li>
          <li>🌱 Sustentabilidade e meio ambiente</li>
          <li>📢 Participação política e engajamento cívico</li>
          <li>🎭 Identidade cultural e diversidade</li>
        </BulletList>
      </TextBlock>

      <TextBlock>
        <p>
          O evento contará com{" "}
          <strong>
            mesas redondas, minicursos, exibições culturais e debates
            interdisciplinares
          </strong>
          , oferecendo um espaço único para aprendizado e networking.
        </p>
        <p>
          <strong>📅 Data:</strong> 10 a 13 de junho de 2025
        </p>
        <p>
          <strong>📍 Local:</strong> Manaus, Tefé e Parintins
        </p>
      </TextBlock>
    </Container>
  );
}
