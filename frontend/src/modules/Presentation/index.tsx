import {
  Container,
  ImagesWrapper,
  PresentationContent,
  PresentationImg,
  PresentationText,
  SubTitleText,
  TitleContent,
  TitleWrapper,
  WrapperAll,
} from "./styles";

import presentation from "../../assets/presentationimg.png";

export function Presentation() {
  return (
    <Container id="apresentacao">
      <WrapperAll>
        <TitleWrapper>
          <TitleContent>VIII Encontro de Perspectivas</TitleContent>

          <SubTitleText>
            <p>
              <strong>Reflexões sobre cidadania em tempos de crise.</strong>
              {""}
              <br />
              Uma jornada imersiva para entender os desafios e perspectivas do
              mundo contemporâneo.
            </p>
          </SubTitleText>
        </TitleWrapper>
        <PresentationContent>
          <PresentationText>
            <p>
              A oitava edição do <strong>Encontro de Perspectivas</strong>{" "}
              mantém sua missão de incentivar o pensamento crítico sobre
              cidadania e democracia, desta vez com um olhar voltado à{" "}
              <strong>
                emergência climática e seus impactos sociais e políticos
              </strong>
              .
            </p>

            <p>
              Sob o tema{" "}
              <strong>“Experienciar a Cidadania numa Terra em Transe”</strong>,
              o evento propõe uma análise profunda sobre as transformações que
              moldam nossa sociedade, inspirada na icônica obra de Glauber
              Rocha.
            </p>

            <p>
              Abrangendo atividades nos municípios de{" "}
              <strong>Manaus, Tefé e Parintins, no Estado do Amazonas</strong>,
              o evento tem como objetivo fomentar debates interdisciplinares
              sobre os desafios e transformações sociais, políticas e culturais
              da contemporaneidade, explorando a noção de "Terra em Transe" como
              um eixo reflexivo acerca dos efeitos dos eventos climáticos
              extremos.
            </p>

            <p>
              A programação incluirá{" "}
              <strong>
                palestras, mesas-redondas, fórum do Observatório da Cidadania e
                Relações de Poder, exposição com linguagem multimodal,
                apresentações de pesquisas em GTs e atividades culturais
              </strong>
              , promovendo um espaço de intercâmbio acadêmico e fortalecimento
              da produção de conhecimento crítico.
            </p>

            <p>
              Ao longo de quatro dias, especialistas, pesquisadores e cidadãos
              engajados se reunirão para{" "}
              <strong>
                debater soluções, compartilhar experiências e traçar novos
                caminhos para um futuro mais sustentável e igualitário
              </strong>
              , pois também acreditamos, assim como VELOSO, que
              <strong> “Gente é pra brilhar e não pra morrer de fome”</strong>.
            </p>
          </PresentationText>

          <ImagesWrapper>
            <PresentationImg src={presentation} />
            <PresentationImg src={presentation} />
          </ImagesWrapper>
        </PresentationContent>
      </WrapperAll>
    </Container>
  );
}
