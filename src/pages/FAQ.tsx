
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FAQ = () => {
  const faqs = [
    {
      question: 'Welche Dateiformate werden unterstützt?',
      answer: 'STL, OBJ, STEP – andere Formate auf Anfrage'
    },
    {
      question: 'Wie lange dauert der Druck?',
      answer: '2–5 Werktage je nach Komplexität'
    },
    {
      question: 'Was passiert nach dem Upload/Amazon-Link?',
      answer: 'Du bekommst eine Bestätigung und ein Angebot. Erst nach deiner Zustimmung starten wir den Druck.'
    },
    {
      question: 'Kann ich das Modell vorab sehen?',
      answer: 'Ja – bei Amazon-Produkten erstellen wir eine Vorschau zur Freigabe.'
    },
    {
      question: 'Gibt es Mengenrabatte?',
      answer: 'Ja, bei größeren Stückzahlen erhältst du automatisch Rabattangebote.'
    },
    {
      question: 'Welche Zahlungsmöglichkeiten gibt es?',
      answer: 'PayPal, Überweisung, Kreditkarte – Zahlung erst nach Freigabe des Angebots.'
    },
    {
      question: 'Kann ich mein Objekt abholen?',
      answer: 'Ja, Abholung nach Terminvereinbarung möglich. Adresse findest du im Kontaktbereich.'
    },
    {
      question: 'Was ist, wenn der Druck nicht meinen Vorstellungen entspricht?',
      answer: 'Wir bieten eine Zufriedenheitsgarantie. Bei begründeten Beanstandungen drucken wir kostenlos nach.'
    },
    {
      question: 'Können auch sehr kleine oder sehr große Objekte gedruckt werden?',
      answer: 'Ja, von 1cm bis 40cm Kantenlänge ist alles möglich. Bei größeren Objekten teilen wir diese auf.'
    },
    {
      question: 'Wie wird das fertige Objekt verpackt?',
      answer: 'Sorgfältige Verpackung mit Luftpolsterfolie und stabilem Karton für sicheren Transport.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAQ – Häufige Fragen
          </h1>
          <p className="text-xl text-gray-600">
            Hier findest du Antworten auf die häufigsten Fragen rund um unseren 3D-Druck-Service
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-blue-50 border-blue-200">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              Weitere Fragen?
            </h3>
            <p className="text-blue-700">
              Kontaktiere uns gerne über unser Kontaktformular oder per E-Mail. 
              Wir helfen dir gerne weiter!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
