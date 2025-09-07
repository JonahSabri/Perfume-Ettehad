import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function ArtisticShowcase() {
  const collections = [
    {
      id: 1,
      name: 'رز پرشین',
      category: 'مجموعه زنانه',
      image: '/luxury-persian-rose-perfume.png',
      description: 'ترکیبی از گل رز ایرانی و نت‌های شرقی'
    },
    {
      id: 2,
      name: 'عود سلطنتی',
      category: 'مجموعه مردانه',
      image: '/placeholder-09heq.png',
      description: 'عود خالص با نت‌های چوبی و معدنی'
    }
  ]

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] mb-6">
            مجموعه‌های ویژه
          </h2>
          <p className="text-lg tracking-[0.3em] text-gray-600 max-w-2xl mx-auto">
            هر عطر داستانی از زیبایی و اصالت ایرانی را روایت می‌کند
          </p>
        </div>

        {/* Collections */}
        <div className="space-y-32">
          {collections.map((collection, index) => (
            <div 
              key={collection.id} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`relative aspect-[4/5] bg-gray-50 overflow-hidden ${
                index % 2 === 1 ? 'lg:col-start-2' : ''
              }`}>
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className={`space-y-8 ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <div className="space-y-4">
                  <p className="text-sm tracking-[0.3em] text-gray-600 uppercase">
                    {collection.category}
                  </p>
                  <h3 className="text-4xl md:text-5xl font-light tracking-wide">
                    {collection.name}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed tracking-wide max-w-md">
                    {collection.description}
                  </p>
                </div>
                
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Link href={`/product/${collection.id}`}>
                    کشف کنید
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-32">
          <Button 
            asChild 
            size="lg" 
            className="bg-black text-white hover:bg-gray-800 px-12 py-6 text-lg tracking-[0.2em]"
          >
            <Link href="/shop">
              مشاهده همه مجموعه‌ها
              <ArrowLeft className="w-5 h-5 mr-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
