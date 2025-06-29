
import { Link } from 'react-router-dom';
import { Upload, Link as LinkIcon, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Homepage = () => {
  const advantages = [
    'Professioneller 3D-Druck (FDM, SLA, SLS)',
    'Maßgeschneiderte Modelle basierend auf Amazon-Links',
    'Materialwahl, Größenanpassung & Farboptionen',
    'Schneller Service & Lieferung innerhalb weniger Tage',
    'Transparente Preise & persönliche Beratung'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            3D-Druck leicht gemacht – Von Datei oder Amazon-Link zum fertigen Objekt
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Ob du eigene 3D-Dateien besitzt oder ein Produkt auf Amazon in den Händen halten möchtest – 
            wir bringen deine Idee in die Realität. Einfach hochladen oder Link schicken – wir erledigen den Rest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link to="/upload">
                <Upload className="mr-2 h-5 w-5" />
                🔼 Datei hochladen
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
              <Link to="/amazon">
                <LinkIcon className="mr-2 h-5 w-5" />
                🔗 Amazon-Link einreichen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Vorteile</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex items-start space-x-3">
                  <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{advantage}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit für deinen ersten 3D-Druck?</h2>
          <p className="text-xl mb-8">Starte jetzt und erlebe, wie einfach 3D-Druck sein kann!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/upload">Jetzt starten</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-blue-600 hover:text-blue-700">
              <Link to="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
