"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

const faqData = [
  {
    id: 1,
    category: 'سفارش',
    question: 'چگونه می‌توانم سفارش دهم؟',
    answer: 'برای ثبت سفارش، محصول مورد نظر خود را انتخاب کرده و به سبد خرید اضافه کنید. سپس مراحل پرداخت را تکمیل کنید.'
  },
  {
    id: 2,
    category: 'ارسال',
    question: 'زمان ارسال چقدر است؟',
    answer: 'ارسال محصولات در تهران ۱-۲ روز کاری و در سایر شهرها ۳-۵ روز کاری زمان می‌برد.'
  },
  {
    id: 3,
    category: 'پرداخت',
    question: 'روش‌های پرداخت چیست؟',
    answer: 'شما می‌توانید از طریق کارت‌های بانکی، درگاه‌های آنلاین و یا پرداخت در محل سفارش خود را پرداخت کنید.'
  },
  {
    id: 4,
    category: 'محصولات',
    question: 'آیا محصولات اصل هستند؟',
    answer: 'تمامی محصولات ما ۱۰۰٪ اصل و با ضمانت اصالت ارائه می‌شوند. در صورت عدم اصالت، کل مبلغ بازگردانده می‌شود.'
  },
  {
    id: 5,
    category: 'بازگشت',
    question: 'آیا امکان بازگشت کالا وجود دارد؟',
    answer: 'بله، تا ۷ روز پس از دریافت محصول، در صورت عدم رضایت می‌توانید کالا را بازگردانید.'
  },
  {
    id: 6,
    category: 'تخفیف',
    question: 'چگونه از تخفیف‌ها استفاده کنم؟',
    answer: 'کدهای تخفیف را در مرحله پرداخت وارد کنید. همچنین عضویت در خبرنامه برای اطلاع از تخفیف‌های ویژه توصیه می‌شود.'
  },
  {
    id: 7,
    category: 'حساب کاربری',
    question: 'چگونه حساب کاربری ایجاد کنم؟',
    answer: 'روی گزینه ورود/ثبت نام کلیک کرده و اطلاعات خود را وارد کنید. پس از تایید ایمیل، حساب شما فعال می‌شود.'
  },
  {
    id: 8,
    category: 'پشتیبانی',
    question: 'چگونه با پشتیبانی تماس بگیرم؟',
    answer: 'می‌توانید از طریق تلفن ۰۲۱-۸۸۷۷۶۶۵۵، ایمیل support@ettehad.com یا فرم تماس با ما در ارتباط باشید.'
  }
]

const categories = ['همه', 'سفارش', 'ارسال', 'پرداخت', 'محصولات', 'بازگشت', 'تخفیف', 'حساب کاربری', 'پشتیبانی']

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('همه')
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFAQs = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'همه' || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">سوالات متداول</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            پاسخ سوالات رایج در مورد خرید، ارسال و خدمات ما
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="جستجو در سوالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 ${
                  selectedCategory === category 
                    ? 'bg-yellow-600 hover:bg-yellow-700' 
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(item.id)}
              >
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-lg">{item.question}</span>
                  </div>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.includes(item.id) && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              هیچ سوالی با این جستجو پیدا نشد.
            </p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="bg-white rounded-lg p-8 mt-12 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            سوال شما پاسخ داده نشد؟
          </h3>
          <p className="text-gray-600 mb-6">
            تیم پشتیبانی ما آماده پاسخگویی به سوالات شماست
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-zarinan inline-block px-6 py-3 rounded-lg">
              تماس با ما
            </a>
            <a href="tel:02188776655" className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              تماس تلفنی
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
