import { styled } from '../../../stitches.config';

export type GridProps = React.ComponentProps<typeof Grid>;

export const Grid = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',

  variants: {
    flow: {
      row: {
        gridAutoFlow: 'row',
      },
      column: {
        gridAutoFlow: 'column',
      },
      'row-dense': {
        gridAutoFlow: 'row dense',
      },
      'col-dense': {
        gridAutoFlow: 'column dense',
      },
    },

    cols: {
      1: {
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      },
      2: {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      },
      3: {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      },
      4: {
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      },
      5: {
        gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
      },
      6: {
        gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
      },
      7: {
        gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
      },
      8: {
        gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
      },
      9: {
        gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
      },
      10: {
        gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
      },
      11: {
        gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
      },
      12: {
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      },
      none: {
        gridTemplateColumns: 'none',
      },
    },

    rows: {
      1: {
        gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
      },
      2: {
        gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
      },
      3: {
        gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
      },
      4: {
        gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
      },
      5: {
        gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
      },
      6: {
        gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
      },
      7: {
        gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
      },
      8: {
        gridTemplateRows: 'repeat(8, minmax(0, 1fr))',
      },
      9: {
        gridTemplateRows: 'repeat(9, minmax(0, 1fr))',
      },
      10: {
        gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
      },
      11: {
        gridTemplateRows: 'repeat(11, minmax(0, 1fr))',
      },
      12: {
        gridTemplateRows: 'repeat(12, minmax(0, 1fr))',
      },
      none: {
        gridTemplateRows: 'none',
      },
    },

    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
      10: {
        gap: '$10',
      },
      11: {
        gap: '$11',
      },
      12: {
        gap: '$12',
      },
      13: {
        gap: '$13',
      },
    },

    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
  },

  defaultVariants: {
    flow: 'row',
    cols: 1,
    rows: 1,
    gap: 2,
    align: 'stretch',
    justify: 'between',
  },
});
