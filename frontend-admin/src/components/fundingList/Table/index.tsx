import { FundingType } from '@/types/fundingType'
import * as t from '@components/fundingList/Table/Table.styled'
import {
  useGlobalFilter,
  usePagination,
  useTable,
  useSortBy,
  Row,
} from 'react-table'
import Search from '../Search'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { currentNavState } from '@/store/common'
import { selectedFundingNoState } from '@/store/funding'

const index = (props: { columns: any; data: FundingType[] }) => {
  const { columns, data } = props
  const setCurrentNav = useSetRecoilState(currentNavState)
  const setSelectedFundingNo = useSetRecoilState(selectedFundingNoState)
  const navigate = useNavigate()
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    setGlobalFilter,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state: { pageIndex },
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination)

  const HandleTd = (id: number) => {
    setCurrentNav({ name: 'Funding', url: `/admin/funding/id` })
    setSelectedFundingNo(id)
    navigate(`/admin/funding/${id}`)
  }

  return (
    <t.Container>
      <Search onSubmit={setGlobalFilter} />
      <t.Table {...getTableProps()}>
        <t.Thead>
          {headerGroups.map(headerGroup => (
            <t.Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <t.Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔻'
                        : ' 🔺'
                      : ''}
                  </span>
                </t.Th>
              ))}
            </t.Tr>
          ))}
        </t.Thead>
        <t.Tbody {...getTableBodyProps()}>
          {page.map((row: Row<FundingType>) => {
            prepareRow(row)
            return (
              <t.Tr
                {...row.getRowProps()}
                onClick={() => HandleTd(row.cells[0].value)}
              >
                {row.cells.map(cell => (
                  <t.Td {...cell.getCellProps()}>
                    {cell.column.Header === '목표금액'
                      ? cell.value.toLocaleString() + '원'
                      : cell.render('Cell')}
                  </t.Td>
                ))}
              </t.Tr>
            )
          })}
        </t.Tbody>
      </t.Table>
      {/* Pagination Controls */}
      <t.PageBox>
        <t.PageButton
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          이전 페이지
        </t.PageButton>
        <t.PageText>
          page {pageIndex + 1} / {pageOptions.length}
        </t.PageText>
        <t.PageButton onClick={() => nextPage()} disabled={!canNextPage}>
          다음 페이지
        </t.PageButton>
      </t.PageBox>
    </t.Container>
  )
}

export default index
