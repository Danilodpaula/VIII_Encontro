import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{
  $height: number | "auto";
  $shouldAnimate: boolean;
}>`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${({ $height }) =>
    $height === "auto" ? "auto" : `${$height}px`};

  /* Se quiser animar opacidade junto, use algo como:
     transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
     e mude a lógica para setar opacity 1 ou 0 no open/close.
  */
`;

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function AnimatedSection({ isOpen, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // Armazena a "altura atual" (pode ser número ou 'auto')
  const [height, setHeight] = useState<number | "auto">(0);

  // Controla se devemos ou não fazer a transição (impede salto quando fixamos 'auto')
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measuredHeight = el.scrollHeight;

    if (isOpen) {
      // Abrindo: setamos altura numérica pra animar
      setShouldAnimate(true);
      setHeight(measuredHeight);
    } else {
      // Fechando
      // Se estava em 'auto', precisamos travar em measuredHeight primeiro
      // para então animar para 0
      if (height === "auto") {
        setHeight(measuredHeight);
        // Forçamos a mudança pro 0 no próximo frame, disparando a transição
        requestAnimationFrame(() => {
          setShouldAnimate(true);
          setHeight(0);
        });
      } else {
        // Se já era número, apenas definimos pra 0
        setShouldAnimate(true);
        setHeight(0);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Quando a transição termina:
  const handleTransitionEnd = () => {
    if (isOpen) {
      // Depois de abrir totalmente, deixamos em 'auto'
      // para que o conteúdo se ajuste se crescer/diminuir
      setShouldAnimate(false);
      setHeight("auto");
    } else {
      // Depois de fechar, podemos deixar 0 fixo
      // ou manter 0 sem problemas — já está fechado.
      setShouldAnimate(false);
    }
  };

  return (
    <Container
      $height={height}
      $shouldAnimate={shouldAnimate}
      onTransitionEnd={handleTransitionEnd}
    >
      <div ref={ref}>{children}</div>
    </Container>
  );
}
