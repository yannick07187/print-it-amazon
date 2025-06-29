
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: '3D-Datei hochladen', href: '/upload' },
    { name: 'Amazon-Link einreichen', href: '/amazon' },
    { name: 'Preise', href: '/preise' },
    { name: 'Ablauf & Technik', href: '/ablauf' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Über uns', href: '/ueber-uns' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-blue-600">
                3D-Druck Service
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-blue-600",
                    location.pathname === item.href
                      ? "text-blue-600"
                      : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="md:hidden flex items-center">
              <select
                className="text-sm border rounded px-2 py-1"
                value={location.pathname}
                onChange={(e) => window.location.href = e.target.value}
              >
                {navigation.map((item) => (
                  <option key={item.name} value={item.href}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
