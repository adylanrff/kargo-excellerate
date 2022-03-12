import React from "react"
import { useForm } from "react-hook-form"

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  console.log(errors)

  return (
    <div>
      <main>
        <form className="form-trucks" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-label">
            {" "}
            <label>License Number</label>
            <input type="number" placeholder="License Number" {...register("License Number", {})} />
          </div>

          <div className="form-label">
            {" "}
            <label>License Type</label>
            <select {...register}>
              <option value="Black">Black</option>
              <option value="yellow">yellow</option>
            </select>
          </div>
          <div className="form-label">
            {" "}
            <label>Truck Type</label>
            <select {...register}>
              <option value="Tronton">Tronton</option>
              <option value="Container">Container</option>
              <option value="CDE">CDE</option>
            </select>
          </div>
          <div className="form-label">
            <label>Production Year</label>
            <input
              type="number"
              placeholder="Production Year"
              {...register("Production Year", {})}
            />
          </div>
          <div className="form-label">
            {" "}
            <label>SIM</label>
            <input type="file" placeholder="STNK" {...register("STNK", {})} />
          </div>
          <div className="form-label">
            <label>KIR </label>
            <input type="file" placeholder="KIR" {...register("KIR", {})} />
          </div>

          <input className="submit" type="submit" value="Save Unit" />
        </form>
      </main>
      <style>{`

      main{
        padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
      }
      .form-trucks{
         width: 30vw;
        display:flex;
        flex-direction:column;
        justify-content: space-between;

        .form-label{
        width:30vw;
        flex-direction:column;
        justify-content: space-between;
        }
      }



      .submit{
        float:right;
        width:4vw;
        display:flex;
        align-itemst:end;
      }
      `}</style>
    </div>
  )
}

