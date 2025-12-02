import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function ExhibitionsPage() {
  const upcomingExhibitions = [
    {
      name: 'Международная выставка кошек WCF',
      date: '15-16 февраля 2025',
      location: 'Крокус Экспо, Москва',
      description: 'Представляем наших новых производителей и молодых животных. Приглашаем познакомиться с питомником!',
      isRegistered: true
    },
    {
      name: 'Весенняя выставка TICA',
      date: '22-23 марта 2025',
      location: 'КВЦ Сокольники, Москва',
      description: 'Участвуем в рингах British Shorthair. Ждем встречи с любителями породы!',
      isRegistered: true
    },
    {
      name: 'Летний чемпионат кошек',
      date: '14-15 июня 2025',
      location: 'Экспоцентр, Санкт-Петербург',
      description: 'Первый выезд в Санкт-Петербург с нашими чемпионами.',
      isRegistered: false
    }
  ];

  const pastExhibitions = [
    {
      name: 'Зимняя сказка WCF 2024',
      date: '9-10 декабря 2024',
      location: 'Москва',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      awards: [
        { cat: 'Lord Byron SoftLines', title: 'Best in Show', ring: 'WCF' },
        { cat: 'Lady Margot SoftLines', title: 'Best Female', ring: 'Adult' }
      ],
      description: 'Триумфальное выступление наших производителей! Lord Byron стал лучшим на выставке среди всех пород.'
    },
    {
      name: 'Осенний кубок TICA 2024',
      date: '20-21 октября 2024',
      location: 'Москва',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      awards: [
        { cat: 'Duke of Westminster', title: 'Winner Show', ring: 'British' },
        { cat: 'Котенок Аристократ', title: 'Best Kitten', ring: '3-6 months' }
      ],
      description: 'Дебют нашего молодого производителя Duke завершился победой в породном ринге.'
    },
    {
      name: 'Летняя выставка WCF 2024',
      date: '15-16 июня 2024',
      location: 'Санкт-Петербург',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      awards: [
        { cat: 'Lady Margot SoftLines', title: 'Grand Champion', ring: 'Adult Female' },
        { cat: 'Lord Byron SoftLines', title: 'Best Male', ring: 'Champion' }
      ],
      description: 'Первый выезд в Санкт-Петербург оказался успешным для всей команды питомника.'
    }
  ];

  const achievements = [
    {
      year: '2024',
      count: 12,
      titles: 'выставок',
      icon: 'Calendar'
    },
    {
      year: '2024',
      count: 8,
      titles: 'Best in Show',
      icon: 'Trophy'
    },
    {
      year: '2024',
      count: 15,
      titles: 'титулов',
      icon: 'Award'
    },
    {
      year: '2020-2024',
      count: 45,
      titles: 'наград',
      icon: 'Medal'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Выставки</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Следите за нашими достижениями и приходите познакомиться на выставках
        </p>

        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{item.count}</div>
                  <div className="text-sm text-muted-foreground mb-1">{item.titles}</div>
                  <div className="text-xs text-muted-foreground">{item.year}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="upcoming">Предстоящие</TabsTrigger>
            <TabsTrigger value="past">Прошедшие</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming">
            <div className="space-y-6">
              {upcomingExhibitions.map((exhibition, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="CalendarClock" size={24} className="text-accent" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold mb-1">{exhibition.name}</h3>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Icon name="Calendar" size={14} />
                                {exhibition.date}
                              </Badge>
                              <Badge variant="outline" className="flex items-center gap-1">
                                <Icon name="MapPin" size={14} />
                                {exhibition.location}
                              </Badge>
                              {exhibition.isRegistered && (
                                <Badge className="bg-green-500 text-white border-0">
                                  <Icon name="CheckCircle" size={14} className="mr-1" />
                                  Участвуем
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground ml-15">{exhibition.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                      <div className="flex items-start gap-3">
                        <Icon name="Users" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold mb-1">Приходите познакомиться!</h4>
                          <p className="text-sm text-muted-foreground">
                            Мы будем рады встрече на выставке. Вы сможете увидеть наших производителей вживую, 
                            задать вопросы о породе и узнать о доступных котятах.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-muted/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Info" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Как встретиться с нами на выставке?</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Напишите нам заранее в WhatsApp или позвоните — мы подскажем точное расположение нашего стенда</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>Следите за анонсами в наших социальных сетях — публикуем фото и видео прямо с выставок</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>На выставке можно познакомиться с нашими кошками, узнать о котятах и получить консультацию</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="past">
            <div className="space-y-8">
              {pastExhibitions.map((exhibition, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 relative h-64 md:h-auto">
                      <img 
                        src={exhibition.image}
                        alt={exhibition.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Trophy" size={24} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{exhibition.name}</h3>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {exhibition.date}
                            </Badge>
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {exhibition.location}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exhibition.description}</p>

                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Icon name="Award" size={18} className="text-accent" />
                          Награды
                        </h4>
                        <div className="space-y-2">
                          {exhibition.awards.map((award, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                              <Icon name="Medal" size={20} className="text-accent" />
                              <div className="flex-1">
                                <p className="font-medium">{award.cat}</p>
                                <p className="text-sm text-muted-foreground">{award.title} • {award.ring}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Handshake" size={40} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Встретимся на выставке!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Приходите познакомиться с нами и нашими британцами на ближайшей выставке. 
              Это отличная возможность увидеть кошек вживую, задать вопросы и узнать больше о породе.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://wa.me/79991234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <Icon name="MessageCircle" size={20} />
                Написать в WhatsApp
              </a>
              <a 
                href="tel:+79991234567"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:scale-105 transition-transform"
              >
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
