import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  category: string;
  description: string;
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('all');

  const images: GalleryImage[] = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      title: 'Аристократ',
      category: 'Котята',
      description: 'Голубой британский котенок, 3 месяца. Игривый и ласковый малыш с янтарными глазами.'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      title: 'Lady Margot SoftLines',
      category: 'Производители',
      description: 'Лиловая британская кошка, производительница. Grand Champion, Best Female 2022.'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      title: 'Барон',
      category: 'Котята',
      description: 'Шоколадный британский котенок. Активный, любопытный, с отличным породным типом.'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      title: 'Lord Byron SoftLines',
      category: 'Производители',
      description: 'Голубой британский кот, производитель. Grand International Champion, многократный Best in Show.'
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      title: 'Мелисса',
      category: 'Котята',
      description: 'Лиловая британская кошечка, 4 месяца. Спокойная и нежная, идеальна для семьи.'
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      title: 'Duke of Westminster',
      category: 'Производители',
      description: 'Шоколадный британский кот, производитель. International Champion, Winner Show 2023.'
    },
    {
      id: 7,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      title: 'Игровая комната',
      category: 'Питомник',
      description: 'Просторная игровая комната для социализации котят с разнообразными игрушками.'
    },
    {
      id: 8,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      title: 'Графиня',
      category: 'Котята',
      description: 'Голубая британская кошечка. Элегантная, умная, с безупречным породным типом.'
    },
    {
      id: 9,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      title: 'Выставка WCF',
      category: 'Выставки',
      description: 'Lord Byron на международной выставке WCF "Зимняя сказка". Best in Show победитель.'
    },
    {
      id: 10,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      title: 'Новый помет',
      category: 'Котята',
      description: 'Четыре малыша от Lady Margot и Lord Byron в возрасте 2 недель.'
    },
    {
      id: 11,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      title: 'Lady Margot с котятами',
      category: 'Питомник',
      description: 'Заботливая мама Lady Margot ухаживает за своими малышами.'
    },
    {
      id: 12,
      url: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      title: 'Вручение наград',
      category: 'Выставки',
      description: 'Момент триумфа — Duke получает титул Winner Show на выставке TICA.'
    }
  ];

  const categories = ['Все фото', 'Котята', 'Производители', 'Выставки', 'Питомник'];

  const filteredImages = images.filter(image => {
    return categoryFilter === 'all' || image.category === categoryFilter;
  });

  return (
    <>
      <div className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Фотогалерея</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Наши британцы: котята, производители и моменты из жизни питомника
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant={categoryFilter === (index === 0 ? 'all' : category) ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2"
                onClick={() => setCategoryFilter(index === 0 ? 'all' : category)}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <Badge className="mb-2 bg-white/20 backdrop-blur-sm border-0 text-white">
                        {image.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="ZoomIn" size={20} className="text-primary" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <Icon name="ImageOff" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Нет фотографий в этой категории</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon name="X" size={20} className="text-white" />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="p-6 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 text-white">
                <Badge className="mb-3 bg-white/20 backdrop-blur-sm border-0 text-white">
                  {selectedImage.category}
                </Badge>
                <h2 className="text-3xl font-bold mb-2">{selectedImage.title}</h2>
                <p className="text-white/90 text-lg">{selectedImage.description}</p>
              </div>

              <div className="absolute top-1/2 left-4 -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
                    setSelectedImage(filteredImages[prevIndex]);
                  }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronLeft" size={24} className="text-white" />
                </button>
              </div>

              <div className="absolute top-1/2 right-4 -translate-y-1/2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
                    const nextIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
                    setSelectedImage(filteredImages[nextIndex]);
                  }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronRight" size={24} className="text-white" />
                </button>
              </div>

              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
                {filteredImages.map((img, index) => (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      img.id === selectedImage.id
                        ? 'bg-white w-8'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
