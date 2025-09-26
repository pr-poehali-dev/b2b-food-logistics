import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PresentationModal({ isOpen, onClose }: PresentationModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      url: "https://cdn.poehali.dev/files/3ad5d5f0-b3b6-47b7-97e9-707d522e33f4.jpg",
      title: "Фаршированные перцы с пюре",
      description: "Сочные фаршированные перцы с нежным картофельным пюре - сытный и полезный обед"
    },
    {
      url: "https://cdn.poehali.dev/files/e3eba772-ae88-4b8b-87d8-45b1be4462af.jpg",
      title: "Котлеты с рисом и салатом",
      description: "Золотистые котлеты с рассыпчатым рисом, свекольным салатом и зеленью"
    },
    {
      url: "https://cdn.poehali.dev/files/5ae38108-856a-45cf-9c42-66593297b2f0.jpg",
      title: "Макароны с фрикадельками и борщ",
      description: "Аппетитные макароны с тефтелями в томатном соусе, оливье и ароматный борщ с хлебом"
    },
    {
      url: "https://cdn.poehali.dev/files/a736aef6-0f5f-49ad-b6bf-ca7b0d536032.jpg",
      title: "Готовые ланч-боксы с мясом",
      description: "Множество готовых ланч-боксов: мясо с пюре, рис с овощами и мясом - свежее питание каждый день"
    },
    {
      url: "https://cdn.poehali.dev/files/320b0198-b4fa-4cc1-a0d2-b7bff79b75f9.jpg",
      title: "Домашний обед с котлетой",
      description: "Сочная котлета с картофельным пюре, брокколи, морковный салат, суп и хлеб - полноценный обед"
    },
    {
      url: "https://cdn.poehali.dev/files/7e3658fd-633e-42d1-aa07-f41deb44daa3.jpg",
      title: "Домашние ланч-боксы ассорти",
      description: "Разнообразные блюда: мясо с пюре, гречка с печенью, рис с мясом и овощами - полноценные обеды для каждого"
    }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Презентация наших услуг</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Icon name="X" size={28} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          
          {/* Image Gallery */}
          <div className="relative mb-6">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <Icon name="ChevronLeft" size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <Icon name="ChevronRight" size={24} />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>

            {/* Image Description */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {images[currentIndex].title}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {images[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex justify-center gap-2 mb-6">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-green-600 opacity-100' 
                    : 'border-gray-300 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center mb-3">
              <Icon name="CheckCircle" size={24} className="text-green-600 mr-2" />
              <h4 className="text-lg font-semibold text-green-800">
                Качественное питание для вашей команды
              </h4>
            </div>
            <p className="text-green-700 mb-4">
              Мы готовим свежие, вкусные и сбалансированные блюда каждый день. 
              Наша продукция соответствует всем санитарным нормам и стандартам качества.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <Icon name="Users" size={16} className="text-green-600 mr-2" />
                <span>500+ порций ежедневно</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Clock" size={16} className="text-green-600 mr-2" />
                <span>Своевременная доставка</span>
              </div>
              <div className="flex items-center justify-center">
                <Icon name="Award" size={16} className="text-green-600 mr-2" />
                <span>15 лет опыта</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6 bg-gray-50 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            onClick={onClose}
            variant="outline"
            className="flex-1 sm:flex-none"
          >
            Закрыть презентацию
          </Button>
          <Button 
            onClick={() => {
              // Здесь можно добавить логику для перехода к форме заказа
              onClose();
              // Например, открыть форму ContactModal
            }}
            className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Заказать питание
          </Button>
        </div>
      </div>
    </div>
  );
}