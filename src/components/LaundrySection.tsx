import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function LaundrySection() {
  return (
    <section id="laundry" className="py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Химчистка спецодежды</h3>
            <p className="text-lg text-gray-600">
              Профессиональная стирка и химчистка рабочей одежды для промышленных предприятий
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <img 
                src="/img/9a9fab5e-0ffd-4843-87eb-ee2e630ddd57.jpg" 
                alt="Химчистка спецодежды"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="Shirt" size={24} className="text-blue-600 mr-2" />
                  Виды обработки
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Icon name="Droplets" size={18} className="text-blue-600" />
                    <span>Промышленная стирка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Sparkles" size={18} className="text-blue-600" />
                    <span>Химическая чистка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Wind" size={18} className="text-blue-600" />
                    <span>Профессиональная сушка</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Iron" size={18} className="text-blue-600" />
                    <span>Глажка и отпаривание</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <Icon name="Shield" size={24} className="text-green-600 mr-2" />
                  Типы спецодежды
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Icon name="HardHat" size={18} className="text-green-600" />
                    <span>Строительная спецодежда</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Factory" size={18} className="text-green-600" />
                    <span>Промышленная униформа</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Truck" size={18} className="text-green-600" />
                    <span>Логистическая одежда</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Icon name="Wrench" size={18} className="text-green-600" />
                    <span>Рабочие комбинезоны</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Быстрая обработка</h4>
              <p className="text-gray-600">Стандартный цикл обработки 24-48 часов</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Award" size={32} className="text-green-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Качество</h4>
              <p className="text-gray-600">Современное оборудование и проверенные технологии</p>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Логистика</h4>
              <p className="text-gray-600">Забор и доставка готовой одежды</p>
            </Card>
          </div>

          <div className="bg-blue-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4 flex items-center">
              <Icon name="CheckCircle" size={24} className="text-blue-600 mr-2" />
              Преимущества нашей химчистки
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Icon name="Leaf" size={20} className="text-blue-600" />
                <span>Экологически безопасные средства</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={20} className="text-blue-600" />
                <span>Обработка больших объемов</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="FileText" size={20} className="text-blue-600" />
                <span>Полная отчетность по услугам</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-blue-600" />
                <span>Персональный менеджер</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}