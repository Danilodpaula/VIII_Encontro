import { FaLandmark, FaUniversity } from "react-icons/fa";
import teatro from "../../assets/teatro_amazonas.jpg";

export const locations = [
    {
      id: 1,
      city: "Manaus",
      icon: <FaUniversity />, 
      location: "Universidade X, Auditório A",
      description: "Abertura oficial com mesas temáticas e minicursos.",
      stream: "🎥 Transmissão online disponível.",
      mapLink: "https://www.google.com/maps?q=Universidade+X+Manaus",
      image: teatro,
    },
    {
      id: 2,
      city: "Tefé",
      icon: <FaLandmark />, 
      location: "Centro de Convenções Y",
      description: "Atividades acadêmicas e científicas, apresentação de trabalhos e debates interativos.",
      mapLink: "https://www.google.com/maps?q=Centro+de+Convenções+Y+Tefé",
      image: teatro,
    },
    {
      id: 3,
      city: "Parintins",
      icon: <FaLandmark />, 
      location: "Instituto Cultural Z",
      description: "Grupos de trabalho e apresentações culturais no encerramento do evento.",
      mapLink: "https://www.google.com/maps?q=Instituto+Cultural+Z+Parintins",
      image: teatro,
    },
  ];