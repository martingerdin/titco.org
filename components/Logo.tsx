import styled from "styled-components";

interface logoProps {
  size?: string,
}

export default function Logo({ size = "3" }:logoProps) {
  return (
    <p className={`title is-${size}`} style={{fontWeight: 900}}>TITCO</p>
  )
}
