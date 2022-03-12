import { usePaginatedQuery, useQuery, useRouter } from "blitz"
import getDrivers from "app/drivers/queries/getDrivers"
import CustomizedTables from "app/components/Table"

const ITEMS_PER_PAGE = 100

const DriversPage = (props) => {
    const router = useRouter()
    const page = Number(router.query.page) || 0
    const columns = ["driverName", "phoneNumber", "idCard", "driverLicense"]

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
                <CustomizedTables columns={columns} data={drivers} />
            </main>
        </div>
    </>
    )
}

export default DriversPage