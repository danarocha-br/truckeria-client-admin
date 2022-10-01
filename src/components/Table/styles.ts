import { styled } from '../../../stitches.config';

export const TableWrapper = styled('div', {
  d: 'block',
  w: '$full',
  h: 'calc(100vh - 13rem)',
  maxWidth: '$full',
  overflowY: 'hidden',
});

export const TableContainer = styled('table', {
  d: 'flex',
  flexDirection: 'row',
  w: '$full',
  maxWidth: '$full',

  borderCollapse: 'collapse',
  position: 'relative',

  overflowX: 'hidden',

  bg: '$white',

  [`.dark-theme &`]: {
    bg: '$surface-base-disabled',
  },

  '@bp-md': {
    d: 'table',
    bg: '$transparent',
    [`.dark-theme &`]: {
      bg: '$transparent',
    },
  },
});

export const THead = styled('thead', {
  d: 'none',

  '@bp-md': {
    d: 'table-header-group',
  },
});

export const Th = styled('th', {
  color: '$text-lighter',
  fontSize: '$tiny',
  fontWeight: '$medium',
  textAlign: 'left',
  textTransform: 'uppercase',
  letterSpacing: '1.4px',
  opacity: 0.4,
  verticalAlign: 'top',

  px: '$4',

  d: 'flex',
  alignItems: 'center',

  '&:first-child': {
    px: '$0',
    d: 'none',
  },

  '& > div': {
    cursor: 'pointer',
  },

  '@bp-md': {
    d: 'table-cell',
    pb: '$5',

    '&:first-child': {
      d: 'table-cell',
    },
  },
});

export const Tbody = styled('tbody', {
  w: '$full',
  maxWidth: '$full',

  '& tr:first-child td:first-child': {
    borderTopLeftRadius: '$sm ',

    '& .product__cover': {
      borderTopLeftRadius: '$sm ',
    },
  },

  '& tr:last-child td:first-child': {
    borderBottomLeftRadius: '$sm ',

    '& .product__cover': {
      borderBottomLeftRadius: '$sm ',
    },
  },
});

export const Tr = styled('tr', {
  transition: '$slow',
  position: 'relative',

  h: 100,

  borderBottom: '7px solid $background-subdued',

  '& td:first-child::before': {
    content: '',
    position: 'absolute',
    top: '$0',
    h: '$full',
    w: '6px',
    bg: '$yellow300',
    zIndex: 2,
    opacity: 0,
    transition: '$slow',
  },

  '&:hover': {
    opacity: 1,

    '& .table__actions': {
      transform: 'translateX(0px)',
    },

    '& td:first-child::before': {
      opacity: 1,
    },

    // boxShadow: '10px 0px 0px -5px orange inset',
  },

  '&:focus': {
    opacity: 1,
  },

  '@bp-md': {
    borderBottom: 'none',
    opacity: 0.86,
  },
});

export const Td = styled('td', {
  color: '$text-default',
  fontSize: '$sm',
  fontWeight: '$regular',
  textAlign: 'right',
  position: 'relative',

  px: '$6',
  py: '$3',
  w: '$full',

  borderRight: '2px solid $action-transparent-transparent',
  borderBottom: '1px solid $background-subdued',

  '&:first-child': {
    px: '$0',
    d: 'none',
  },

  '&:last-child': {
    borderRight: 'none',
    px: '$0',
    right: -20,
  },

  d: 'flex',
  justifyContent: 'end',
  transition: '$slow',

  '&[data-title]:before': {
    content: 'attr(data-title)',
    color: '$text-subdued',
    fontSize: '0.8rem',
    mr: '16px',
    alignItems: 'center',
    d: 'flex',
    textAlign: 'left',
    justifyContent: 'start',
    width: '$full',
  },

  '@bp-md': {
    textAlign: 'center',
    d: 'table-cell',
    borderBottom: '7px solid $background-subdued',
    py: '$0',

    bg: '$white',
    [`.dark-theme &`]: {
      bg: '$surface-base-disabled',
    },

    '&:first-child': {
      d: 'table-cell',
    },

    '&:last-child ': {
      px: '$6',
      mx: 0,
      position: 'sticky',
      right: 0,

      boxShadow: '10px 4px 10px rgba(0, 0, 0, 0.1)',

      '&.table__actions': {
        // bg: '$surface-base-disabled',
      },
    },

    '&[data-title]:before': {
      content: '',
    },
  },
});
