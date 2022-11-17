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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

interface Props {
  headers: string[]
  rows: string[][]
}

const CustomTable: FC<Props> = (props) => {
  const { headers, rows } = props

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
            <StyledTableRow key={rowIdx}>
              {headers.map((header, idx) => (
                <StyledTableCell key={idx} align={idx === 0 ? 'left' : 'right'}>
                  {headers[rowIdx]}
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
