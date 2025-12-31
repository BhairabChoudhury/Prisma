import { PrismaClient } from "@prisma/client"
 const client = new PrismaClient() ;
async function createUser() {
  const user = await client.user.create({
    data: {
      name: "Bhairab",
      email: "bhairab@example.com",
      city: "Kolkata",
    },
  })

  console.log("User Created:", user)
}

createUser()
  .then(() => console.log("Done"))
  .catch(err => console.error(err))
