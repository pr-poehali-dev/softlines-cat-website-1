import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function ContactsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contacts = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
      description: 'Ежедневно с 10:00 до 20:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@softlines.ru',
      link: 'mailto:info@softlines.ru',
      description: 'Ответим в течение 24 часов'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, Россия',
      link: null,
      description: 'Посещение по предварительной записи'
    },
    {
      icon: 'MessageCircle',
      title: 'WhatsApp',
      value: '+7 (999) 123-45-67',
      link: 'https://wa.me/79991234567',
      description: 'Быстрая связь в мессенджере'
    }
  ];

  const socials = [
    { name: 'Instagram', icon: 'Instagram', link: 'https://instagram.com', color: 'bg-pink-500' },
    { name: 'Telegram', icon: 'Send', link: 'https://t.me', color: 'bg-blue-500' },
    { name: 'VK', icon: 'MessageCircle', link: 'https://vk.com', color: 'bg-indigo-500' }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Свяжитесь с нами удобным способом — мы всегда рады помочь!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Как с нами связаться</h2>
            
            <div className="space-y-4 mb-8">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={22} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{contact.title}</h3>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            className="text-primary hover:underline font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-medium">{contact.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h3 className="font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md`}
                    title={social.name}
                  >
                    <Icon name={social.icon as any} size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Сообщение *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Расскажите, чем мы можем помочь..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Отправить сообщение
                    <Icon name="Send" size={18} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <section className="bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">График работы</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Телефон и мессенджеры</h3>
                <p className="text-muted-foreground">Ежедневно с 10:00 до 20:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Icon name="Users" size={32} className="text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Посещение питомника</h3>
                <p className="text-muted-foreground">По предварительной записи</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex gap-3">
              <Icon name="Info" size={20} className="text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-800">
                <strong>Важно:</strong> Для посещения питомника необходима предварительная запись. 
                Это помогает нам обеспечить комфортные условия для встречи и уделить вам максимум внимания.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
