import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import KittenCard from '@/components/KittenCard';
import BookingModal from '@/components/BookingModal';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedKitten, setSelectedKitten] = useState<string | undefined>();

  const kittens = [
    {
      name: 'Аристократ',
      gender: 'male' as const,
      birthDate: '15.09.2024',
      color: 'Голубой',
      price: '35 000 ₽',
      status: 'available' as const,
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      personality: 'Ласковый, игривый'
    },
    {
      name: 'Мелисса',
      gender: 'female' as const,
      birthDate: '20.09.2024',
      color: 'Лиловый',
      price: '40 000 ₽',
      status: 'available' as const,
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      personality: 'Спокойная, нежная'
    },
    {
      name: 'Барон',
      gender: 'male' as const,
      birthDate: '05.10.2024',
      color: 'Шоколадный',
      price: '38 000 ₽',
      status: 'reserved' as const,
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      personality: 'Активный, любопытный'
    }
  ];

  const advantages = [
    {
      icon: 'Shield',
      title: 'Здоровые котята',
      description: 'Все котята с ветеринарным паспортом, прививками и документами'
    },
    {
      icon: 'Award',
      title: 'Чистые линии',
      description: 'Разведение с учетом лучших мировых стандартов породы'
    },
    {
      icon: 'MessageCircle',
      title: 'Поддержка',
      description: 'Консультации по уходу и содержанию на протяжении всей жизни'
    },
    {
      icon: 'Truck',
      title: 'Доставка',
      description: 'Безопасная доставка котят по всей России'
    }
  ];

  const reviews = [
    {
      name: 'Анна К.',
      text: 'Взяли котенка месяц назад. Просто влюблены! Здоровый, ласковый, идеально социализированный. Спасибо команде SoftLines!',
      rating: 5
    },
    {
      name: 'Дмитрий М.',
      text: 'Профессиональный подход на всех этапах. Помогли с выбором, документами, дали подробные рекомендации. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена С.',
      text: 'Наша Мелисса - настоящая аристократка! Красивая, с отличным характером. Питомник на высшем уровне.',
      rating: 5
    }
  ];

  const handleBookKitten = (kittenName: string) => {
    setSelectedKitten(kittenName);
    setBookingModalOpen(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Добро пожаловать в мир британских кошек
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Питомник SoftLines — это профессиональное разведение британских короткошерстных кошек с заботой о здоровье, характере и стандартах породы
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => onNavigate('kittens')}>
                  Выбрать котенка
                </Button>
                <Button size="lg" variant="outline" onClick={() => setBookingModalOpen(true)}>
                  Оставить заявку
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg"
                  alt="British Shorthair kitten"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают SoftLines
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Доступные котята
              </h2>
              <p className="text-muted-foreground">
                Наши малыши ждут своих любящих хозяев
              </p>
            </div>
            <Button variant="outline" onClick={() => onNavigate('kittens')}>
              Смотреть всех
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kittens.map((kitten, index) => (
              <KittenCard
                key={index}
                {...kitten}
                onBook={() => handleBookKitten(kitten.name)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Отзывы наших клиентов
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы завести британца?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Оставьте заявку, и мы поможем подобрать идеального котенка для вашей семьи
          </p>
          <Button size="lg" onClick={() => setBookingModalOpen(true)}>
            Оставить заявку
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <BookingModal 
        open={bookingModalOpen}
        onOpenChange={setBookingModalOpen}
        kittenName={selectedKitten}
      />
    </>
  );
}
