import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CateringSection from "@/components/CateringSection";
import PackagingSection from "@/components/PackagingSection";
import LaundrySection from "@/components/LaundrySection";
import ClientsSection from "@/components/ClientsSection";
import ContactsSection from "@/components/ContactsSection";
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
      features: ["Полный обеденный набор", "Оптимальный вариант", "Экономичный", "Халяльное питание", "Сухие пайки", "От 5 000 рублей"]
    },
    {
      title: "Сборка и упаковка",
      description: "Профессиональная сборка и упаковка продовольственных и непродовольственных товаров",
      image: "/img/edd31b84-7795-425f-942b-bee49dcc9687.jpg",
      features: ["Собственное оборудование", "Складское хранение", "Аутстаффинг", "Food и Non-food товары", "От 120 000 рублей"]
    },
    {
      title: "Химчистка спецодежды",
      description: "Профессиональная стирка и химчистка рабочей одежды для промышленных предприятий",
      image: "/img/9a9fab5e-0ffd-4843-87eb-ee2e630ddd57.jpg",
      features: ["Промышленная стирка", "Химчистка", "Сушка и глажка", "Упаковка", "Доставка", "От 15 000 рублей"]
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

  const handleContactClick = () => {
    setModalType('contact');
    setModalOpen(true);
  };

  const handleProposalClick = () => {
    setModalType('proposal');
    setModalOpen(true);
  };

  const handlePresentationClick = () => {
    setPresentationOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onContactClick={handleContactClick} />
      
      <HeroSection 
        onContactClick={handleContactClick}
        onPresentationClick={handlePresentationClick}
      />
      
      <AboutSection />
      
      <ServicesSection services={services} />
      
      <CateringSection menuOptions={menuOptions} />
      
      <PackagingSection />
      
      <LaundrySection />
      
      <ClientsSection clients={clients} />
      
      <ContactsSection onProposalClick={handleProposalClick} />

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