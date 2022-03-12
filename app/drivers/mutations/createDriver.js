import { resolver } from "blitz"
import db from "db"
import { z } from "zod"
const CreateDriver = z.object({
  driverName: z.string(),
  phoneNumber: z.string(),
  // idCard: z.sA,
  // driverLicense: z.string(),
})
export default resolver.pipe(resolver.zod(CreateDriver), async (input) => {
  console.log(input)
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const params = input
  params.status = "Active"
  params.idCard = 'tes'
  params.driverLicense = "psiang"

  const driver = await db.driver.create({
    data: params,
  })
  return driver
})
