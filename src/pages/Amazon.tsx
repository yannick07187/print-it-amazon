
import { useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Amazon = () => {
  const [amazonUrl, setAmazonUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Amazon link submitted:', amazonUrl);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Amazon-Produkt als 3D-Modell – Wir machen's möglich
          </h1>
          <p className="text-xl text-gray-600">
            Verwandle jedes Amazon-Produkt in ein 3D-gedrucktes Modell
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            'Füge einen Amazon-Link ein',
            'Wir analysieren das Produkt und erstellen ein entsprechendes 3D-Modell',
            'Du erhältst eine Vorschau zur Freigabe',
            'Wir drucken und versenden dein Wunschobjekt'
          ].map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <LinkIcon className="mr-2 h-5 w-5" />
              Amazon-Link Formular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="amazon-url">Amazon-URL *</Label>
                <Input
                  id="amazon-url"
                  type="url"
                  placeholder="https://www.amazon.de/..."
                  value={amazonUrl}
                  onChange={(e) => setAmazonUrl(e.target.value)}
                  required
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Füge hier den vollständigen Amazon-Link ein
                </p>
              </div>

              <div>
                <Label htmlFor="description">Beschreibung oder Wünsche (optional)</Label>
                <Textarea
                  id="description"
                  placeholder="Was genau soll modelliert werden? Besondere Details?"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="size">Gewünschte Größe/Skalierung (optional)</Label>
                <Input
                  id="size"
                  type="text"
                  placeholder="z.B. 10cm hoch, 50% der Originalgröße..."
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email">Kontakt-E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="deine@email.de"
                  required
                  className="mt-1"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Hinweis:</strong> Je mehr Details du angibst (z. B. was genau modelliert werden soll), 
                  desto genauer können wir arbeiten!
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Amazon-Link einreichen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Amazon;
