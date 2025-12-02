import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import KittenCard from '@/components/KittenCard';
import BookingModal from '@/components/BookingModal';

export default function KittensPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedKitten, setSelectedKitten] = useState<string | undefined>();
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [colorFilter, setColorFilter] = useState<string>('all');

  const allKittens = [
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
    },
    {
      name: 'Графиня',
      gender: 'female' as const,
      birthDate: '01.11.2024',
      color: 'Голубой',
      price: '42 000 ₽',
      status: 'available' as const,
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      personality: 'Элегантная, умная'
    }
  ];

  const filteredKittens = allKittens.filter(kitten => {
    if (genderFilter !== 'all' && kitten.gender !== genderFilter) return false;
    if (statusFilter !== 'all' && kitten.status !== statusFilter) return false;
    if (colorFilter !== 'all' && kitten.color !== colorFilter) return false;
    return true;
  });

  const handleBookKitten = (kittenName: string) => {
    setSelectedKitten(kittenName);
    setBookingModalOpen(true);
  };

  return (
    <>
      <section className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Наши котята</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Выберите своего идеального британца из доступных малышей
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-4">Фильтры</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Пол</label>
                <Select value={genderFilter} onValueChange={setGenderFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="male">Котик ♂</SelectItem>
                    <SelectItem value="female">Кошечка ♀</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Окрас</label>
                <Select value={colorFilter} onValueChange={setColorFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="Голубой">Голубой</SelectItem>
                    <SelectItem value="Лиловый">Лиловый</SelectItem>
                    <SelectItem value="Шоколадный">Шоколадный</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Статус</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Все" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="available">Доступен</SelectItem>
                    <SelectItem value="reserved">Забронирован</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setGenderFilter('all');
                    setColorFilter('all');
                    setStatusFilter('all');
                  }}
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </div>

          {filteredKittens.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredKittens.map((kitten, index) => (
                <KittenCard
                  key={index}
                  {...kitten}
                  onBook={() => handleBookKitten(kitten.name)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">По выбранным фильтрам котята не найдены</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setGenderFilter('all');
                  setColorFilter('all');
                  setStatusFilter('all');
                }}
              >
                Сбросить фильтры
              </Button>
            </div>
          )}
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
