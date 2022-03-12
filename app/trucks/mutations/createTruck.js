import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateTruck = z.object({
  name: z.string(),
})
export default resolver.pipe(resolver.zod(CreateTruck), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const truck = await db.truck.create({
    data: input,
  })
  return truck
})
