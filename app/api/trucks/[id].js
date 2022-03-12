import { getSession, BlitzApiRequest, BlitzApiResponse, NotFoundError } from "blitz"
import TruckController from "../../controllers/TruckController"
import { cors, runMiddleware } from "app/apiutils"

const handler = async (req, res) => {
    runMiddleware(req, res, cors)

    if (req.method === "GET") {
        return await getTruckById(req, res)
    } else if (req.method === "PUT") {
        return await updateTruckById(req, res)
    } else if (req.method === "POST") {
        return await createTruck(req, res)
    }
}

const getTruckById = async (req, res) => {
    const { id } = req.query
    var session = await getSession(req, res);
    var controller = new TruckController(session)

    try {
        var truck = await controller.getTruck(parseInt(id))
        res.statusCode = 200
        res.end(JSON.stringify(truck))
    } catch (err) {
        if (err instanceof NotFoundError) {
            res.statusCode = 400
            res.json({ msg: "not found" })
        }
    }
}

const updateTruckById = async (req, res) => {
    const { id } = req.query
    const body = req.body

    var session = await getSession(req, res)
    var controller = new TruckController(session)
}

const createTruck = async (req, res) => {
    const body = await req.body.json()

    var params = {
        truckName: body.truckName,
        licenseNumber: body.licenseNumber,
        truckType: body.truckType,
        productionYear: body.productionYear,
        stnk: body.stnk,
        kir: body.kir
    }

    var session = await getSession(req, res)
    var controller = new TruckController(session)

    try {
        var truck = await controller.createTruck(params)
        res.statusCode = 200
        res.json(truck)
    } catch (err) {
        res.statusCode = 500
        res.json({ msg: "server error" })
    }
}

export default handler;
