import ContactSection from "../../modules/Contacts";
import Exhibition from "../../modules/Exhibition";
import Gallery from "../../modules/Gallery";
import { Places } from "../../modules/Places";
import { Presentation } from "../../modules/Presentation"
import { Schedule } from "../../modules/Schedule";
import Workgroups from "../../modules/WorkGroup";

// **Dados das seções (poderia vir de um backend futuramente)**
export const sectionsData = [
    {
      id: "apresentacao",
      title: "",
      content:
        "",
      component: Presentation
    },
    {
      id: "locais",
      title: "",
      content: "",
      component: Places
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
      content: "Confira os temas dos GT's.",
      component: Workgroups
    },
    {
      id: "programação",
      title: "Programação",
      content: "Confira a programação do evento.",
      component: Schedule
    },
    {
      id: "galeria",
      title: "Galeria",
      content: "Fotos e vídeos das edições anteriores.",
      component: Gallery
    },
    {
      id: "exposicao",
      title: "Exposição",
      content: "Aprofunde-se nas discussões e perspectivas centrais deste evento.",
      component: Exhibition
    },
    {
      id: "contatos",
      title: "Contatos",
      content: "Confira nossa redes.",
      component: ContactSection
    },
  ];
  