import { getSession, BlitzApiRequest, BlitzApiResponse, NotFoundError } from "blitz"
import TruckController from "../../controllers/TruckController"

const handler = async (req, res) => {
    runMiddleware(req, res, cors)

    if (req.method === "GET") {
        return await getTruckList(req, res)
    } else if (req.method === "POST") {
        // TODO: Create trucks
    }
}

const getTruckList = async (req, res) => {
    const { limit, offset } = req.query
    var session = await getSession(req, res);
    var controller = new TruckController(session)

    try {
        var trucks = await controller.getTrucks(offset, limit)
        res.statusCode = 200
        res.json(trucks)
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
