import fetcher from "@/lib/fetcher"
const BASE_URI="http://localhost:3000/api/fetch"

export const GetFunction = {
  getAll: () => fetcher(BASE_URI)
}

