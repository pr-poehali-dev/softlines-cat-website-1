import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutPage() {
  const principles = [
    {
      icon: 'Heart',
      title: 'Ответственный подход',
      description: 'Каждый котенок рождается с любовью и заботой. Мы тщательно планируем вязки, учитывая здоровье и характер родителей.'
    },
    {
      icon: 'Activity',
      title: 'Забота о здоровье',
      description: 'Регулярные ветеринарные осмотры, прививки по возрасту, генетическое тестирование производителей.'
    },
    {
      icon: 'Users',
      title: 'Социализация',
      description: 'Котята растут в домашних условиях, привыкают к людям, звукам и бытовым ситуациям с первых дней жизни.'
    },
    {
      icon: 'Award',
      title: 'Стандарты породы',
      description: 'Строгое соблюдение стандартов WCF и TICA, участие в выставках, работа с лучшими линиями разведения.'
    }
  ];

  const team = [
    {
      name: 'Елена Соколова',
      role: 'Основатель питомника',
      description: 'Фелинолог с 15-летним стажем, судья WCF, эксперт по британской породе'
    },
    {
      name: 'Мария Петрова',
      role: 'Заводчик',
      description: 'Специалист по уходу и социализации котят, помощь новым владельцам'
    },
    {
      name: 'Дмитрий Волков',
      role: 'Ветеринарный врач',
      description: 'Контроль здоровья производителей и котят, консультации по вопросам содержания'
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="container">
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">О питомнике SoftLines</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                Питомник SoftLines был основан в 2015 году из искренней любви к британским кошкам. 
                За годы работы мы вырастили более 200 здоровых котят, которые обрели любящие семьи по всей России.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Наша миссия — разведение британских кошек с безупречным здоровьем, устойчивой психикой и 
                выдающимися породными качествами. Мы работаем с лучшими европейскими линиями и постоянно 
                улучшаем генофонд питомника.
              </p>
              <p className="text-lg text-muted-foreground">
                Каждый котенок SoftLines — это результат многолетней селекционной работы, заботы и любви. 
                Мы гордимся тем, что наши выпускники становятся чемпионами выставок и любимцами семей.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg"
                alt="British Shorthair"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Наши принципы разведения</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Условия содержания</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Home" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Просторные вольеры</h3>
              <p className="text-muted-foreground">
                Каждая кошка имеет свое комфортное пространство с игровыми зонами
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Чистота и гигиена</h3>
              <p className="text-muted-foreground">
                Ежедневная уборка, дезинфекция, контроль микроклимата помещений
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Apple" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Премиум питание</h3>
              <p className="text-muted-foreground">
                Корма супер-премиум класса, индивидуальные рационы, свежая вода
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Наша команда</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-8 pb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
