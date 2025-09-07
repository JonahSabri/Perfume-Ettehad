import Image from 'next/image'
import Link from 'next/link'

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: 'رز پرشین',
      category: 'عطر زنانه',
      image: '/luxury-persian-rose-perfume.png'
    },
    {
      id: 2,
      name: 'عود سلطنتی',
      category: 'عطر مردانه',
      image: '/placeholder-09heq.png'
    },
    {
      id: 3,
      name: 'یاس اصفهان',
      category: 'عطر زنانه',
      image: '/elegant-jasmine-perfume.png'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl mb-4">مجموعه‌های ویژه</h2>
          <p className="text-gray-600">کشف کنید عطرهای منحصر به فرد ما</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group text-center">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
