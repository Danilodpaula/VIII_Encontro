  export interface IEvent {
    time: string;
    title: string;
    location?: string;      // Local do evento (opcional)
    description?: string;   // Descrição extra (opcional)
    highlight?: string;     // Destaques do evento (opcional)
    speakers?: string[];    // Lista de palestrantes (opcional)
  }
  
  export interface IDay {
    date: string;
    day: string;
    events: IEvent[];
  }
  
  export interface ICity {
    city: string;
    dates: IDay[];
  }
  
  export const SCHEDULE_DATA: ICity[] = [
    {
      city: "Manaus",
      dates: [
        {
          date: "10/06",
          day: "Segunda-feira",
          events: [
            { time: "08:00 - 12:00", title: "Recepção e Credenciamento", location: "CCPA" },
            { time: "09:00", title: "Solenidade de abertura do VIII Encontro de Perspectivas", location: "CCPA" },
            { time: "09:00", title: "Abertura da Instalação 'Experienciar a cidadania numa Terra em Transe'", location: "CCPA" },
            { time: "10:00", title: "Mesa 1 – Cidadania e Emergência Climática", location: "CCPA" },
            { time: "12:00", title: "Almoço" },
            { time: "14:30", title: "Mesa 2 – Não! não escute o negacionismo científico", location: "CCPA" },
            { time: "17:00", title: "Café com Conversa", location: "CCPA" },
            { time: "17:20", title: "Atividade Cultural 1", location: "CCPA" },
            { time: "18:00", title: "Encerramento", location: "CCPA" },
          ],
        },
        {
          date: "11/06",
          day: "Terça-feira",
          events: [
            { time: "09:00 - 17:00", title: "Visitação à Instalação 'Experienciar a cidadania numa Terra em Transe'", location: "CCPA" },
            { time: "09:00 - 12:00", title: "Atividade de Campo - Visita guiada ao Museu da Amazônia (MUSA)", location: "MUSA" },
            { time: "09:00 - 12:00", title: "GTs – Apresentação de Comunicações em Grupos de Trabalho", location: "CCPA/CEST/CESP" },
            { time: "12:00", title: "Almoço" },
            { time: "14:30", title: "Mesa 3 – Dimensões socioeconômicas e políticas das mudanças climáticas", location: "CCPA" },
            { time: "17:00", title: "Café com Conversa", location: "CCPA" },
            { time: "17:20", title: "Atividade Cultural 2", location: "CCPA" },
            { time: "18:00", title: "Encerramento", location: "CCPA" },
          ],
        },
        {
          date: "12/06",
          day: "Quarta-feira",
          events: [
            { time: "09:00 - 17:00", title: "Visitação à Instalação 'Experienciar a cidadania numa Terra em Transe'", location: "CCPA" },
            { time: "09:00 - 12:00", title: "GTs – Apresentação de Comunicações em Grupos de Trabalho", location: "CCPA/CEST/CESP" },
            { time: "09:00 - 11:30", title: "Portas Abertas: o futuro na UEA", location: "CCPA/ENS" },
            { time: "12:00", title: "Almoço" },
            { time: "14:00 - 17:00", title: "Minicursos", location: "A definir" },
            { time: "14:00", title: "Cine Debate - Projeção do filme 'Terra em Transe'", location: "Casarão de Ideias" },
            { time: "15:50", title: "Café com Conversa", location: "Casarão de Ideias" },
            { time: "16:10", title: "Mesa 4 - Análise de Terra em Transe pelas lentes do Brasil contemporâneo", location: "Casarão de Ideias" },
            { time: "18:00", title: "Atividade Cultural 3", location: "Casarão de Ideias" },
            { time: "18:30", title: "Encerramento", location: "Casarão de Ideias" },
          ],
        },
        {
          date: "13/06",
          day: "Quinta-feira",
          events: [
            { time: "09:00 - 17:00", title: "Visitação à Instalação 'Experienciar a cidadania numa Terra em Transe'", location: "CCPA" },
            { time: "09:00 - 12:00", title: "GTs – Apresentação de Comunicações em Grupos de Trabalho", location: "CCPA/CEST/CESP" },
            { time: "12:00", title: "Almoço" },
            { time: "14:00 - 16:30", title: "Fórum do Observatório da Cidadania e Relações de Poder: 'Emergência Climática e a cidadania em Transe de Norte a Sul'", location: "CCPA" },
            { time: "16:30", title: "Café com Conversa", location: "CCPA" },
            { time: "16:50", title: "Lançamento de Livros", location: "CCPA" },
            { time: "17:50", title: "Premiação dos melhores Trabalhos em GT’s", location: "CCPA" },
            { time: "18:20", title: "Atividade Cultural 4", location: "CCPA" },
            { time: "19:00", title: "Encerramento", location: "CCPA" },
          ],
        },
      ],
    },
  ];
  