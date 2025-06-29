
import { useState } from 'react';
import { Upload as UploadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with file:', file);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            3D-Modell hochladen und direkt drucken lassen
          </h1>
          <p className="text-xl text-gray-600">
            Lade deine 3D-Datei hoch und erhalte ein individuelles Angebot
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {[
            'Lade deine 3D-Datei hoch (STL, OBJ, STEP)',
            'Wähle Material, Farbe und Größe',
            'Wir prüfen die Druckbarkeit und senden dir ein Angebot',
            'Nach Freigabe starten wir den Druck'
          ].map((step, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  {index + 1}
                </div>
                <p className="text-sm text-gray-600">{step}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upload Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <UploadIcon className="mr-2 h-5 w-5" />
              Upload-Formular
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="file">3D-Datei hochladen</Label>
                <Input
                  id="file"
                  type="file"
                  accept=".stl,.obj,.step,.stp"
                  onChange={handleFileChange}
                  className="mt-1"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Unterstützte Formate: STL, OBJ, STEP
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="material">Material</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Material wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pla">PLA</SelectItem>
                      <SelectItem value="petg">PETG</SelectItem>
                      <SelectItem value="abs">ABS</SelectItem>
                      <SelectItem value="resin">Resin</SelectItem>
                      <SelectItem value="nylon">Nylon</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="color">Farbe</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Farbe wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="white">Weiß</SelectItem>
                      <SelectItem value="black">Schwarz</SelectItem>
                      <SelectItem value="red">Rot</SelectItem>
                      <SelectItem value="blue">Blau</SelectItem>
                      <SelectItem value="green">Grün</SelectItem>
                      <SelectItem value="custom">Sonderfarbe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="layer">Schichtdicke</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Schichtdicke wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.1">0.1 mm (hoch)</SelectItem>
                      <SelectItem value="0.2">0.2 mm (standard)</SelectItem>
                      <SelectItem value="0.3">0.3 mm (schnell)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="unit">Maßeinheit</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Einheit wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mm">Millimeter</SelectItem>
                      <SelectItem value="cm">Zentimeter</SelectItem>
                      <SelectItem value="inch">Zoll</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="comments">Kommentar (optional)</Label>
                <Textarea
                  id="comments"
                  placeholder="Besondere Wünsche oder Anmerkungen..."
                  className="mt-1"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Jetzt Datei hochladen
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Upload;
