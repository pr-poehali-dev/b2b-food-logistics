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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Основная информация */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon name="UtensilsCrossed" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Корпоративное питание</h3>
                  <p className="text-gray-600">
                    Одним из направлений деятельности является обеспечение питанием компаний, 
                    оказывающих логистические услуги, складских центров и строительных компаний.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon name="Package" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Сборка и упаковка</h3>
                  <p className="text-gray-600">
                    Другое направление – сборка и упаковка заказов собственными силами или 
                    с использованием аутстаффинга. Компания принимает заказы на сборку и упаковку 
                    как продовольственных товаров, так и товаров non-food.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Icon name="Shirt" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Химчистка спецодежды</h3>
                  <p className="text-gray-600">
                    Предоставляем услуги химчистки спецодежды с использованием профессионального 
                    оборудования и качественных материалов.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Преимущества */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-orange-500 p-3 rounded-full inline-block mb-3">
                  <Icon name="Users" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Опытная команда</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Менеджмент и персонал компании обладает необходимым опытом и квалификацией 
                для работы в этих областях.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-orange-500 p-3 rounded-full inline-block mb-3">
                  <Icon name="Building" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Современное оборудование</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Имеющееся оборудование и площади позволяют осуществлять приёмку и хранение сырья 
                для изготовления кулинарных блюд.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-4">
                <div className="bg-orange-500 p-3 rounded-full inline-block mb-3">
                  <Icon name="Warehouse" size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Складские мощности</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Возможность приёмки, временного хранения, сборки и упаковки товаров заказчиков 
                на собственных площадях.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}