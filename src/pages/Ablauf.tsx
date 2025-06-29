
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Ablauf = () => {
  const technologies = [
    {
      name: 'FDM (Filament)',
      description: 'Robust, kostengünstig',
      details: 'Ideal für Prototypen und funktionale Teile'
    },
    {
      name: 'SLA (Harz)',
      description: 'Hochauflösend, für Detailarbeit',
      details: 'Perfekt für miniaturisierte und filigrane Objekte'
    },
    {
      name: 'SLS (Pulver)',
      description: 'Für komplexe Geometrien',
      details: 'Ermöglicht bewegliche Teile und Hohlkörper'
    }
  ];

  const materials = [
    'PLA - Umweltfreundlich und einfach zu drucken',
    'PETG - Chemikalienresistent und transparent',
    'ABS - Robust und hitzebeständig',
    'Resin - Hochdetailliert und glatt',
    'Nylon - Flexibel und sehr robust'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vom Wunsch zum 3D-Objekt – unser Prozess
          </h1>
          <p className="text-xl text-gray-600">
            Moderne Technologien und bewährte Verfahren für beste Ergebnisse
          </p>
        </div>

        {/* Technologies */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Unsere Technologien</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{tech.name}</CardTitle>
                  <p className="text-gray-600">{tech.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{tech.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Materials */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Materialien</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{material}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Farben</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                    <span>Weiß</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded"></div>
                    <span>Schwarz</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span>Transparent</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">Sonderfarben auf Anfrage</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Größenbereich</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Mini</h4>
                    <p className="text-sm text-gray-600">Schlüsselanhänger, Schmuck</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Standard</h4>
                    <p className="text-sm text-gray-600">Haushalts- und Dekogegenstände</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Groß</h4>
                    <p className="text-sm text-gray-600">Prototypen, Großmodelle</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Process Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Unser Prozess</h2>
          <div className="space-y-8">
            {[
              { step: 1, title: 'Auftrag erhalten', desc: 'Upload oder Amazon-Link' },
              { step: 2, title: 'Analyse & Angebot', desc: 'Prüfung und Kostenvoranschlag' },
              { step: 3, title: 'Freigabe', desc: 'Bestätigung durch den Kunden' },
              { step: 4, title: 'Produktion', desc: '3D-Druck in höchster Qualität' },
              { step: 5, title: 'Qualitätskontrolle', desc: 'Prüfung vor Versand' },
              { step: 6, title: 'Versand', desc: 'Sicherer Versand zu dir' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <Card className="flex-1">
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Ablauf;
