import { paginate, resolver } from "blitz"
import db from "db"
export default resolver.pipe(
  async ({ where, orderBy, skip = 0, take = 100 }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const {
      items: trucks,
      hasMore,
      nextPage,
      count,
    } = await paginate({
      skip,
      take,
      count: () =>
        db.truck.count({
          where,
        }),
      query: (paginateArgs) => db.truck.findMany({ ...paginateArgs, where, orderBy }),
    })
    return {
      trucks,
      nextPage,
      hasMore,
      count,
    }
  }
)
