import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const DeleteTruck = z.object({
  id: z.number(),
})
export default resolver.pipe(resolver.zod(DeleteTruck), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const truck = await db.truck.deleteMany({
    where: {
      id,
    },
  })
  return truck
})
