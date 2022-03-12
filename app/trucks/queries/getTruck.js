import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"
const GetTruck = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})
export default resolver.pipe(resolver.zod(GetTruck), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const truck = await db.truck.findFirst({
    where: {
      id,
    },
  })
  if (!truck) throw new NotFoundError()
  return truck
})
