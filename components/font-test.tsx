export default function FontTest() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-4xl font-bold">تست فونت IRANSansXFaNum</h1>
      <p className="text-xl font-normal">این متن با وزن نرمال است</p>
      <p className="text-xl font-medium">این متن با وزن متوسط است</p>
      <p className="text-xl font-semibold">این متن با وزن نیمه ضخیم است</p>
      <p className="text-xl font-bold">این متن با وزن ضخیم است</p>
      <p className="text-xl font-black">این متن با وزن خیلی ضخیم است</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">تست اعداد فارسی:</h2>
        <p className="text-lg">۱۲۳۴۵۶۷۸۹۰</p>
        <p className="text-lg">قیمت: ۲,۵۰۰,۰۰۰ تومان</p>
        <p className="text-lg">تخفیف: ۳۰٪</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">تست متن‌های مختلف:</h2>
        <p className="text-lg">فروشگاه آنلاین عطر و ادکلن اتحاد</p>
        <p className="text-lg">بهترین برندهای عطر جهان</p>
        <p className="text-lg">ضمانت اصالت ۱۰۰٪</p>
      </div>
    </div>
  )
}
