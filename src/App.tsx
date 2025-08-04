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
  Send,
  Menu,
  X,
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
      <div className="text-center px-2 sm:px-4">
        <div className="flex justify-center mb-4 sm:mb-8">
          <Rocket className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-8 text-blue-600 leading-tight px-2">
          Kichik va O'rta Bizneslar uchun Zamonaviy Raqamli Boshqaruv Platformasi
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-4">
          Biznesingizni boshqarishda avtomatlashtirish, aniqlik va samaradorlikni oshirishni xohlaysizmi?
        </p>
      </div>
    )
  },
  {
    id: 2,
    title: "Platforma",
    content: (
      <div className="text-center px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-blue-600">Raqamli Ekotizim</h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed max-w-4xl mx-auto px-2">
          Kichik va o'rta biznes egalari uchun maxsus ishlab chiqilgan, modulli va kengaytiriladigan yangi avlod boshqaruv platformasi.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto px-2">
          Bir nechta alohida dasturlar o'rniga, barcha zarur vositalar bir joyda jamlangan yagona tizim!
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Modullar",
    content: (
      <div className="px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-10 text-blue-600 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Package className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Platformamiz Modullari</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
                className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg border-2 border-blue-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:bg-blue-50"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 flex items-center gap-2 sm:gap-3">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <span>{module.title}</span>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{module.desc}</p>
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
      <div className="px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-10 text-blue-600 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Smartphone className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Texnik Imkoniyatlar</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            { icon: Smartphone, title: "Mobil & Veb", desc: "Har qanday qurilmada qulay ishlash imkoniyati" },
            { icon: Cloud, title: "Bulutli Arxitektura", desc: "Ma'lumotlaringiz xavfsiz, doimiy va istalgan joydan foydalanish imkoniyati" }
          ].map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-blue-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 hover:bg-blue-50"
              >
                <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-blue-600 flex items-center gap-2 sm:gap-3">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                  <span>{feature.title}</span>
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.desc}</p>
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
      <div className="px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-10 text-blue-600 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Bizning Afzalliklarimiz</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-red-600 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <XCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1 sm:mt-0" />
              <span>Chet el dasturlari:</span>
            </h4>
            <ul className="space-y-3">
              {[
                "Ko'pincha qimmat va modul-modul sotiladi",
                "O'zbek tili mavjud emas",
                "Har bir modul uchun alohida tizimga o'tish"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                  <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-green-600 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1 sm:mt-0" />
              <span>Bizning platformamiz:</span>
            </h4>
            <ul className="space-y-3">
              {[
                "To'liq o'zbek tilida va birnechta tillarda",
                "Hammasi bir joyda",
                "Mahalliy biznes amaliyotlariga mos",
                "Moslashtiriladigan va tushunarli interfeys"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-gray-600">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" />
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
      <div className="text-center px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 sm:mb-8 text-blue-600 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <Target className="w-8 h-8 sm:w-10 sm:h-10" />
          <span>Bizning Maqsadimiz</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-4xl mx-auto">
          Eski 1C dasturlari va qo'lda yuritiladigan Excel tizimlaridan voz kechib, tadbirkorlar uchun qulay, samarali va zamonaviy boshqaruv tizimini taqdim etish
        </p>
        
        <div className="bg-blue-600 text-white p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl mb-6 sm:mb-10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Biznesingizni keyingi bosqichga olib chiqing!</span>
          </h3>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
            Zamonaviy raqamli boshqaruv platformamiz bilan tanishing va biznesingizning samaradorligini oshiring.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-2 border-blue-500">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-blue-600">Bog'lanish uchun</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 sm:gap-3 bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl w-full sm:w-auto justify-center">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
              <span className="text-base sm:text-lg font-semibold text-gray-700">+998 99 404 12 99</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-blue-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl w-full sm:w-auto justify-center">
              <Send className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
              <span className="text-base sm:text-lg font-semibold text-gray-700">@qodirov_oybekjon</span>
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
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

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
    setShowMobileMenu(false);
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
      } else if (e.key === 'Escape') {
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isAnimating]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMobileMenu(false);
    };

    if (showMobileMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showMobileMenu]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 overflow-x-hidden">
      {/* Slide Counter */}
      <div className="fixed top-3 sm:top-6 right-3 sm:right-6 bg-white px-3 sm:px-5 py-2 sm:py-3 rounded-full font-semibold text-blue-600 border-2 border-blue-600 shadow-lg z-50 text-sm sm:text-base">
        <span>{currentSlide + 1}</span> / <span>{slides.length}</span>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-3 left-3 sm:hidden z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMobileMenu(!showMobileMenu);
          }}
          className="bg-white p-3 rounded-full border-2 border-blue-600 text-blue-600 shadow-lg"
          aria-label="Toggle menu"
        >
          {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div 
          className="fixed top-16 left-3 bg-white rounded-2xl shadow-2xl border-2 border-blue-600 p-4 z-50 sm:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-3 gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 h-8 rounded-full text-xs font-semibold transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 text-white scale-110'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">{slides[currentSlide].title}</p>
          </div>
        </div>
      )}

      {/* Desktop Slide Indicators */}
      <div className="fixed top-6 left-6 hidden sm:flex gap-2 z-50">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            title={slide.title}
          />
        ))}
      </div>

      {/* Main Slide Container */}
      <div className="min-h-screen flex items-center justify-center p-3 sm:p-5">
        <div className={`
          w-full max-w-7xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-200 
          p-4 sm:p-8 lg:p-16 transition-all duration-500 ease-out
          ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
        `}>
          {slides[currentSlide].content}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 sm:gap-4 z-50">
        <button
          onClick={previousSlide}
          disabled={isAnimating}
          className="px-3 sm:px-6 py-2 sm:py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold
                   hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 
                   transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:transform-none disabled:hover:bg-white disabled:hover:text-blue-600
                   flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden xs:inline">Oldingi</span>
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="px-3 sm:px-6 py-2 sm:py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold
                   hover:bg-blue-600 hover:text-white transform hover:-translate-y-1 
                   transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
                   disabled:hover:transform-none disabled:hover:bg-white disabled:hover:text-blue-600
                   flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
        >
          <span className="hidden xs:inline">Keyingi</span>
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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