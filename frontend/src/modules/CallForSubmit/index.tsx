import { 
  ChamadaContainer, 
  Title, 
  Description, 
  DownloadButton 
} from "./styles";

// Ajuste o caminho real do arquivo PDF
import ChamadaPDF from "../../assets/1ª CIRCULAR 2025 VIII Encontro Perspetivas_23_fev_25.pdf";

export default function ChamadaSubmissao() {
  return (
    <ChamadaContainer>
      <Title>
        Chamada de Submissão de Resumos para Comunicações
      </Title>

      <Description>
        Baixe o arquivo em PDF e confira todas as informações sobre as normas 
        e prazos de submissão, bem como detalhes sobre a organização do 
        VIII Encontro de Perspectivas 2025.
      </Description>

      <DownloadButton 
        href={ChamadaPDF} 
        target="_blank" 
        rel="noopener noreferrer"
        download
      >
        Baixar PDF
      </DownloadButton>
    </ChamadaContainer>
  );
}
