import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const UpdateTruck = z.object({
  id: z.number(),
  truckName: z.string(),
  licenseNumber: z.string(),
  truckType: z.string(),
  productionYear: z.number(),
  stnk: z.string(),
  kir: z.string(),
})
export default resolver.pipe(
  resolver.zod(UpdateTruck),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const truck = await db.truck.update({
      where: {
        id,
      },
      data,
    })
    return truck
  }
)
