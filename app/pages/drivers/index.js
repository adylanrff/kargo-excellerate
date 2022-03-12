import { usePaginatedQuery, useQuery, useRouter } from "blitz"
import getDrivers from "app/drivers/queries/getDrivers"

const ITEMS_PER_PAGE = 100

const DriversPage = (props) => {
    const router = useRouter()
    const page = Number(router.query.page) || 0

    const [{ drivers, hasMore }] = usePaginatedQuery(getDrivers, {
        orderBy: { id: "asc" },
        skip: ITEMS_PER_PAGE * page,
        take: ITEMS_PER_PAGE,
    })

    return (<>
        <div>
            <main>
                {drivers.length === 0 && (
                    <p>No drivers found</p>
                )}
                {drivers.map(driver => (
                    <div>
                        <p>{driver.driverName}</p>
                        <p>{driver.phoneNumber}</p>
                        <p>{driver.idCard}</p>
                        <p>{driver.driverLicense}</p>
                    </div>
                ))}
            </main>
        </div>
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
    </>
    )
}

export default DriversPage