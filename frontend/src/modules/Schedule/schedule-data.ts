// schedule-data.ts (exemplo)

export interface IEvent {
    time: string;
    title: string;
    location?: string;      // opcional
    description?: string;   // opcional
    highlight?: string;     // opcional
    speakers?: string[];    // opcional
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
          date: "28/11",
          day: "Terça-feira",
          events: [
            {
              time: "08:30 - 09:00",
              title: "Credenciamento",
              location: "Auditório ENS/UEA",
            },
            {
              time: "09:00",
              title: "Solenidade de abertura do Evento",
            },
            {
              time: "09:30",
              title: "Mesa de Abertura: Povos Originários e Negritude em Perspectiva no Amazonas",
              speakers: [
                "Eliésio Marubo - Advogado e Assessor Jurídico da UNIVAJA",
                "Luciana Santos - Ma. em Direito Constitucional e integrante do Grupo de Pesquisa Direito e Realidade Brasileira (UFU)",
              ],
              highlight:
                "Mediação: Dra. Gimima Silva – Observatório da Cidadania e Relações de Poder - PPGICH/UEA",
            },
            {
              time: "11:30",
              title: "Abertura da Exposição: 'O Brasil em Perspectiva – 10 anos de memória de uma 'Democracia Imperfeita'",
              speakers: [
                "Dra. Gimima Silva e Dr. Otávio Rios (Observatório da Cidadania e Relações de Poder - PPGICH/UEA)",
              ],
            },
            {
              time: "12:00",
              title: "Almoço",
            },
            {
              time: "14:00",
              title: "Mesa 1 - Cultura, Cidadania e Relações de Poder",
              location: "ENS/UEA",
              speakers: [
                "Dr. Djalma Thürler (UFBA) - Grupo Teatral Atelier Voador",
                "Dra. Kênia Gonçalves Costa (UFNT)",
                "Dra. Lúcia Puga (PPGICH/UEA)",
                "Michele Andrews (Coordenadora do Escritório Estadual do MINC no Amazonas)",
              ],
              highlight:
                "Mediação: Dr. Otávio Rios – Observatório da Cidadania e Relações de Poder - PPGICH/UEA",
            },
            {
              time: "16:00",
              title: "Café com Conversa",
            },
            {
              time: "16:15",
              title: "Mesa 2 – Protagonismo Negro e Letramento Racial: dimensões culturais e políticas",
              location: "ENS/UEA",
              speakers: [
                "Keilah Maria da Silva Fonseca (Associação Crioulas do Quilombo Urbano do Barranco de São Benedito)",
                "Ma. Bárbara Barboza (OXFAM-Brasil)",
                "Profa. Dra. Rosa Elizabeth Acevedo Marin (NAEA/UFPA)",
                "Ma. Cristiane Sobral Correa Jesus (MINC)",
                "Prof. Dr. Reginaldo Conceição da Silva (Núcleo de Cartografia Social da Amazônia/UEA)",
              ],
              highlight:
                "Mediação: Edicleuza Costa Ribeiro – Mestranda PPGICH/UEA",
            },
            {
              time: "18:15 - 19:00",
              title: "Atividade Cultural – Performance: Abayomis a resistência da mulher preta",
              location: "ENS/UEA",
              speakers: ["Atriz convidada: Karen Kristine"],
            },
          ],
        },
        // Você pode adicionar mais dias para Manaus aqui...
      ],
    },
    {
      city: "Tefé",
      dates: [
        {
          date: "29/11",
          day: "Quarta-feira",
          events: [
            {
              time: "09:00",
              title: "GT Tefé",
              location: "Sala 06 CEST/UEA",
              description: "GT 7 – Práticas e experiências educacionais em contextos amazônicos",
            },
            {
              time: "15:00",
              title: "Oficina: Produção Audiovisual",
              location: "Sala 16 CEST/UEA",
              speakers: ["Esp. George da Silva - Mestrando PPGICH/UEA"],
            },
            {
              time: "16:00",
              title: "Programação Cultural e Coffee Break",
              description: "Apresentação de Música (MPB, MPA e Rock)",
            },
          ],
        },
        {
          date: "30/11",
          day: "Quinta-feira",
          events: [
            {
              time: "15:00",
              title: "Palestra: A imaginação criadora de Gaston Bachelard",
              location: "Sala 16 CEST/UEA",
              speakers: ["Prof. Dr. Yomarley Holanda – Subcoordenador PPGICH/UEA"],
              highlight: "Mediação: Rodolfo Santos Nunes – Mestrando PPGICH/UEA",
            },
          ],
        },
        // Outros dias para Tefé...
      ],
    },
    {
      city: "Parintins",
      dates: [
        {
          date: "01/12",
          day: "Sexta-feira",
          events: [
            {
              time: "15:00",
              title: "Palestra: A imaginação criadora de Gaston Bachelard",
              location: "Sala 16 CEST/UEA",
              speakers: ["Prof. Dr. Yomarley Holanda – Subcoordenador PPGICH/UEA"],
              highlight: "Mediação: Rodolfo Santos Nunes – Mestrando PPGICH/UEA",
            },
          ],
        },
        // Outros dias para Parintins...
      ],
    },
  ];
  