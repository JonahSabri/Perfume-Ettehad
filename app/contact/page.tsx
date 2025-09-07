"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "پیام شما ارسال شد",
      description: "در اسرع وقت با شما تماس خواهیم گرفت.",
    })
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">تماس با ما</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            برای هرگونه سوال، مشاوره یا سفارش با ما در تماس باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yellow-600" />
                  تلفن تماس
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">۰۲۱-۸۸۷۷۶۶۵۵</p>
                <p className="text-gray-600">۰۹۱۲-۳۴۵-۶۷۸۹</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-yellow-600" />
                  ایمیل
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">info@ettehad.com</p>
                <p className="text-gray-600">support@ettehad.com</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-yellow-600" />
                  آدرس
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  تهران، خیابان ولیعصر، نرسیده به میدان ونک، 
                  پلاک ۱۲۳۴، طبقه سوم
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-yellow-600" />
                  ساعات کاری
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰</p>
                <p className="text-gray-600">پنج‌شنبه: ۸:۰۰ - ۱۳:۰۰</p>
                <p className="text-gray-600">جمعه: تعطیل</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>فرم تماس</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">نام و نام خانوادگی *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="نام خود را وارد کنید"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره تماس</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="۰۹۱۲-۳۴۵-۶۷۸۹"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">موضوع *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="موضوع پیام را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">سفارش محصول</SelectItem>
                          <SelectItem value="support">پشتیبانی</SelectItem>
                          <SelectItem value="complaint">شکایت</SelectItem>
                          <SelectItem value="suggestion">پیشنهاد</SelectItem>
                          <SelectItem value="other">سایر</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">پیام *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="پیام خود را اینجا بنویسید..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-zarinan w-full">
                    <Send className="h-4 w-4 ml-2" />
                    ارسال پیام
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
