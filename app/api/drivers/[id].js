import { getSession, BlitzApiRequest, BlitzApiResponse, NotFoundError } from "blitz"
import DriverController from "../../controllers/DriverController"
import { cors, runMiddleware } from "app/apiutils"

const handler = async (req, res) => {
    runMiddleware(req, res, cors)

    if (req.method === "GET") {
        return await getDriverById(req, res)
    } else if (req.method === "PUT") {
        return await updateDriverById(req, res)
    } else if (req.method === "POST") {
        return await createDriver(req, res)
    }
}

const getDriverById = async (req, res) => {
    const { id } = req.query
    var session = await getSession(req, res);
    var controller = new DriverController(session)

    try {
        var Driver = await controller.getDriver(parseInt(id))
        res.statusCode = 200
        res.end(JSON.stringify(Driver))
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.statusCode = 400
            res.json({ msg: "not found" })
        }
    }
}

const updateDriverById = async (req, res) => {
    const { id } = req.query
    const body = req.body

    var session = await getSession(req, res)
    var controller = new DriverController(session)
}

const createDriver = async (req, res) => {
    const body = await req.body.json()

    var params = {
        DriverName: body.DriverName,
        licenseNumber: body.licenseNumber,
        DriverType: body.DriverType,
        productionYear: body.productionYear,
        stnk: body.stnk,
        kir: body.kir
    }

    var session = await getSession(req, res)
    var controller = new DriverController(session)

    try {
        var Driver = await controller.createDriver(params)
        res.statusCode = 200
        res.json(Driver)
    } catch (err) {
        res.statusCode = 500
        res.json({ msg: "server error" })
    }
}

export default handler;
