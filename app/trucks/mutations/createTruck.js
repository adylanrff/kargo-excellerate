import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateTruck = z.object({
  truckName: z.string(),
  licenseNumber: z.string(),
  truckType: z.string(),
  productionYear: z.number(),
  stnk: z.string(),
  kir: z.string(),
})
export default resolver.pipe(resolver.zod(CreateTruck), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  var createTruckParams = {
    ...input,
    status: "active"
  }

  const truck = await db.truck.create({
    data: createTruckParams,
  })

  return truck
})
