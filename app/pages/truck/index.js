import React from "react"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"
import FormTrucks from "app/pages/truck/create"
// import "./truck.css"

const Truck = () => {
  const options = ["Tronton", "Contaner", "CDE"]

  const defaultOption = options[0]
  return (
    <div>
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
          <table>
            <thead>
              <tr>
                <th>License Number</th>
                <th>Truck Type</th>
                <th>Plate Type</th>
                <th>Production Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B 2021 ABC</td>
                <td>Tronton</td>
                <td>Yellow</td>
                <td>2022</td>
                <td>
                  <button href="/truck/create">Update</button>
                </td>
              </tr>
            </tbody>
          </table>
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

        .truck-list {
          width:100vw;
          justify-content:center;
          align-content:center;

          padding: auto;
          table{
            width: 50vw;
          }
          th{
            width: 10vw;
            height:4vh;
          }
        }
        `}
      </style>
    </div>
  )
}

export default Truck
