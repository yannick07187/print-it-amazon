
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Preise = () => {
  const pricing = [
    {
      service: '3D-Druck (eigene Datei)',
      price: 'ab 9,90 €',
      description: 'Direkt drucken lassen mit deiner fertigen 3D-Datei'
    },
    {
      service: 'Amazon-Modell + Druck',
      price: 'ab 29,90 €',
      description: 'Modellierung basierend auf Amazon-Produkt inklusive Druck'
    },
    {
      service: 'Nur Modellierung (ohne Druck)',
      price: 'ab 19,90 €',
      description: 'Erstellung eines 3D-Modells basierend auf deinen Vorgaben'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Individuelle Preise – fair & transparent
          </h1>
          <p className="text-xl text-gray-600">
            Alle Preise verstehen sich als Startpreise und hängen von Größe, Material und Komplexität ab
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricing.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{item.service}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">{item.price}</div>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto bg-yellow-50 border-yellow-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Wichtiger Hinweis</h3>
            <p className="text-yellow-700">
              Du erhältst immer ein unverbindliches Angebot vorab. Keine versteckten Kosten!
            </p>
          </CardContent>
        </Card>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Preisfaktoren</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Größe', desc: 'Je größer das Objekt, desto mehr Material wird benötigt' },
              { title: 'Material', desc: 'Verschiedene Materialien haben unterschiedliche Kosten' },
              { title: 'Komplexität', desc: 'Detailreiche Modelle benötigen mehr Zeit und Präzision' },
              { title: 'Stückzahl', desc: 'Mengenrabatte ab 5 Stück verfügbar' }
            ].map((factor, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{factor.title}</h3>
                  <p className="text-sm text-gray-600">{factor.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preise;
