import Header from "./components/Header";
import Footer from "./components/Footer";
import SkipList from "./components/SkipList";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 bg-gray-50">
        <SkipList />
      </main>
      <Footer />
    </div>
  );
}
