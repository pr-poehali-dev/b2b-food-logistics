import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О компании</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Комплексные решения для бизнеса с опытным персоналом и современным оборудованием
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {/* Корпоративное питание */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="UtensilsCrossed" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Корпоративное питание</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Обеспечение питанием компаний, оказывающих логистические услуги, 
              складских центров и строительных компаний.
            </p>
          </div>

          {/* Сборка и упаковка */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="Package" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Сборка и упаковка</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Сборка и упаковка заказов собственными силами или с использованием аутстаффинга. 
              Принимаем заказы как продовольственных товаров, так и товаров non-food.
            </p>
          </div>

          {/* Химчистка спецодежды */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="Shirt" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Химчистка спецодежды</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Услуги химчистки спецодежды с использованием профессионального 
              оборудования и качественных материалов.
            </p>
          </div>

          {/* Опытная команда */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Опытная команда</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Менеджмент и персонал компании обладает необходимым опытом и квалификацией 
              для работы в этих областях.
            </p>
          </div>

          {/* Современное оборудование */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="Building" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Современное оборудование</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Имеющееся оборудование и площади позволяют осуществлять приёмку и хранение сырья 
              для изготовления кулинарных блюд.
            </p>
          </div>

          {/* Складские мощности */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="bg-primary p-3 rounded-full inline-block mb-3">
                <Icon name="Warehouse" size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Складские мощности</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Возможность приёмки, временного хранения, сборки и упаковки товаров заказчиков 
              на собственных площадях.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}