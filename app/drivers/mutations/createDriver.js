import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateDriver = z.object({
  name: z.string(),
})
export default resolver.pipe(resolver.zod(CreateDriver), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const driver = await db.driver.create({
    data: input,
  })
  return driver
})
