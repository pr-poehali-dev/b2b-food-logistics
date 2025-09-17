import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-2 rounded-lg">
              <Icon name="UtensilsCrossed" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">EDA-CITI</h1>
              <p className="text-sm text-gray-600">Комплексные решения</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#catering" className="text-gray-700 hover:text-primary transition-colors">Питание</a>
              <a href="#packaging" className="text-gray-700 hover:text-primary transition-colors">Упаковка</a>
              <a href="#laundry" className="text-gray-700 hover:text-primary transition-colors">Химчистка</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Заказать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}