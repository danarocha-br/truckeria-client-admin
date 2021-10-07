import * as NextImage from "next/image";

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => {
    const {objectFit, ...rest} = props
    return <img {...rest} />
  }
})
