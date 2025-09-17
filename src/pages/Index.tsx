import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ContactModal from "@/components/ContactModal";
import PresentationModal from "@/components/PresentationModal";

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'contact' | 'proposal'>('contact');
  const [presentationOpen, setPresentationOpen] = useState(false);
  const services = [
    {
      title: "Организация питания",
      description: "Полный цикл организации питания для логистических, складских и строительных компаний",
      image: "/img/6140c7f7-bb2d-42b8-856b-3574e114c2fd.jpg",
      features: ["Полный обеденный набор", "Оптимальный вариант", "Экономичный", "Халяльное питание", "Сухие пайки"]
    },
    {
      title: "Сборка и упаковка",
      description: "Профессиональная сборка и упаковка продовольственных и непродовольственных товаров",
      image: "/img/edd31b84-7795-425f-942b-bee49dcc9687.jpg",
      features: ["Собственное оборудование", "Складское хранение", "Аутстаффинг", "Food и Non-food товары"]
    },
    {
      title: "Химчистка спецодежды",
      description: "Профессиональная стирка и химчистка рабочей одежды для промышленных предприятий",
      image: "/img/9a9fab5e-0ffd-4843-87eb-ee2e630ddd57.jpg",
      features: ["Промышленная стирка", "Химчистка", "Сушка и глажка", "Упаковка", "Доставка"]
    }
  ];

  const clients = [
    { name: "Озон", logo: "https://cdn.poehali.dev/files/7ea9bfd7-c965-438b-b339-81b898f92a55.jpeg" },
    { name: "Вайлдберриз", logo: "https://cdn.poehali.dev/files/ece84520-7335-4aa4-99ce-6e9fa1447e7e.jpg" },
    { name: "Почта России", logo: "https://cdn.poehali.dev/files/91c0c85a-70be-4865-a53c-149b318a9085.jpg" },
    { name: "ГК ПИК", logo: "https://cdn.poehali.dev/files/f8ca4a18-6af1-4997-9215-81c292792e74.jpg" },
    { name: "Гранель", logo: "https://cdn.poehali.dev/files/0c523bcb-745e-4071-b2b6-d2f41c857ec0.jpg" }
  ];

  const menuOptions = [
    {
      name: "Полный",
      description: "Первое, второе, салат, булочка, напиток",
      icon: "ChefHat"
    },
    {
      name: "Оптимальный", 
      description: "Первое, второе, салат или напиток",
      icon: "Utensils"
    },
    {
      name: "Экономичный",
      description: "Первое, второе",
      icon: "DollarSign"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
              <a href="#clients" className="text-gray-700 hover:text-primary transition-colors">Клиенты</a>
              <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              15 лет надежного партнерства
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Ведущий поставщик B2B услуг в сфере организации питания и логистических решений. 
              Обслуживаем крупнейшие компании России с полным циклом услуг.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => {
                  setModalType('contact');
                  setModalOpen(true);
                }}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white hover:text-slate-900"
                onClick={() => setPresentationOpen(true)}
              >
                <Icon name="FileText" size={20} className="mr-2" />
                <span>Презентация услуг</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для бизнеса с собственной инфраструктурой и опытной командой
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Details */}
      <section id="catering" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Организация питания</h3>
              <p className="text-lg text-gray-600">
                Профессиональные решения для питания сотрудников логистических, складских и строительных компаний
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {menuOptions.map((option, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon name={option.icon} size={32} className="text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-green-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <Icon name="CheckCircle" size={24} className="text-green-600 mr-2" />
                Дополнительные возможности
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Beef" size={20} className="text-green-600" />
                  <span>Мясо кур, рыба, говядина, свинина</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Star" size={20} className="text-green-600" />
                  <span>Сертификат Халяль</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-green-600" />
                  <span>Еженедельное согласование меню</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Moon" size={20} className="text-green-600" />
                  <span>Сухие пайки для ночных смен</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Services */}
      <section id="packaging" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Сборка и упаковка заказов</h3>
              <p className="text-lg text-gray-600">
                Современное оборудование и квалифицированный персонал для обработки товаров любой сложности
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Settings" size={24} className="text-primary mr-2" />
                  Наше оборудование
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Icon name="Package" size={18} className="text-green-600" />
                    <span>Упаковочное оборудование</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Truck" size={18} className="text-green-600" />
                    <span>Погрузочно-разгрузочная техника</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Warehouse" size={18} className="text-green-600" />
                    <span>Складское оборудование</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Icon name="Users" size={24} className="text-primary mr-2" />
                  Наши возможности
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Icon name="ShoppingCart" size={18} className="text-green-600" />
                    <span>Продовольственные товары</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Box" size={18} className="text-green-600" />
                    <span>Товары Non-food</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Clock" size={18} className="text-green-600" />
                    <span>Временное хранение</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="UserCheck" size={18} className="text-green-600" />
                    <span>Аутстаффинг персонала</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={24} className="text-blue-600 mt-1" />
                <div>
                  <h5 className="font-semibold text-blue-900 mb-2">Логистика</h5>
                  <p className="text-blue-800">
                    Мы работаем с транспортом заказчиков и поставщиков, обеспечивая 
                    гибкость и оптимизацию логистических процессов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши клиенты</h3>
            <p className="text-lg text-gray-600">
              Нам доверяют ведущие компании России
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {clients.map((client, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center mb-3 h-16">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{client.name}</h4>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-slate-100 rounded-lg p-8">
              <img 
                src="/img/7347b07e-d2fc-439b-8077-13a2c597e6fd.jpg" 
                alt="Наша команда"
                className="w-full max-w-2xl mx-auto rounded-lg mb-6"
              />
              <h4 className="text-xl font-semibold mb-3">Опыт и квалификация</h4>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Наш менеджмент и персонал обладают необходимым опытом и квалификацией для работы в сфере 
                организации питания и логистических услуг. 15 лет успешной работы на рынке B2B.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-300 mb-8">
              Готовы обсудить ваши потребности в организации питания и логистических услуг
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-300">+7 (923) 808-29-59</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-300">lanchholl@yandex.ru</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Офис</h4>
                <p className="text-gray-300">г. Москва, Калужское шоссе, 56-й км (п Вороновское), квартал 138, дом 1, строение 7</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700"
              onClick={() => {
                setModalType('proposal');
                setModalOpen(true);
              }}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Building2" size={24} className="text-green-600" />
              <span className="font-semibold">Ланч Холл</span>
            </div>
            <p className="text-sm">
              © 2025. Все права защищены. 15 лет надежного партнерства в сфере B2B услуг.
            </p>
          </div>
        </div>
      </footer>

      <ContactModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />

      <PresentationModal 
        isOpen={presentationOpen}
        onClose={() => setPresentationOpen(false)}
      />
    </div>
  );
}