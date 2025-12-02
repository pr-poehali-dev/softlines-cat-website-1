import Icon from '@/components/ui/icon';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🐱</div>
              <div>
                <h3 className="text-xl font-bold text-primary">SoftLines</h3>
                <p className="text-xs text-muted-foreground">Питомник британских кошек</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональное разведение британских кошек с заботой о здоровье и характере каждого котенка
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="flex flex-col gap-2">
              {['О питомнике', 'Производители', 'Котята', 'Галерея', 'Выставки', 'Блог', 'Контакты'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => onNavigate(['about', 'producers', 'kittens', 'gallery', 'exhibitions', 'blog', 'contacts'][idx])}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+79991234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={16} />
                +7 (999) 123-45-67
              </a>
              <a href="mailto:info@softlines.ru" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={16} />
                info@softlines.ru
              </a>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a 
                href="https://vk.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
              </a>
              <a 
                href="https://t.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Icon name="Send" size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SoftLines. Все права защищены.</p>
        </div>
      </div>

      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
        title="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={24} className="text-white" />
      </a>
    </footer>
  );
}