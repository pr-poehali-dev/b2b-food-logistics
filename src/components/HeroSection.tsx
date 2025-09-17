import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onContactClick: () => void;
  onPresentationClick: () => void;
}

export default function HeroSection({ onContactClick, onPresentationClick }: HeroSectionProps) {
  return (
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
              onClick={onContactClick}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-slate-900"
              onClick={onPresentationClick}
            >
              <Icon name="FileText" size={20} className="mr-2" />
              <span>Презентация услуг</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}