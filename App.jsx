
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = ({ children }) => (
  <div className="min-h-screen bg-pink-50 text-gray-800">
    <header className="bg-pink-200 p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">Fursuit Commissions</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
    </header>
    <main className="max-w-4xl mx-auto p-6">
      {children}
    </main>
    <footer className="bg-pink-200 text-center p-4 mt-8">
      &copy; {new Date().getFullYear()} Fursuit Commissions. All rights reserved.
    </footer>
  </div>
);

const Home = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
    <p className="mb-4">Thank you for visiting our fursuit commission site! We specialize in custom-made, high-quality fursuits for all kinds of characters and creatures. Explore our site to see our work, view pricing, and get in touch!</p>
    <img src="/hero-fursuit.jpg" alt="Fursuit Hero" className="rounded-xl shadow-md mt-4" />
  </div>
);

const Gallery = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {[1,2,3,4,5,6].map(i => (
        <img
          key={i}
          src={`/gallery/fursuit-${i}.jpg`}
          alt={`Fursuit ${i}`}
          className="rounded-lg shadow-md"
        />
      ))}
    </div>
  </div>
);

const Pricing = () => (
  <div>
    <h2 className="text-3xl font-bold mb-4">Pricing</h2>
    <ul className="space-y-4">
      <li className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Partial Suit - $1,200+</h3>
        <p>Includes head, hands, and tail. Great for starters!</p>
      </li>
      <li className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Plantigrade Full Suit - $2,500+</h3>
        <p>Full body suit with basic shape. Comfortable and versatile.</p>
      </li>
      <li className="bg-white p-4 rounded shadow">
        <h3 className="text-xl font-semibold">Digitigrade Full Suit - $3,200+</h3>
        <p>Includes padding for a more animal-like shape. Premium option.</p>
      </li>
    </ul>
  </div>
);

const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Fursuit Commissions";
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-2">Interested in a commission? Send us an email with your character references and suit type:</p>
      <a href="mailto:commissions@example.com" className="text-pink-600 underline">commissions@example.com</a>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
