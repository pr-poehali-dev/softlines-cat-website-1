import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Article {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string[];
}

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const articles: Article[] = [
    {
      id: 1,
      title: 'Как выбрать британского котенка',
      category: 'Выбор котенка',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      excerpt: 'Полное руководство по выбору здорового британского котенка с правильным характером и экстерьером.',
      content: [
        'При выборе британского котенка важно обратить внимание на несколько ключевых факторов, которые помогут вам найти здорового и породистого малыша.',
        'Возраст котенка: Идеальный возраст для переезда в новый дом — 3-4 месяца. К этому времени котенок полностью социализирован, приучен к лотку и получил базовые прививки.',
        'Здоровье: Обязательно проверьте ветеринарный паспорт с отметками о прививках. Котенок должен быть активным, с чистыми глазами и ушами, блестящей шерстью.',
        'Экстерьер: Обратите внимание на округлую голову, плотное тело, короткие лапы и плюшевую шерсть — это признаки породистого британца.',
        'Характер: Понаблюдайте за поведением котенка. Британцы обычно спокойные, но не должны быть вялыми или агрессивными.',
        'Документы: Родословная (метрика) из фелинологической системы (WCF, TICA, FIFe) подтверждает породное происхождение.',
        'Встреча с родителями: Познакомьтесь с родителями котенка — это даст представление о будущем характере и внешности вашего питомца.'
      ]
    },
    {
      id: 2,
      title: 'Питание британских кошек: правила и рекомендации',
      category: 'Питание',
      readTime: '7 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      excerpt: 'Все о правильном питании британских кошек: от выбора корма до режима кормления.',
      content: [
        'Правильное питание — основа здоровья и долголетия вашей британской кошки. Эта порода склонна к полноте, поэтому важно следить за рационом.',
        'Выбор корма: Рекомендуем корма супер-премиум или холистик класса с высоким содержанием мяса (не менее 70%). Избегайте кормов с зерновыми наполнителями.',
        'Сухой или влажный корм: Идеально комбинировать — 70% сухого корма для здоровья зубов и 30% влажного для поддержания водного баланса.',
        'Режим кормления: Взрослых кошек кормят 2 раза в день строго по норме. Котят до 6 месяцев — 3-4 раза в день.',
        'Вода: Всегда должна быть доступна свежая чистая вода. Британцы мало пьют, поэтому можно использовать питьевые фонтанчики.',
        'Запрещенные продукты: Никогда не давайте молоко взрослым кошкам, шоколад, лук, чеснок, кости, жирное мясо, соленое и копченое.',
        'Витамины: При кормлении качественным кормом дополнительные витамины не нужны. Исключение — период линьки и беременность.',
        'Контроль веса: Взрослый британский кот должен весить 5-8 кг, кошка — 3-5 кг. Регулярно взвешивайте питомца.'
      ]
    },
    {
      id: 3,
      title: 'Уход за шерстью британской кошки',
      category: 'Уход',
      readTime: '4 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      excerpt: 'Как сохранить плюшевую шерсть британца здоровой и красивой — простые правила ухода.',
      content: [
        'Плюшевая шерсть — визитная карточка британской породы. Правильный уход поможет сохранить её густоту и красоту.',
        'Вычесывание: Расчесывайте кошку 1-2 раза в неделю специальной щеткой-пуходеркой. В период линьки (весна и осень) — каждый день.',
        'Купание: Британцы не любят воду и в частом купании не нуждаются. Достаточно 2-3 раза в год или перед выставкой.',
        'Шампуни: Используйте только специальные шампуни для кошек, желательно для короткошерстных пород. После мытья тщательно высушите феном.',
        'Колтуны: У британцев колтуны образуются редко благодаря короткой шерсти, но проверяйте зоны за ушами и на животе.',
        'Линька: Период активной линьки длится 2-4 недели. Усильте вычесывание и добавьте в рацион витамины для шерсти.',
        'Профессиональный груминг: Перед выставкой можно обратиться к грумеру для идеальной подготовки шерсти.'
      ]
    },
    {
      id: 4,
      title: 'Здоровье британских кошек: профилактика',
      category: 'Здоровье',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/c5c2c6d0-8938-42ea-b59f-bd1dc01e8e20.jpg',
      excerpt: 'Основные заболевания британских кошек и как их предотвратить.',
      content: [
        'Британские кошки — крепкая порода, но у них есть предрасположенность к определенным заболеваниям.',
        'Гипертрофическая кардиомиопатия (HCM): Наследственное заболевание сердца. Профилактика — генетическое тестирование родителей, УЗИ сердца раз в год.',
        'Поликистоз почек (PKD): Генетическое заболевание. Ответственные заводчики тестируют производителей. Профилактика — правильное питание и регулярные анализы.',
        'Ожирение: Британцы склонны к набору веса. Профилактика — контроль порций, активные игры, отказ от лакомств со стола.',
        'Зубной камень: Накапливается при кормлении только влажным кормом. Профилактика — сухой корм, специальные лакомства для зубов, чистка зубов.',
        'Вакцинация: Обязательные прививки от панлейкопении, калицивироза, ринотрахеита и бешенства. График — в 8-9 недель, ревакцинация через 3-4 недели, далее ежегодно.',
        'Дегельминтизация: Каждые 3 месяца, за 10 дней до вакцинации. Используйте препараты широкого спектра.',
        'Обработка от блох и клещей: Ежемесячно с марта по ноябрь. Даже если кошка не выходит на улицу.',
        'Ветеринарный осмотр: Посещайте ветеринара минимум раз в год для профилактического осмотра и сдачи анализов.'
      ]
    },
    {
      id: 5,
      title: 'Характер британской кошки: что нужно знать',
      category: 'Характер',
      readTime: '5 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/df910f7a-1454-440f-83e4-a03bfc61dedf.jpg',
      excerpt: 'Особенности темперамента британских кошек и как найти общий язык с этой породой.',
      content: [
        'Британские кошки — это аристократы кошачьего мира с уникальным характером.',
        'Независимость: Британцы ценят личное пространство и не любят чрезмерных ласк. Они не будут часами сидеть на руках, но всегда рядом.',
        'Спокойствие: Порода отличается уравновешенным темпераментом. Британцы не устраивают ночных гонок и редко мяукают без причины.',
        'Интеллект: Умные и наблюдательные, быстро усваивают правила дома. Легко приучаются к лотку и когтеточке.',
        'Отношение к детям: Терпеливы с детьми, но не позволят себя тискать. Идеальны для семей с детьми школьного возраста.',
        'Другие животные: Спокойно уживаются с другими кошками и собаками при правильном знакомстве.',
        'Игривость: Котята очень активны, но с возрастом становятся более степенными. Взрослые британцы предпочитают наблюдение играм.',
        'Привязанность: Несмотря на независимость, сильно привязываются к владельцу и скучают в одиночестве. Выбирают одного хозяина в семье.',
        'Стресс: Плохо переносят переезды и смену обстановки. Нуждаются в стабильности и рутине.'
      ]
    },
    {
      id: 6,
      title: 'Подготовка дома к появлению котенка',
      category: 'Выбор котенка',
      readTime: '6 мин',
      image: 'https://cdn.poehali.dev/projects/47159afd-13c8-4fa0-bc4d-957b8d310d5a/files/36064bdc-b742-4c6e-8d83-e27b64455958.jpg',
      excerpt: 'Полный чек-лист: что купить и как подготовить квартиру до приезда британского котенка.',
      content: [
        'Появление котенка в доме — важное событие, требующее подготовки.',
        'Лоток и наполнитель: Купите лоток с высокими бортами (британцы любят копать). Первое время используйте тот же наполнитель, что и заводчик.',
        'Миски: Две керамические или металлические миски — для еды и воды. Располагайте их в разных местах.',
        'Когтеточка: Обязательна! Высокая столбиковая или настенная. Разместите в месте, где котенок проводит много времени.',
        'Переноска: Пластиковая переноска с жесткими стенками для визитов к ветеринару.',
        'Домик/лежанка: Уютное место для сна в тихом уголке. Британцы любят закрытые домики.',
        'Игрушки: Мячики, удочки-дразнилки, мышки. Избегайте мелких деталей, которые можно проглотить.',
        'Корм: Запаситесь тем же кормом, который котенок ел у заводчика. Смену рациона проводите постепенно.',
        'Безопасность: Уберите провода, ядовитые растения, мелкие предметы. Закройте окна сетками.',
        'Ветеринарная аптечка: Средство от блох, антигельминтик, перевязочные материалы, термометр.'
      ]
    }
  ];

  const categories = ['Все статьи', 'Выбор котенка', 'Питание', 'Уход', 'Здоровье', 'Характер'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <div className="py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Полезные статьи</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Все о британских кошках: уход, содержание, здоровье и воспитание
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по статьям..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

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

          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-all cursor-pointer hover-scale"
                  onClick={() => setSelectedArticle(article)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-primary/90">
                      {article.category}
                    </Badge>
                  </div>

                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <span>Читать далее</span>
                        <Icon name="ArrowRight" size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="FileSearch" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Статьи по запросу не найдены</p>
            </div>
          )}
        </div>
      </div>

      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <Badge className="w-fit mb-2">{selectedArticle.category}</Badge>
                <DialogTitle className="text-3xl mb-4">{selectedArticle.title}</DialogTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} />
                    <span>{selectedArticle.readTime} чтения</span>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-4 text-foreground/90 leading-relaxed">
                {selectedArticle.content.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? 'text-lg font-medium' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <div className="flex items-start gap-3">
                  <Icon name="HelpCircle" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Остались вопросы?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Свяжитесь с нами, и мы проконсультируем вас по любым вопросам содержания британских кошек
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/79991234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Icon name="MessageCircle" size={16} />
                        WhatsApp
                      </a>
                      <a
                        href="tel:+79991234567"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        <Icon name="Phone" size={16} />
                        Позвонить
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
