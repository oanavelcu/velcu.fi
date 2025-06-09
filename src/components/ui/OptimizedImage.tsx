import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
  style?: React.CSSProperties
  fill?: boolean
}

export default function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className, 
  style,
  fill 
}: OptimizedImageProps) {
  // For static export, we'll serve multiple formats and let the browser choose
  // This assumes our optimization script created .webp and .avif versions
  
  const baseSrc = src.replace(/\.(jpg|jpeg|png)$/i, '')
  const ext = src.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg'
  
  return (
    <picture>
      {/* AVIF - Best compression */}
      <source 
        srcSet={`${baseSrc}.avif`}
        type="image/avif"
      />
      
      {/* WebP - Good compression with wide support */}
      <source 
        srcSet={`${baseSrc}.webp`}
        type="image/webp"
      />
      
      {/* Fallback to optimized original format */}
      <Image
        src={fill ? src : `${baseSrc}.${ext}`}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        className={className}
        style={style}
      />
    </picture>
  )
}