
import { Card, CardContent } from '@/components/ui/card';

const UeberUns = () => {
  const teamValues = [
    {
      title: 'Qualität',
      description: 'Höchste Standards bei jedem Druckauftrag'
    },
    {
      title: 'Innovation',
      description: 'Immer auf dem neuesten Stand der Technik'
    },
    {
      title: 'Service',
      description: 'Persönliche Beratung und schnelle Umsetzung'
    },
    {
      title: 'Nachhaltigkeit',
      description: 'Umweltfreundliche Materialien und Prozesse'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Wir lieben 3D-Druck – und setzen deine Idee um
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="w-full h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl mb-4">🛠️</div>
                <p className="text-xl">Unser Team bei der Arbeit</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Wir sind ein kleines, leidenschaftliches Team aus Technikern, Designern und Makers, 
              die ihre Erfahrung in den Dienst deiner Kreativität stellen.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ob Hobbyprojekt, Prototyp oder Geschenk – bei uns ist dein 3D-Wunsch in besten Händen. 
              Mit jahrelanger Erfahrung und modernster Technologie verwirklichen wir deine Ideen 
              mit Präzision und Leidenschaft.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Unsere Werte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Warum wir das machen</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="font-semibold mb-2">Ideen verwirklichen</h3>
                  <p className="text-sm text-gray-600">
                    Jede Idee verdient es, Realität zu werden – egal wie groß oder klein
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-semibold mb-2">Präzision & Qualität</h3>
                  <p className="text-sm text-gray-600">
                    Jedes Detail zählt – wir setzen höchste Maßstäbe an unsere Arbeit
                  </p>
                </div>
                <div>
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-semibold mb-2">Gemeinsam schaffen</h3>
                  <p className="text-sm text-gray-600">
                    Deine Vision + unsere Expertise = außergewöhnliche Ergebnisse
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center mb-8">Unser Versprechen</h2>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-blue-800 leading-relaxed">
                "Wir behandeln jeden Auftrag so, als wäre es unser eigenes Projekt. 
                Von der ersten Idee bis zum fertigen Objekt stehen wir dir mit 
                Expertise, Leidenschaft und persönlichem Service zur Seite."
              </p>
              <p className="text-blue-600 font-semibold mt-4">– Das 3D-Druck Service Team</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default UeberUns;
