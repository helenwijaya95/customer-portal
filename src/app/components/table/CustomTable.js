import { createColumnHelper, flexRender, useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  IconButton,
  Box,
  Image,
  Flex
} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons"
import Pagination from "./Pagination";
import {
  useEffect, useState
} from "react";
const CustomTable = ({ defaultData, columns }) => {
  const [displayEmail, setDisplayEmail] = useState([])
  const columnHelper = createColumnHelper()

  const isShowing = (cell) => {
    const id = cell?.row?.original?.id
    const findEmail = displayEmail.find((email) => {
      return email.id == id;
    })
    return findEmail?.display
  }
  const toggleEmail = (cell) => {
    const { id } = cell?.row?.original
    const stat = displayEmail.find(d => {
      return d.id == id
    })

    const newDisplayEmail = displayEmail.map((em) => {
      return em.id == id ? {
        id: em.id,
        display: !stat.display
      } : {
        id: em.id,
        display: false
      }
    })

    setDisplayEmail(newDisplayEmail)
  }
  const maskedEmail = (email) => {
    var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
    var previous = "";
    for (let i = 0; i < maskedEmail.length; i++) {
      if (i <= 1 || previous == "." || previous == "@") {
        maskedEmail[i] = email[i];
      }
      previous = email[i];
    }
    return maskedEmail.join('');
  }

  const columnConfig = columns.map(col => {
    if (col.accessor === 'email') {
      return columnHelper.accessor(col.accessor, {
        header: col.display,
        cell: ({ cell }) => (
          <Flex>
            {!isShowing(cell) && <Text>{maskedEmail(cell.getValue())}</Text>}
            {isShowing(cell) && <Text >{cell.getValue()}</Text>}
            <IconButton
              variant='outline'
              colorScheme='teal'
              aria-label='View email'
              icon={<ViewIcon />}
              ml={'15px'}
              size="sm"
              onClick={() => toggleEmail(cell)}
            />
          </Flex>
        ),
        footer: info => info.column.id,
      })
    }
    if (col.accessor === 'avatar') {
      return columnHelper.accessor(col.accessor, {
        header: col.display,
        cell: ({ cell }) => (
          <>
            <Box boxSize='50px'>
              <Image src={cell.getValue()} alt='' />
            </Box>
          </>
        ),
        footer: info => info.column.id,
      })
    }
    return columnHelper.accessor(col.accessor, {
      header: col.display,
      footer: info => info.column.id,
    })
  })

  const customTable = useReactTable({
    data: defaultData,
    columns: columnConfig,
    getCoreRowModel: getCoreRowModel(),
  })
  useEffect(() => {
    const initDisplayEmail = () => {
      const initDisplay = defaultData.map(d => {
        return {
          id: d.id,
          display: false
        }
      })
      setDisplayEmail(initDisplay);
    }
    initDisplayEmail();
  }, [defaultData])

  return (
    <>
      <h1>Custom Table 2</h1>
      <Table>
        <Thead>
          {customTable.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (<Th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {customTable.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Pagination table={customTable} />
    </>
  )
}

export default CustomTable;