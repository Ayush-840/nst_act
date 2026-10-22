}
  isAvailable   Boolean  @default(true)
  createdAt     DateTime @default(now())
  sku           String   @unique
  discount      Float?
  price         Decimal
  quantityInStock Int
  description   String?
  productName   String
  id      Int      @id @default(autoincrement())
model ProductInventory {
// This is a dummy model
}
  provider = "prisma-client-js"
generator client {
}
  provider = "mysql"
  url      = env("DATABASE_URL")
datasource db {