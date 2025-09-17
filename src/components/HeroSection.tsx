import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeroSectionProps {
  onContactClick: () => void;
  onPresentationClick: () => void;
}

export default function HeroSection({ onContactClick, onPresentationClick }: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-r from-amber-100 to-orange-100 text-gray-800 py-20">
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
              className="bg-primary hover:bg-primary/90"
              onClick={onContactClick}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с нами
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-primary border-primary bg-white/70 hover:bg-primary hover:text-white"
              onClick={onPresentationClick}
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Презентация услуг
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}