import getDriver from "app/Drivers/queries/getDriver"
import getDrivers from "app/Drivers/queries/getDrivers"

// Create Update Delete
import deleteDriver from "app/drivers/mutations/deleteDriver"
import updateDriver from "app/drivers/mutations/updateDriver"
import createDriver from "app/drivers/mutations/createDriver"


class DriverController {
    constructor(session) {
        this.session = session
    }

    async getDrivers(skip = 0, take = 100) {
        return await getDrivers({ where: {}, orderBy: { id: "asc" }, skip, take })
    }

    async getDriver(id) {
        return await getDriver({ id: parseInt(id) }, { session: this.session })
    }

    async createDriver(params) {
        return await createDriver(params, { session: this.session })
    }

    async updateDriver(id, updateParams) {
        var data = {
            id,
            ...updateParams
        }

        return await updateDriver(data, { session: this.session })
    }
}


export default DriverController;
