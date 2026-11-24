const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.Task.create({
    data:{
      title:"Complete Prisma Assignment",
      priority:"High",
      completed:false
    }
  })
  return user
}
main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });