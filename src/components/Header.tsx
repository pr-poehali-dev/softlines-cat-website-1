import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Главная' },
    { id: 'about', label: 'О питомнике' },
    { id: 'producers', label: 'Производители' },
    { id: 'kittens', label: 'Котята' },
    { id: 'gallery', label: 'Галерея' },
    { id: 'exhibitions', label: 'Выставки' },
    { id: 'blog', label: 'Блог' },
    { id: 'articles', label: 'Статьи' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="text-4xl">🐱</div>
          <div>
            <h1 className="text-2xl font-bold text-primary">SoftLines</h1>
            <p className="text-xs text-muted-foreground">Питомник британских кошек</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                currentPage === item.id ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Button 
          variant="outline" 
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <nav className="container py-4 flex flex-col gap-3">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-4 py-2 rounded-md transition-colors hover:bg-muted ${
                  currentPage === item.id ? 'bg-muted text-primary font-medium' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}