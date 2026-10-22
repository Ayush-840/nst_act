datasource db {
  url      = env("DATABASE_URL")
  provider = "mysql"
}
generator client {
  provider = "prisma-client-js"
}
// This is a dummy model
model Dummy {
  id      Int      @id @default(autoincrement())
  productName   String
  description   String?
  quantityInStock Int
  price         Decimal
  discount      Float?
  sku           String   @unique
  createdAt     DateTime @default(now())
  isAvailable   Boolean  @default(true)
}