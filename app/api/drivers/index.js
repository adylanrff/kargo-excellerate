import { getSession, BlitzApiRequest, BlitzApiResponse, NotFoundError } from "blitz"
import DriverController from "../../controllers/DriverController"

const handler = async (req, res) => {
    runMiddleware(req, res, cors)

    if (req.method === "GET") {
        return await getDriverList(req, res)
    } else if (req.method === "POST") {
        // TODO: Create Drivers
    }
}

const getDriverList = async (req, res) => {
    const { limit, offset } = req.query
    var session = await getSession(req, res);
    var controller = new DriverController(session)

    try {
        var Drivers = await controller.getDrivers(offset, limit)
        res.statusCode = 200
        res.json(Drivers)
    } catch (err) {
        console.log(err)
        if (err instanceof NotFoundError) {
            res.statusCode = 400
            res.json({ msg: "not found" })
        } else {
            res.statusCode = 500
            res.json({ msg: "server error" })
        }
    }
}

export default handler;
