import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma }

async function seed() {
  // Create posts
  const postsData = [
    {
      userId: 1, // Assuming admin user is at index 0
      content: "Che sito schifoso!",
    },
    {
      userId: 2, // Assuming user user is at index 1
      content: "Ciao a tutti!!!!!!!",
    }
    // Add more post data as needed
  ];

  const createdPosts = await Promise.all(postsData.map(postData =>
    prisma.post.create({
      data: postData,
    })
  ));
  console.log("Posts created:", createdPosts);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
