
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fragen, Sonderwünsche oder Feedback? Schreib uns!
          </h1>
          <p className="text-xl text-gray-600">
            Wir freuen uns auf deine Nachricht und helfen gerne weiter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Kontaktformular</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="mt-1"
                    placeholder="Wie können wir dir helfen?"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">kontakt@dein3ddruck.de</p>
                <p className="text-sm text-gray-600 mt-2">
                  Wir antworten in der Regel innerhalb von 24 Stunden
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">+49 123 4567890</p>
                <p className="text-sm text-gray-600 mt-2">
                  Mo-Fr: 9:00-18:00 Uhr<br />
                  Sa: 10:00-14:00 Uhr
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Musterstraße 12<br />
                  12345 Stadt<br />
                  Deutschland
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Abholung nach Terminvereinbarung möglich
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-2">Schnelle Hilfe</h3>
                <p className="text-sm text-green-700">
                  Für dringende Anfragen oder technische Probleme sind wir auch 
                  außerhalb der Geschäftszeiten per E-Mail erreichbar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Schnelle Antwort</h3>
              <p className="text-sm text-gray-600">
                Angebot meist innerhalb von 2-4 Stunden
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-semibold mb-2">Persönliche Beratung</h3>
              <p className="text-sm text-gray-600">
                Individuelle Lösungen für dein Projekt
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl mb-4">📦</div>
              <h3 className="font-semibold mb-2">Bundesweiter Versand</h3>
              <p className="text-sm text-gray-600">
                Sicher und schnell zu dir nach Hause
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
