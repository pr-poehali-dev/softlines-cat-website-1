import { useState } from 'react';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProducersPage from '@/pages/ProducersPage';
import KittensPage from '@/pages/KittensPage';
import ContactsPage from '@/pages/ContactsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'producers':
        return <ProducersPage />;
      case 'kittens':
        return <KittensPage />;
      case 'contacts':
        return <ContactsPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      <Toaster />
    </div>
  );
}

export default App;