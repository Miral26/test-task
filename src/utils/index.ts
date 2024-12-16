const baseURL = process.env.NEXT_AUTHURL??'http://localhost:3000/api'

export const fetcherUsers = async (url: string) => {
  const res = await fetch(`${baseURL}${url}`)
  return res.json()
}