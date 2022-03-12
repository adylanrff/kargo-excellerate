import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateDriver = z.object({
  driverName: z.string(),
  phoneNumber: z.string(),
  idCard: z.string(),
  driverLicense: z.string(),
})
export default resolver.pipe(resolver.zod(CreateDriver), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const driver = await db.driver.create({
    data: input,
  })
  return driver
})
