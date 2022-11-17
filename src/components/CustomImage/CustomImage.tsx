import { FC } from 'react'

interface Props {
  src: string
  alt: string
}

const CustomImage: FC<Props> = (props) => {
  const { src, alt } = props

  return (
    <img
      src={src}
      srcSet={src}
      alt={alt}
      loading='lazy'
      style={{
        width: '100%',
      }}
    />
  )
}

export default CustomImage
