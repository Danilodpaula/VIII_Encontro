// **Dados das seções (poderia vir de um backend futuramente)**
export const sectionsData = [
    {
      id: "apresentacao",
      title: "Apresentação",
      content:
        "O VIII Encontro de Perspectivas promove reflexões críticas sobre cidadania e democracia em tempos de crise.",
      component: () => (
        <div>
          <p>O evento tem como objetivo principal estimular o pensamento crítico sobre os desafios sociais e políticos da atualidade.</p>
        </div>
      ),
    },
    {
      id: "locais",
      title: "Locais",
      content: "O evento acontecerá em Manaus, Tefé e Parintins.",
      component: () => (
        <div>
          <ul>
            <li><strong>Manaus:</strong> Universidade X, Auditório A</li>
            <li><strong>Tefé:</strong> Centro de Convenções Y</li>
            <li><strong>Parintins:</strong> Instituto Cultural Z</li>
          </ul>
        </div>
      ),
    },
    {
      id: "submissao",
      title: "Chamada para Submissão",
      content: "Submeta seu trabalho para os Grupos de Trabalho. Prazo final: XX/XX/2025.",
      component: () => (
        <div>
          <p>Os interessados devem enviar seus resumos até o prazo estipulado. Os melhores trabalhos serão apresentados nos GTs.</p>
        </div>
      ),
    },
    {
      id: "gts",
      title: "Grupos de Trabalho",
      content: "Confira os temas dos GTs e participe.",
      component: () => (
        <div>
          <ul>
            <li>GT1 - Cidadania e Direitos Humanos</li>
            <li>GT2 - Sustentabilidade e Meio Ambiente</li>
            <li>GT3 - Educação e Cultura</li>
          </ul>
        </div>
      ),
    },
    {
      id: "galeria",
      title: "Galeria",
      content: "Fotos e vídeos das edições anteriores.",
      component: () => (
        <div>
          <p>Acesse nosso acervo de fotos e vídeos das edições passadas do Encontro de Perspectivas.</p>
        </div>
      ),
    },
    {
      id: "exposicao",
      title: "Exposição",
      content: "Instalação multimídia sobre o tema do evento.",
      component: () => (
        <div>
          <p>A exposição contará com instalações interativas abordando o impacto social e político das crises contemporâneas.</p>
        </div>
      ),
    },
    {
      id: "contatos",
      title: "Contatos",
      content: "Email: contato@evento.com | Redes Sociais: Facebook | Instagram | YouTube",
      component: () => (
        <div>
          <p><strong>Email:</strong> contato@evento.com</p>
          <p><strong>Redes Sociais:</strong></p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=sB_LlDtB27k">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      ),
    },
  ];
  