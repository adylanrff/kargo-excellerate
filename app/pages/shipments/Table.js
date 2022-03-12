import { Button, Box, Typography, Modal } from "@mui/material"
import React from "react"
import DataTable from "react-data-table-component"

import styles from "../shipments/Table.module.css"

const Table = () => {
  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "License",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Driver's Name",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Origin",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Destination",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Loading Date",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <Button raised primary onClick={handleOpen}>
          Action
        </Button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ]

  const handleClick = () => {
    alert("here")
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <DataTable columns={columns} data={data} pagination />
    </>
  )
}

export default Table
