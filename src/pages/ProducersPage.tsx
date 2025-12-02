import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function ProducersPage() {
  const males = [
    {
      name: 'Lord Byron SoftLines',
      color: 'Голубой',
      birthDate: '12.03.2020',
      titles: ['Grand International Champion', 'Best in Show (WCF)'],
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      characteristics: ['Крупный костяк', 'Идеальная голова', 'Плюшевая шерсть', 'Янтарные глаза'],
      description: 'Выдающийся производитель с безупречной родословной. Потомки отличаются крепким здоровьем и шоу-качеством.'
    },
    {
      name: 'Duke of Westminster',
      color: 'Шоколадный',
      birthDate: '08.07.2021',
      titles: ['International Champion', 'Winner Show 2023'],
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      characteristics: ['Редкий окрас', 'Отличный тип', 'Стабильная психика', 'Мощная конституция'],
      description: 'Носитель редкого шоколадного окраса, передает потомкам отличную пигментацию и породный тип.'
    }
  ];

  const females = [
    {
      name: 'Lady Margot SoftLines',
      color: 'Лиловый',
      birthDate: '15.05.2020',
      titles: ['Grand Champion', 'Best Female 2022'],
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      characteristics: ['Элегантная', 'Округлая голова', 'Мягкий характер', 'Отличная мать'],
      description: 'Прекрасная производительница с европейскими кровями. Котята наследуют её грацию и спокойный темперамент.'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Производители</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Знакомьтесь с нашими звездами — котами и кошками, которые являются гордостью питомника
        </p>

        <Tabs defaultValue="males" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="males">Коты-производители</TabsTrigger>
            <TabsTrigger value="females">Кошки-производительницы</TabsTrigger>
          </TabsList>

          <TabsContent value="males">
            <div className="grid md:grid-cols-2 gap-8">
              {males.map((cat, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-80 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-500 text-white border-0">
                      ♂ Кот
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-3">{cat.name}</h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Palette" size={18} />
                        <span>Окрас: {cat.color}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Calendar" size={18} />
                        <span>Дата рождения: {cat.birthDate}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Award" size={18} className="text-primary" />
                        Титулы и награды
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.titles.map((title, i) => (
                          <Badge key={i} variant="secondary">{title}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Sparkles" size={18} className="text-primary" />
                        Характерные черты
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.characteristics.map((char, i) => (
                          <Badge key={i} variant="outline">{char}</Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground">{cat.description}</p>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Icon name="CheckCircle" size={18} />
                        <span>Генетическое тестирование пройдено</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="females">
            <div className="grid md:grid-cols-2 gap-8">
              {females.map((cat, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-80 object-cover"
                    />
                    <Badge className="absolute top-4 right-4 bg-pink-500 text-white border-0">
                      ♀ Кошка
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-3">{cat.name}</h2>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Palette" size={18} />
                        <span>Окрас: {cat.color}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Calendar" size={18} />
                        <span>Дата рождения: {cat.birthDate}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Award" size={18} className="text-primary" />
                        Титулы и награды
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.titles.map((title, i) => (
                          <Badge key={i} variant="secondary">{title}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Icon name="Sparkles" size={18} className="text-primary" />
                        Характерные черты
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.characteristics.map((char, i) => (
                          <Badge key={i} variant="outline">{char}</Badge>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground">{cat.description}</p>

                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Icon name="CheckCircle" size={18} />
                        <span>Генетическое тестирование пройдено</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Наши линии разведения</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Dna" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Европейские корни</h3>
                    <p className="text-muted-foreground">
                      Наши производители имеют европейские крови из питомников Великобритании, Германии и Чехии. 
                      Это гарантирует классический британский тип и крепкое здоровье.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Генетическое здоровье</h3>
                    <p className="text-muted-foreground">
                      Все производители проходят тестирование на наследственные заболевания (PKD, HCM). 
                      Мы гарантируем, что котята будут здоровыми и жизнерадостными.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
