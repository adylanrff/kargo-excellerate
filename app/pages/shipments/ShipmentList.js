import React from "react"
import Button from "../component/Button"
import styles from "../shipments/ShipmentList.module.css"
import Table from "./Table"
import { TextField } from "@mui/material"

const ShipmentList = () => {
  return (
    <>
      <div className={styles.navbar}></div>
      <div className={styles.headers}>
        <div className={styles.filter}>
          <Button name="Search" />
          {/* <TextField id="standard-basic" label="Standard" variant="standard" placeholder="here" /> */}
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.table}>
          <Table />
        </div>
      </div>
      <div className={styles.footer}></div>
    </>
  )
}

export default ShipmentList
