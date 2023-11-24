import styled from "styled-components";
export function BtnCircular({
  icono,
  width,
  height,
  bgcolor,
  textcolor,
  fontsize,
  translatex,
  translatey,
}) {
  return (
    <Container
      $bgcolor={bgcolor}
      $textcolor={textcolor}
      height={height}
      width={width}
      $fontsize={fontsize}
      $translatex={translatex}
      $translatey={translatey}
    >
      <span>{icono}</span>
    </Container>
  );
}
const Container = styled.div`
  background: ${(props) => props.$bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateX(${(props) => props.$translatex})
    translateY(${(props) => props.$translatey});

  span {
    font-size: ${(props) => props.$fontsize};
    text-align: center;
    color: ${(props) => props.$textcolor};
  }
`;
