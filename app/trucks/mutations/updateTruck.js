import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const UpdateTruck = z.object({
  id: z.number(),
  name: z.string(),
})
export default resolver.pipe(
  resolver.zod(UpdateTruck),
  resolver.authorize(),
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
