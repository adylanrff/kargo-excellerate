import { paginate, resolver } from "blitz"
import db from "db"
export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: drivers,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () =>
        db.driver.count({
          where,
        }),
      query: (paginateArgs) => db.driver.findMany({ ...paginateArgs, where, orderBy }),
    })
    return {
      drivers,
      nextPage,
      hasMore,
      count,
    }
  }
)
