import { Card } from "@/components/ui/card";

interface Client {
  name: string;
  logo: string;
}

interface ClientsSectionProps {
  clients: Client[];
}

export default function ClientsSection({ clients }: ClientsSectionProps) {
  return (
    <section id="clients" className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши клиенты</h3>
          <p className="text-lg text-gray-600">
            Нам доверяют ведущие компании России
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-3 h-16">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{client.name}</h4>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-100 rounded-lg p-8">
            <img 
              src="/img/7347b07e-d2fc-439b-8077-13a2c597e6fd.jpg" 
              alt="Наша команда"
              className="w-full max-w-2xl mx-auto rounded-lg mb-6"
            />
            <h4 className="text-xl font-semibold mb-3">Опыт и квалификация</h4>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Наш менеджмент и персонал обладают необходимым опытом и квалификацией для работы в сфере 
              организации питания и логистических услуг. 15 лет успешной работы на рынке B2B.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}