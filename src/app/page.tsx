import { PrismaClient } from '@prisma/client';
import ProductCard from './components/ProductCard';

// const db: PrismaClient = require('../lib/db/prisma').default
let prisma: PrismaClient;

export default async function Home() {
  const products = await prisma?.product.findMany({
    orderBy: { id: "desc" },
  })

  return (
    <div>
      {products && products.map((product) => {
        return <ProductCard key={product.id} product={product} />
      })}
    </div>
  )
}
