import React from 'react';
import {
  Root as AspectRatioPrimitiveRoot,
  AspectRatioProps as AspectRatioPrimitiveProps,
} from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';

import { Box } from 'components/Box';
import { CSS } from '@stitches/react';

export type AspectRatioProps = {
  imageURL: string;
  imageALT: string;
  ratio?: number;
  css?: CSS;
  className?: string;
} & AspectRatioPrimitiveProps;

export const AspectRatio = ({
  imageALT,
  imageURL,
  ratio = 16 / 9,
  css,
  className = '',
  ...props
}: AspectRatioProps) => (
  <Box
    css={{
      width: '$full',
      overflow: 'hidden',
      ...css,
    }}
    className={className}
  >
    <AspectRatioPrimitiveRoot ratio={ratio} {...props}>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={imageURL}
        alt={imageALT}
        priority
      />
    </AspectRatioPrimitiveRoot>
  </Box>
);
