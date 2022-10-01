import React, { useState } from 'react';
import NextLink from 'next/link';

import { Box } from '../Box';
import { Icon } from '../Icon';
import * as S from './styles';

export type LinkWrapperProps = {
  /** to render a wrapper to the a tag */
  as?: React.FunctionComponent | typeof NextLink;
  children: React.ReactNode;
  href: string;
};

export const LinkWrapper = ({ children, as, href }: LinkWrapperProps) => {
  const [isHovered, setHover] = useState(false);

  const Component = as || React.Fragment;

  return (
    <Component href={href} passHref>
      <S.Container
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        isHovered={isHovered}
      >
        {children}

        <Box as="i" className="px-1">
          <Icon
            name="externalLink"
            size="sm"
            css={{
              transition: '$base',
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? 'translateX(0px)' : 'translateX(4px)',
            }}
          />
        </Box>
      </S.Container>
    </Component>
  );
};
