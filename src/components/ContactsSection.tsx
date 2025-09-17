import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface ContactsSectionProps {
  onProposalClick: () => void;
}

export default function ContactsSection({ onProposalClick }: ContactsSectionProps) {
  return (
    <>
      <section id="contacts" className="py-16 bg-gradient-to-r from-amber-100 to-orange-100 text-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
            <p className="text-xl text-gray-600 mb-8">
              Готовы обсудить ваши потребности в организации питания и логистических услуг
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Телефон</h4>
                <p className="text-gray-600">+7 (923) 808-29-59</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="text-gray-600">lanchholl@yandex.ru</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={28} className="text-white" />
                </div>
                <h4 className="font-semibold mb-2">Офис</h4>
                <p className="text-gray-600">г. Москва, Калужское шоссе, 56-й км (п Вороновское), квартал 138, дом 1, строение 7</p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={onProposalClick}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Запросить коммерческое предложение
            </Button>
          </div>
        </div>
      </section>

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
    </>
  );
}