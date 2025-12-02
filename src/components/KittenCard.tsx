import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface KittenCardProps {
  name: string;
  gender: 'male' | 'female';
  birthDate: string;
  color: string;
  price: string;
  status: 'available' | 'reserved' | 'sold';
  image: string;
  personality: string;
  onBook: () => void;
}

export default function KittenCard({
  name,
  gender,
  birthDate,
  color,
  price,
  status,
  image,
  personality,
  onBook
}: KittenCardProps) {
  const statusColors = {
    available: 'bg-green-500',
    reserved: 'bg-yellow-500',
    sold: 'bg-gray-500'
  };

  const statusLabels = {
    available: 'Доступен',
    reserved: 'Забронирован',
    sold: 'Продан'
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all hover-scale group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge 
          className={`absolute top-3 right-3 ${statusColors[status]} text-white border-0`}
        >
          {statusLabels[status]}
        </Badge>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
          {gender === 'male' ? '♂' : '♀'}
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Calendar" size={16} />
            <span>Дата рождения: {birthDate}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Palette" size={16} />
            <span>Окрас: {color}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Heart" size={16} />
            <span>Характер: {personality}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t">
          <div className="text-2xl font-bold text-primary">{price}</div>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button 
          className="w-full" 
          onClick={onBook}
          disabled={status === 'sold'}
        >
          {status === 'available' ? 'Забронировать' : status === 'reserved' ? 'В резерве' : 'Продан'}
        </Button>
      </CardFooter>
    </Card>
  );
}
