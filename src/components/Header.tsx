import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="UtensilsCrossed" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">EDA-CITI</h1>
              <p className="text-xs text-gray-500 leading-tight">Комплексные обеды с доставкой</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">О нас</a>
            <a href="#catering" className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">Меню</a>
            <a href="#packaging" className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">Доставка</a>
            <a href="#clients" className="text-sm text-gray-600 hover:text-orange-500 transition-colors font-medium">Контакты</a>
            <a href="#contacts" className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-medium">Заказать</a>
          </nav>
        </div>
      </div>
    </header>
  );
}