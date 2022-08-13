import React from 'react';
import {
  Table as ReactTableProps,
  flexRender,
  Row,
} from '@tanstack/react-table';
import { useVirtual } from 'react-virtual';

import * as S from './styles';
import { ScrollArea } from 'components/ScrollArea';
import { Icon } from 'components/Icon';
import { Flex } from 'components/Flex';
import { CSS } from '../../../stitches.config';

export type TableProps<TData> = {
  table: ReactTableProps<TData>;
  tableRef: React.RefObject<HTMLDivElement>;
  rows: Row<TData>[];
  css?: CSS;
};

export const Table = <TData,>({
  table,
  tableRef,
  rows,
  css,
}: TableProps<TData>) => {
  const rowVirtualizer = useVirtual({
    parentRef: tableRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows } = rowVirtualizer;

  // const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 10 : 0;
  // const paddingBottom =
  //   virtualRows.length > 0
  //     ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
  //     : 0;

  return (
    // <S.TableWrapper>
    <ScrollArea css={{ h: 'calc(100vh - 12.5rem)' }}>
      <S.TableContainer role="table" {...css}>
        <S.THead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <S.Th
                    role="columnheader"
                    scope="col"
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder ? null : (
                      <Flex
                        align="center"
                        css={{ position: 'relative' }}
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: (
                            <i>
                              <Icon name="caretUp" size="xs" />
                            </i>
                          ),
                          desc: (
                            <i>
                              <Icon name="caretDown" size="xs" />
                            </i>
                          ),
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    )}
                  </S.Th>
                );
              })}
            </tr>
          ))}
        </S.THead>

        <S.Tbody>
          {/* {paddingTop > 0 && (
            <tr>
              <td style={{ height: `${paddingTop}px` }} />
            </tr>
          )} */}

          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index] as Row<TData>;

            return (
              <S.Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <S.Td
                      key={cell.id}
                      data-title={cell.column.columnDef.header}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </S.Td>
                  );
                })}
              </S.Tr>
            );
          })}
          {/* {paddingBottom > 0 && (
            <tr>
              <td style={{ height: `${paddingBottom}px` }} />
            </tr>
          )} */}
        </S.Tbody>
      </S.TableContainer>
    </ScrollArea>
  );
};
