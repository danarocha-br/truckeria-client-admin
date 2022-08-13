import React from 'react';
import {
  Root as AspectRatioPrimitiveRoot,
  AspectRatioProps as AspectRatioPrimitiveProps,
} from '@radix-ui/react-aspect-ratio';

import * as S from './styles';
import { Box } from 'components/Box';
import { CSS } from '@stitches/react';
import Image from 'next/image';

export type AspectRatioProps = {
  imageURL: string;
  imageALT: string;
  ratio?: number;
  css?: CSS;
} & AspectRatioPrimitiveProps;

export const AspectRatio = ({
  imageALT,
  imageURL,
  ratio = 16 / 9,
  css,
  ...props
}: AspectRatioProps) => (
  <Box
    css={{
      width: '$full',
      overflow: 'hidden',
      ...css,
    }}
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
