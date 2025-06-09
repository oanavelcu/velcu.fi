import Image from 'next/image'
import { componentStyles } from '@/styles/design-tokens'

interface HeroImageProps {
  src: string
  alt: string
  objectPosition?: string
}

export default function HeroImage({ src, alt, objectPosition }: HeroImageProps) {
  return (
    <div className={componentStyles.heroImage.wrapper}>
      <Image
        className={componentStyles.heroImage.image}
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  )
}