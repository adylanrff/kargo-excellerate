import { resolver, NotFoundError } from "blitz"
import db from "db"
import { z } from "zod"
const GetDriver = z.object({
  // This accepts type of undefined, but is required at runtime
  id: z.number().optional().refine(Boolean, "Required"),
})
export default resolver.pipe(resolver.zod(GetDriver), resolver.authorize(), async ({ id }) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const driver = await db.driver.findFirst({
    where: {
      id,
    },
  })
  if (!driver) throw new NotFoundError()
  return driver
})
