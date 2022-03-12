import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const UpdateDriver = z.object({
  id: z.number(),
  name: z.string(),
})
export default resolver.pipe(
  resolver.zod(UpdateDriver),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const driver = await db.driver.update({
      where: {
        id,
      },
      data,
    })
    return driver
  }
)
