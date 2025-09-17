import Icon from "@/components/ui/icon";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Building2" size={32} className="text-primary" />
            <div>
              <h1 className="text-2xl font-bold text-primary">Ланч Холл</h1>
              <p className="text-sm text-gray-600">Корпоративные услуги</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#catering" className="text-gray-700 hover:text-primary transition-colors">Питание</a>
            <a href="#packaging" className="text-gray-700 hover:text-primary transition-colors">Упаковка</a>
            <a href="#laundry" className="text-gray-700 hover:text-primary transition-colors">Химчистка</a>
            <a href="#clients" className="text-gray-700 hover:text-primary transition-colors">Клиенты</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </div>
    </header>
  );
}