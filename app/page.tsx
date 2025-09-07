import ZarinanHero from '@/components/zarinan-hero'
import CategoryIcons from '@/components/category-icons'
import ProductSections from '@/components/product-sections'
import FeaturedProducts from '@/components/featured-products'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <ZarinanHero />
      <CategoryIcons />
      <ProductSections />
      <FeaturedProducts />
    </main>
  )
}
