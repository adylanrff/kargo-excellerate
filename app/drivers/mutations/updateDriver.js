import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const UpdateDriver = z.object({
  id: z.number(),
  driverName: z.string(),
  phoneNumber: z.string(),
  idCard: z.string(),
  driverLicense: z.string(),
})
export default resolver.pipe(
  resolver.zod(UpdateDriver),
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
