import { styled } from '../../../stitches.config';

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 10;

export const ScrollAreaRoot = styled(ScrollAreaPrimitive.Root, {
  width: '$full',
  height: '$full',
  overflow: 'hidden',
});

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '$full',
  height: '$full',
  borderRadius: 'inherit',
});

export const Scrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  d: 'flex',
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: 2,
  background: '$transparent',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$background-subdued' },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$loading-default',
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const ScrollAreaCorner = styled(ScrollAreaPrimitive.Corner, {
  background: '$transparent',
});
