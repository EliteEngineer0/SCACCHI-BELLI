import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export { prisma }

async function seed() {
  const usersData = [
    {
        email: "admin@gmail.com",
        username: "admin",
        password: "$2a$10$q9RCHgoDplabHe/iq5HkduFSe6/o3DLjmkW6b8j6AyLpPIvwqRpeq",
        role: "admin"
    },
    {
        email: "user@gmail.com",
        username: "user",
        password: "$2a$10$3zU3itd/AiI8XBtx8W.HreBBtJdUlGP0GE0Os3/hbceXjYjmtj6HG",
        role: "user"
    }
    // Add more user data as needed
  ];

  for (const userData of usersData) {
    await prisma.user.create({
      data: userData,
    });
    console.log(`User created: ${userData.username}`);
  }
}

// seed()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
