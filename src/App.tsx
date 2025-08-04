import { useState, useEffect } from 'react';
import { 
  Rocket, 
  Database, 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  UserCheck,
  Smartphone,
  Cloud,
  Target,
  CheckCircle,
  XCircle,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Send,
} from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Sarlavha",
    content: (
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <Rocket className="w-24 h-24 text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-blue-600 leading-tight">
          Kichik va O'rta Bizneslar uchun Zamonaviy Raqamli Boshqaruv Platformasi
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Biznesingizni boshqarishda avtomatlashtirish, aniqlik va samaradorlikni oshirishni xohlaysizmi?
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "Platforma",
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-6 text-blue-600">Raqamli Ekotizim</h2>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          Kichik va o'rta biznes egalari uchun maxsus ishlab chiqilgan, modulli va kengaytiriladigan yangi avlod boshqaruv platformasi.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed">
          Bir nechta alohida dasturlar o'rniga, barcha zarur vositalar bir joyda jamlangan yagona tizim!
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Modullar",
    content: (
      <div>
        <h2 className="text-4xl font-semibold mb-10 text-blue-600 text-center flex items-center justify-center gap-4">
          <Package className="w-10 h-10" />
          Platformamiz Modullari
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Database, title: "ERP", desc: "Biznes jarayonlaringizni yagona tizimda integratsiyalash va boshqarish" },
            { icon: Package, title: "WMS (Ombor)", desc: "Ombor harakati va zaxiralarni real vaqtda nazorat qilish" },
            { icon: Users, title: "CRM", desc: "Mijozlar bilan aloqalarni tartibga solish va sodiqlikni oshirish" },
            { icon: ShoppingCart, title: "E-commerce", desc: "Mahsulotlaringizni onlayn sotish va boshqarish imkoniyati" },
            { icon: DollarSign, title: "Kassa & Moliya", desc: "To'lovlar, tushumlar va xarajatlar ustidan to'liq nazorat" },
            { icon: UserCheck, title: "HR Tizimi", desc: "Hodimlar, ish vaqti, lavozim va maoshlarni boshqarish" }
          ].map((module, index) => {
            const IconComponent = module.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:bg-blue-50"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-3">
                  <IconComponent className="w-8 h-8" />
                  {module.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{module.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Texnik Imkoniyatlar",
    content: (
      <div>
        <h2 className="text-4xl font-semibold mb-10 text-blue-600 text-center flex items-center justify-center gap-4">
          <Smartphone className="w-10 h-10" />
          Texnik Imkoniyatlar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Smartphone, title: "Mobil & Veb", desc: "Har qanday qurilmada qulay ishlash imkoniyati" },
            { icon: Cloud, title: "Bulutli Arxitektura", desc: "Ma'lumotlaringiz xavfsiz, doimiy va istalgan joydan foydalanish imkoniyati" }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:bg-blue-50"
              >
                <h4 className="text-xl font-semibold mb-4 text-blue-600 flex items-center gap-3">
                  <IconComponent className="w-8 h-8" />
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Afzalliklar",
    content: (
      <div>
        <h2 className="text-4xl font-semibold mb-10 text-blue-600 text-center flex items-center justify-center gap-4">
          <CheckCircle className="w-10 h-10" />
          Bizning Afzalliklarimiz
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-2xl font-semibold mb-6 text-red-600 flex items-center gap-3">
              <XCircle className="w-8 h-8" />
              Chet el dasturlari:
            </h4>
            <ul className="space-y-3">
              {[
                "Ko'pincha qimmat va modul-modul sotiladi",
                "O'zbek tili mavjud emas",
                "Har bir modul uchun alohida tizimga o'tish"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-2xl font-semibold mb-6 text-green-600 flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              Bizning platformamiz:
            </h4>
            <ul className="space-y-3">
              {[
                "To'liq o'zbek tilida va birnechta tillarda",
                "Hammasi bir joyda",
                "Mahalliy biznes amaliyotlariga mos",
                "Moslashtiriladigan va tushunarli interfeys"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Maqsad",
    content: (
      <div className="text-center">
        <h2 className="text-4xl font-semibold mb-8 text-blue-600 flex items-center justify-center gap-4">
          <Target className="w-10 h-10" />
          Bizning Maqsadimiz
        </h2>
        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto">
          Eski 1C dasturlari va qo'lda yuritiladigan Excel tizimlaridan voz kechib, tadbirkorlar uchun qulay, samarali va zamonaviy boshqaruv tizimini taqdim etish
        </p>
        
        <div className="bg-blue-600 text-white p-12 rounded-3xl shadow-2xl mb-10">
          <h3 className="text-3xl font-semibold mb-6 flex items-center justify-center gap-4">
            <Rocket className="w-8 h-8" />
            Biznesingizni keyingi bosqichga olib chiqing!
          </h3>
          <p className="text-xl leading-relaxed">
            Zamonaviy raqamli boshqaruv platformamiz bilan tanishing va biznesingizning samaradorligini oshiring.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-500">
          <h3 className="text-2xl font-semibold mb-6 text-blue-600">Bog'lanish uchun</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-xl">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-700">+998 99 404 12 99</span>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 px-6 py-4 rounded-xl">
              <Send className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-gray-700">@qodirov_oybekjon</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const nextSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const previousSlide = (): void => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number): void => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 overflow-x-hidden">
      {/* Slide Counter */}
      <div className="fixed top-6 right-6 bg-white px-5 py-3 rounded-full font-semibold text-blue-600 border-2 border-blue-600 shadow-lg z-50">
        <span>{currentSlide + 1}</span> / <span>{slides.length}</span>
      </div>

      {/* Slide Indicators */}
      <div className="fixed top-6 left-6 flex gap-2 z-50">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Slide Container */}
      <div className="min-h-screen flex items-center justify-center p-5">
        <div className={`
          w-full max-w-7xl bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-16
          transition-all duration-500 ease-out
          ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
        `}>
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={previousSlide}
          disabled={isAnimating}
          className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold
                   hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 
                   transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:transform-none disabled:hover:bg-white disabled:hover:text-blue-600
                   flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Oldingi
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold
                   hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 
                   transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:transform-none disabled:hover:bg-white disabled:hover:text-blue-600
                   flex items-center gap-2"
        >
          Keyingi
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}

export default App;