import Image from "next/image"
import Link from "next/link";

type LogoProps = {
  width: number
  height: number
}

export function Logo({ width, height }: LogoProps) {
  return (
    <div>
      <Link href="/" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <Image src={"/images/kmdev-logo.svg"} width={width} height={height} alt="kmDev logo" />
      </Link>
    </div>
  )
}
