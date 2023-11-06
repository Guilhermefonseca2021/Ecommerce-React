import Pricetag from '@/lib/db/PriceTag';
import { Product } from '@prisma/client'
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;

  return (
    <Link
      href={"/product/" + product.id}
      className="card w-full bg-base-100 hover:shadow"
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={product.name}
          className='h-40 object-cover'
        />
      </figure>
      <div className='card-body'>
        <h2 className="card-title">
          {product.name}
        </h2>
        {isNew && <div className='badge badge-secondary'>New</div>}
        <p>{product.description}</p>
        <Pricetag price={product.price} />
      </div>
    </Link>
  )
}
