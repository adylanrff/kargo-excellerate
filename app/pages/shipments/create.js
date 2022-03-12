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
                        <label>Origin</label>
                        <input type="text" placeholder="Origin" {...register("Origin", {})} />
                    </div>
                    <div className="form-label">
                        {" "}
                        <label>Destination</label>
                        <input type="text" placeholder="Destination" {...register("Destination", {})} />
                    </div>
                    <div className="form-label">
                        <label>Loading Date</label>
                        <input type="datetime-local" placeholder="LoadingDate" {...register("Loading Date", {})} />
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