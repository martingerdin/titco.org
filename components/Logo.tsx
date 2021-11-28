interface logoProps {
  size?: string,
}

export default function Logo({ size = "3rem" }:logoProps) {
  return (
    <p className={`title`} style={{fontSize: `${size}`, fontWeight: 900}}>TITCO</p>
  )
}
