import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface MenuOption {
  name: string;
  description: string;
  icon: string;
}

interface CateringSectionProps {
  menuOptions: MenuOption[];
}

export default function CateringSection({ menuOptions }: CateringSectionProps) {
  return (
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
  );
}