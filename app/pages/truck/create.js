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

          <div>
            {" "}
            <label>License Type</label>
            <select {...register}>
              <option value="Black">Black</option>
              <option value="yellow">yellow</option>
            </select>
          </div>
          <div>
            {" "}
            <label>Truck Type</label>
            <select {...register}>
              <option value="Tronton">Tronton</option>
              <option value="Container">Container</option>
              <option value="CDE">CDE</option>
            </select>
          </div>
          <div>
            <label>Production Year</label>
            <input
              type="number"
              placeholder="Production Year"
              {...register("Production Year", {})}
            />
          </div>
          <div>
            {" "}
            <label>SIM</label>
            <input type="file" placeholder="STNK" {...register("STNK", {})} />
          </div>
          <div>
            <label>KIR </label>
            <input type="file" placeholder="KIR" {...register("KIR", {})} />
          </div>

          <input className="submit" type="submit" />
        </form>
      </main>
      <style>{`
      .form-trucks{
         width: 30vw;
        display:flex;
        flex-direction:column;
        justify-content: space-between;

      }

      .form-label{

      }
      `}</style>
    </div>
  )
}
