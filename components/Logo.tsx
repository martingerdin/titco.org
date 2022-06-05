interface logoProps {
  size?: string,
}

export default function Logo({ size = "3rem" }:logoProps) {
  const style = {
    fontSize: `${size}`,
    fontWeight: 900,
  }
  return (
    <p className={`title`} style={style}>TITCO</p>
  )
}
