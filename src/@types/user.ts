import { string, number, boolean, array, object } from './guards'

// {
//     "id": "1050b7c5-46ff-2bdb-a4de-000d01936e0d",
//     "fullName": "Marty McFly",
//     "preferredName": "",
//     "email": "marty.mcfly@example.com",
//     "createdAt": "2022-04-08T16:35:57.115735Z",
//     "updatedAt": "2022-04-13T18:52:37.794858Z",
//     "active": true
// },

// We are creating this with the assumption that these are all of the available properties for EVERY endpoint that presents us a User object
export const User = object({
  id: string,
  fullName: string,
  preferredName: string, // Depending on database setup this may also present us with a null value
  email: string,
  createdAt: string, // I personally like to convert times into ints and handle the client side conversion after, but for this exercise I will keep it as a String
  updatedAt: string,
  active: boolean,
})

export const Users = array(User)
export type User = ReturnType<typeof User>
export type Users = ReturnType<typeof Users>
