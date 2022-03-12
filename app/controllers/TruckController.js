import getTruck from "app/trucks/queries/getTruck"
import getTrucks from "app/trucks/queries/getTrucks"

// Create Update Delete
import deleteTruck from "app/trucks/mutations/deleteTruck"
import updateTruck from "app/trucks/mutations/updateTruck"
import createTruck from "app/trucks/mutations/createTruck"


class TruckController {
    constructor(session) {
        this.session = session
    }

    async getTrucks(skip = 0, take = 100) {
        return await getTrucks({ where: {}, orderBy: { id: "asc" }, skip, take })
    }

    async getTruck(id) {
        return await getTruck({ id: parseInt(id) }, { session: this.session })
    }

    async createTruck(params) {
        return await createTruck(params, { session: this.session })
    }

    async updateTruck(id, updateParams) {
        var data = {
            id,
            ...updateParams
        }

        return await updateTruck(data, { session: this.session })

    }
}


export default TruckController;
