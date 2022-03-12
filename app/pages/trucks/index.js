import React from "react"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import FormTrucks from "app/pages/truck/create"
// import "./truck.css"
import { useContext } from "react"
import { RoleContext } from "app/lib/context"
const Truck = () => {
  const { role } = useContext(RoleContext)
  const options = ["Tronton", "Contaner", "CDE"]
  const columns = [" License Number",
    "Truck Type",
    " Plate Type",
    " Production Year",
    "Actions",]

  const drivers = [" License Number",
    "Truck Type",
    " Plate Type",
    " Production Year",
    <button href="/truck/create">Update</button>
    ,]

  const defaultOption = options[0]
  return (
    <div>
      <div>{role}</div>
      <main>
        <div className="toolbar">
          <Dropdown
            className="dropdown"
            options={options}
            arrowClassName="dropdown-arrow"
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />

          <input placeholder="Search" />
        </div>
        <div className="truck-list">
          <CustomizedTables columns={columns} data={drivers} />

        </div>
      </main>

      <style>
        {`

        .dropdown{
          width:10vw;
        }
        .toolbar {
          width:70vw;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        `}
      </style>
    </div>
  )
}

export default Truck
