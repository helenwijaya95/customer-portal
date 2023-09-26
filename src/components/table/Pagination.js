import { useState, useMemo } from "react";
import {
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";
const Pagination = ({ table }) => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  })

  const fetchDataOptions = {
    pageIndex,
    pageSize,
  }

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  )
  return (
    <Flex justifyContent="space-between" className="pagination" m={2} alignItems="center">

      {/* prev, first */}
      <Flex>
        <Tooltip label="First Page">
          <IconButton
            onClick={() => table.setPageIndex(0)}
            isDisabled={!table.getCanPreviousPage()}
            icon={<ArrowLeftIcon h={3} w={3} />}
            mr={4}
          />
        </Tooltip>
        <Tooltip label="Previous Page">
          <IconButton
            onClick={() => table.previousePage()}
            isDisabled={!table.getCanPreviousPage()}
            icon={<ChevronLeftIcon h={6} w={6} />}
          />
        </Tooltip>
      </Flex>

      {/* page number */}
      <Flex alignItems="center">
        <Text flexShrink="0" mr={8}>
          Page{" "}
          <Text fontWeight="bold" as="span">
            {table.getState().pagination.pageIndex + 1}
          </Text>{" "}
          of{" "}
          <Text fontWeight="bold" as="span">
            {table.getPageCount()}
          </Text>
        </Text>
        <Text flexShrink="0">Go to page:</Text>{" "}
        <NumberInput
          ml={2}
          mr={8}
          w={28}
          min={1}
          max={table.getPageCount()}
          defaultValue={table.getState().pagination.pageIndex + 1}

          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            Table.setPageIndex(page)
          }}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select
          w={32}
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </Select>
      </Flex>

      {/* next, last */}
      <Flex>
        <Tooltip label="Next Page">
          <IconButton
            onClick={() => table.nextPage()}
            isDisabled={!table.getCanNextPage()}
            icon={<ChevronRightIcon h={6} w={6} />}
          />
        </Tooltip>
        <Tooltip label="Last Page">
          <IconButton
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            isDisabled={!table.getCanNextPage()}
            icon={<ArrowRightIcon h={3} w={3} />}
            ml={4}
          />
        </Tooltip>
      </Flex>
    </Flex>
  )
}

export default Pagination