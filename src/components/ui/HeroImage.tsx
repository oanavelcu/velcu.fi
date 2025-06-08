import { componentStyles } from '@/styles/design-tokens'

interface HeroImageProps {
  src: string
  alt: string
  objectPosition?: string
}

export default function HeroImage({ src, alt, objectPosition }: HeroImageProps) {
  return (
    <div className={componentStyles.heroImage.wrapper}>
      <img
        className={componentStyles.heroImage.image}
        src={src}
        alt={alt}
        style={objectPosition ? { objectPosition } : undefined}
      />
    </div>
  )
}