import Icon from "@/components/ui/icon";

export default function PackagingSection() {
  return (
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
  );
}