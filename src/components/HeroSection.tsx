import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onContactClick: () => void;
  onPresentationClick: () => void;
}

export default function HeroSection({ onContactClick, onPresentationClick }: HeroSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  Комплексные обеды с доставкой
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Качественное питание для вашего офиса
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Доставляем свежие и вкусные обеды прямо в ваш офис. 
                15 лет опыта в сфере корпоративного питания. 
                Здоровое меню каждый день.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-base font-medium"
                  onClick={onContactClick}
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать обед
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium"
                  onClick={onPresentationClick}
                >
                  <Icon name="FileText" size={20} className="mr-2" />
                  Меню на неделю
                </Button>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-block bg-orange-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-600">15+</div>
                    <div className="text-sm text-gray-600 mt-1">лет опыта</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">500+</div>
                    <div className="text-sm text-gray-600 mt-1">клиентов</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">50</div>
                    <div className="text-sm text-gray-600 mt-1">блюд в меню</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600">100%</div>
                    <div className="text-sm text-gray-600 mt-1">качество</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}