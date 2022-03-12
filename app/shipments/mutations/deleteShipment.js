import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const DeleteShipment = z.object({
  id: z.number(),
})
export default resolver.pipe(resolver.zod(DeleteShipment), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const shipment = await db.shipment.deleteMany({
    where: {
      id,
    },
  })
  return shipment
})
