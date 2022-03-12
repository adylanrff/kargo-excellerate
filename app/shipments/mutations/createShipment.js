import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateShipment = z.object({
  name: z.string(),
})
export default resolver.pipe(resolver.zod(CreateShipment), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const shipment = await db.shipment.create({
    data: input,
  })
  return shipment
})
