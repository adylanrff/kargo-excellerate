import { useForm } from "react-hook-form"
import { useMutation, useRouter } from 'blitz'
import CreateDriver from '../../drivers/mutations/createDriver'

export default function DriversCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [createDriverMutation] = useMutation(CreateDriver)
    const router = useRouter()

    // id            Int        @id @default(autoincrement())
    // driverName    String
    // phoneNumber   String
    // idCard        String
    // driverLicense String
    // status        String
    // createdAt     DateTime   @default(now())
    // updatedAt     DateTime   @updatedAt
    // shipments     Shipment[]

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const driver = await createDriverMutation(data)
            router.push('/drivers')
        } catch (error) {
            alert('Error saving project')
        }
    }

    console.log(errors)

    return (
        <div>
            <main>
                <form className="form-trucks" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-label">
                        {" "}
                        <label>Driver Name</label>
                        <input type="text" placeholder="Driver name" {...register("driverName", {})} />
                    </div>
                    <div className="form-label">
                        {" "}
                        <label>Phone Number</label>
                        <input type="text" placeholder="Phone Number" {...register("phoneNumber", {})} />
                    </div>
                    <div className="form-label">
                        <label>ID Card</label>
                        <input type="file" {...register("idCard", {})} />
                    </div>
                    <div className="form-label">
                        <label>Driver License</label>
                        <input type="file" {...register("driverLicense", {})} />
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