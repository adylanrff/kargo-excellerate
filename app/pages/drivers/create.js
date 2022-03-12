import { useForm } from "react-hook-form"

export default function DriversCreate() {
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
                        <label>Driver Name</label>
                        <input type="text" placeholder="Origin" {...register("Driver Name", {})} />
                    </div>
                    <div className="form-label">
                        {" "}
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone Number" {...register("Phone Number", {})} />
                    </div>
                    <div className="form-label">
                        <label>ID Card</label>
                        <input type="file" {...register("ID Card", {})} />
                    </div>
                    <div className="form-label">
                        <label>Driver License</label>
                        <input type="file" {...register("ID Card", {})} />
                    </div>

                    <input className="submit" type="submit" value="Save Unit" />
                </form>
            </main>
            <style>{`
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