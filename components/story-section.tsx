import Image from 'next/image'

export default function StorySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl">داستان ما</h2>
            <p className="text-gray-700 leading-relaxed">
              از سال ۱۳۸۸، ما با عشق و دقت، عطرهایی خلق کرده‌ایم که ترکیبی منحصر به فرد 
              از سنت کهن ایرانی و تکنیک‌های مدرن عطرسازی هستند.
            </p>
            <p className="text-gray-700 leading-relaxed">
              هر بطری عطر ما نتیجه ساعت‌ها تحقیق و تکمیل است. ما معتقدیم که عطر 
              نه تنها بویی خوشایند، بلکه بیان شخصیت شماست.
            </p>
          </div>
          
          <div className="relative aspect-square bg-gray-100 overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="کارگاه عطرسازی"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
