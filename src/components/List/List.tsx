import products from '../../data/products.json'
import Card from '../Card/Card'

export default function List() {
  return (
    <div className="list">
        {products?.map(item => (
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}
