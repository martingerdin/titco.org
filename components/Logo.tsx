import styled from "styled-components";

const LogoStyled = styled.div`
    font-weight: 900;
`;

interface logoProps {
  size?: string,
}

export default function Logo({ size = "3" }:logoProps) {
  return (
    <LogoStyled className={`title is-${size}`}>TITCO</LogoStyled>
  )
}
