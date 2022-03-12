import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const UpdateShipment = z.object({
  id: z.number(),
  name: z.string(),
})
export default resolver.pipe(
  resolver.zod(UpdateShipment),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const shipment = await db.shipment.update({
      where: {
        id,
      },
      data,
    })
    return shipment
  }
)
