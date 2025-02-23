import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div<{
  $height: number | "auto";
  $shouldAnimate: boolean;
}>`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  height: ${({ $height }) => ($height === "auto" ? "auto" : `${$height}px`)};
`;

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
};

export function AnimatedSection({ isOpen, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measuredHeight = el.scrollHeight;

    if (isOpen) {
      // Abrindo: definimos um valor fixo antes de mudar para 'auto'
      setShouldAnimate(true);
      setHeight(measuredHeight);
    } else {
      // Fechando: travamos a altura e depois a reduzimos para 0 com um pequeno delay
      if (height === "auto") {
        setHeight(measuredHeight);
        requestAnimationFrame(() => {
          setShouldAnimate(true);
          setTimeout(() => setHeight(0), 100); // Pequeno delay para ativar a transição
        });
      } else {
        setShouldAnimate(true);
        setTimeout(() => setHeight(0), 100);
      }
    }
  }, [isOpen]);

  // Quando a transição termina, ajustamos a altura corretamente
  const handleTransitionEnd = () => {
    if (isOpen) {
      setShouldAnimate(false);
      setHeight("auto"); // Permite que o conteúdo expanda dinamicamente
    } else {
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
