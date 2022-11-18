import { FC } from 'react'
import { styled } from '@mui/material/styles'

import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f8f8f8',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '1rem',
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f1f1f1',
  },
  '&:hover': {
    backgroundColor: '#f7f7f7',
    cursor: 'pointer',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

interface Props {
  headers: string[]
  rows: string[][]
  handleClickRow: (episodeIdx: number) => () => void
}

const CustomTable: FC<Props> = (props) => {
  const { headers, rows, handleClickRow } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label='custom-table'>
        <TableHead>
          <TableRow>
            {headers.map((header, idx) => (
              <StyledTableCell key={idx} align={idx === 0 ? 'left' : 'right'}>
                {header}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIdx) => (
            <StyledTableRow key={rowIdx} onClick={handleClickRow(rowIdx)}>
              {headers.map((_header, idx) => (
                <StyledTableCell key={idx} align={idx === 0 ? 'left' : 'right'}>
                  {row[idx]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CustomTable
