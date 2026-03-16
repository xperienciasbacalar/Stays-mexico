import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Users, 
  Search, 
  Coffee, 
  Wine, 
  UtensilsCrossed, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Menu, 
  X,
  ShoppingCart,
  Sun,
  TreePine,
  Clock,
  Compass
} from 'lucide-react';

// --- Data ---
const ROOMS = [
  {
    id: 'cabana-bacalar',
    name: 'Cabaña sobre la Laguna',
    location: 'Bacalar, Q. Roo',
    description: 'Despierta con los 7 colores de la laguna en nuestra cabaña ecológica premium con muelle privado.',
    price: 4500,
    capacity: 2,
    size: '50 m²',
    bed: '1 King Size',
    image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Wi-Fi', 'Aire Acondicionado', 'Muelle Privado', 'Kayak'],
  },
  {
    id: 'villa-xulha',
    name: 'Villa Selva y Cenote',
    location: 'Xul-Ha, Q. Roo',
    description: 'Inmersión total en la naturaleza con acceso directo a los rápidos y cenotes de Xul-Ha.',
    price: 3200,
    capacity: 4,
    size: '85 m²',
    bed: '2 Queen Size',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Wi-Fi', 'Cocina Equipada', 'Terraza', 'Piscina Natural'],
  },
  {
    id: 'suite-rosarito',
    name: 'Suite Vista al Mar',
    location: 'Rosarito, B.C.',
    description: 'Nuestra suite más exclusiva con balcón privado y vista panorámica al Océano Pacífico.',
    price: 3500,
    capacity: 2,
    size: '65 m²',
    bed: '1 King Size',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Wi-Fi', 'Aire Acondicionado', 'Minibar', 'Jacuzzi'],
  },
  {
    id: 'loft-juarez',
    name: 'Loft Ejecutivo',
    location: 'Cd. Juárez, Chih.',
    description: 'Diseño moderno y céntrico, ideal para viajes de negocios o estancias cortas en la frontera.',
    price: 1800,
    capacity: 2,
    size: '45 m²',
    bed: '1 Queen Size',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1e5240980c?auto=format&fit=crop&q=80&w=1000',
    amenities: ['Wi-Fi de Alta Velocidad', 'Smart TV', 'Área de Trabajo', 'Cafetera'],
  }
];

const DELIVERY_ITEMS = [
  {
    id: 'd1',
    name: 'Desayuno Regional',
    description: 'Chilaquiles, huevos al gusto, jugo de naranja fresco y café de olla.',
    price: 250,
    icon: Coffee,
    category: 'Desayuno'
  },
  {
    id: 'd2',
    name: 'Cena Romántica',
    description: 'Corte de carne, langosta estilo Puerto Nuevo, guarniciones y postre para dos.',
    price: 1200,
    icon: UtensilsCrossed,
    category: 'Cena'
  },
  {
    id: 'd3',
    name: 'Botella de Vino Tinto',
    description: 'Vino del Valle de Guadalupe, selección especial de la casa.',
    price: 650,
    icon: Wine,
    category: 'Bebidas'
  }
];

const TOURS = [
  {
    id: 'velero',
    name: 'Paseo Clásico en Velero',
    description: 'Recorre la Laguna de los 7 Colores de forma ecológica. Visitamos el Canal de los Piratas, Cenote Negro y la Isla de los Pájaros.',
    duration: '3 horas',
    price: 850,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=1000',
    tags: ['Ecológico', 'Relajante']
  },
  {
    id: 'paddle-amanecer',
    name: 'Amanecer en Paddleboard',
    description: 'Comienza tu día remando en aguas cristalinas mientras el sol tiñe la laguna de tonos dorados y rosados. Incluye café y fruta.',
    duration: '2 horas',
    price: 600,
    image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=1000',
    tags: ['Deportivo', 'Amanecer']
  },
  {
    id: 'ponton-privado',
    name: 'Tour Privado en Pontón',
    description: 'Ideal para familias o grupos. Disfruta de la laguna con total comodidad, música a tu gusto y hielera con bebidas incluidas.',
    duration: '4 horas',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000',
    tags: ['Privado', 'Familiar']
  }
];

// --- Components ---

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className={`font-serif text-2xl font-bold tracking-wider uppercase ${isScrolled ? 'text-ocean-900' : 'text-white'}`}>
          Stays Mexico
        </div>
        
        {/* Desktop Nav */}
        <div className={`hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
          <a href="#habitaciones" className="hover:text-bacalar-600 transition-colors">Habitaciones</a>
          <a href="#experiencias" className="hover:text-bacalar-600 transition-colors">Tours</a>
          <a href="#room-service" className="hover:text-bacalar-600 transition-colors">Room Service</a>
          <a href="#contacto" className="hover:text-bacalar-600 transition-colors">Contacto</a>
        </div>

        <button className={`hidden md:block px-6 py-2 border rounded-full ${isScrolled ? 'border-ocean-900 text-ocean-900 hover:bg-ocean-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-ocean-900'} transition-all duration-300 text-sm font-medium uppercase tracking-wider`}>
          Reservar
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-ocean-900' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-ocean-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4 md:hidden"
          >
            <a href="#habitaciones" className="text-gray-800 font-medium uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>Habitaciones</a>
            <a href="#experiencias" className="text-gray-800 font-medium uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>Tours</a>
            <a href="#room-service" className="text-gray-800 font-medium uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>Room Service</a>
            <a href="#contacto" className="text-gray-800 font-medium uppercase text-sm" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Hero({ selectedDestination, setSelectedDestination }: { selectedDestination: string, setSelectedDestination: (val: string) => void }) {
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      document.getElementById('habitaciones')?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="relative min-h-screen md:h-[85vh] md:min-h-[600px] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=2000" 
          alt="Laguna de Bacalar" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex-1 flex flex-col justify-center pt-24 pb-8">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-bacalar-300 font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase text-xs md:text-sm mb-4 leading-relaxed"
        >
          Bacalar • Xul-Ha • Rosarito • Cd. Juárez
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-lg"
        >
          Tu escape <br className="hidden md:block" /><span className="italic font-light">perfecto</span>
        </motion.h1>
      </div>

      {/* Booking Bar */}
      <div className="relative md:absolute md:-bottom-16 left-0 w-full px-4 z-20 pb-8 md:pb-0">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl md:rounded-full p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3">
            <MapPin className="w-5 h-5 text-bacalar-600 mr-3 shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Destino</span>
              <select 
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="text-sm font-medium text-gray-800 outline-none bg-transparent w-full cursor-pointer"
              >
                <option value="Todos">Todos</option>
                <option value="Bacalar">Bacalar</option>
                <option value="Xul-Ha">Xul-Ha</option>
                <option value="Rosarito">Rosarito</option>
                <option value="Cd. Juárez">Cd. Juárez</option>
              </select>
            </div>
          </div>
          <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3">
            <Calendar className="w-5 h-5 text-bacalar-600 mr-3 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Llegada</span>
              <input type="date" className="text-sm font-medium text-gray-800 outline-none bg-transparent" />
            </div>
          </div>
          <div className="flex-1 flex items-center border-b md:border-b-0 md:border-r border-gray-200 px-4 py-3">
            <Calendar className="w-5 h-5 text-bacalar-600 mr-3 shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Salida</span>
              <input type="date" className="text-sm font-medium text-gray-800 outline-none bg-transparent" />
            </div>
          </div>
          <div className="flex-1 flex items-center px-4 py-3">
            <Users className="w-5 h-5 text-bacalar-600 mr-3 shrink-0" />
            <div className="flex flex-col w-full">
              <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider">Huéspedes</span>
              <select className="text-sm font-medium text-gray-800 outline-none bg-transparent w-full cursor-pointer">
                <option>1 Adulto</option>
                <option>2 Adultos</option>
                <option>2 Adultos, 1 Niño</option>
                <option>2 Adultos, 2 Niños</option>
              </select>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className="bg-bacalar-600 hover:bg-bacalar-500 text-white px-8 py-4 md:py-0 flex items-center justify-center transition-all duration-300 uppercase text-sm font-semibold tracking-wider disabled:opacity-80 rounded-2xl md:rounded-full mt-2 md:mt-0"
          >
            {isSearching ? (
              <span className="animate-pulse">Buscando...</span>
            ) : (
              <>
                <Search className="w-4 h-4 mr-2" />
                Buscar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function DestinationGuideSection() {
  return (
    <section className="py-24 bg-sand-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-ocean-900 mb-4">¿Bacalar o Xul-Ha?</h2>
          <div className="w-16 h-px bg-bacalar-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Dos paraísos en el sur de Quintana Roo con personalidades únicas. Descubre cuál es el escenario perfecto para tu próxima escapada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Bacalar Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col border border-sand-200"
          >
            <div className="h-72 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&q=80&w=1000" 
                alt="Laguna de Bacalar" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-ocean-900 uppercase tracking-widest shadow-sm">
                Vibrante & Mágico
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-serif text-ocean-900">Bacalar</h3>
                <Sun className="text-bacalar-500 w-8 h-8" />
              </div>
              <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                El famoso Pueblo Mágico. Ofrece una mezcla perfecta de belleza natural, excelente gastronomía, clubes de playa y paseos en velero por la Laguna de los 7 Colores.
              </p>
              <div className="bg-sand-50 p-6 rounded-2xl border border-sand-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-900 mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-bacalar-500" /> Ideal para:
                </h4>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Viajeros que buscan restaurantes y ambiente relajado pero social.</span></li>
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Familias y grupos de amigos.</span></li>
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Amantes de los deportes acuáticos (paddleboard, velero).</span></li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Xul-Ha Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl overflow-hidden shadow-xl flex flex-col border border-sand-200"
          >
            <div className="h-72 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1000" 
                alt="Naturaleza en Xul-Ha" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute top-4 left-4 bg-ocean-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-white uppercase tracking-widest shadow-sm">
                Paz & Naturaleza
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-serif text-ocean-900">Xul-Ha</h3>
                <TreePine className="text-emerald-600 w-8 h-8" />
              </div>
              <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                El refugio secreto al final del agua. Un santuario de paz rodeado de selva exuberante, donde la laguna se encuentra con los rápidos y cenotes vírgenes. Desconexión total.
              </p>
              <div className="bg-sand-50 p-6 rounded-2xl border border-sand-100">
                <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-900 mb-4 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-bacalar-500" /> Ideal para:
                </h4>
                <ul className="text-sm text-gray-600 space-y-3">
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Parejas en busca de privacidad, romance y tranquilidad.</span></li>
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Retiros de bienestar, lectura y meditación.</span></li>
                  <li className="flex items-start"><ChevronRight className="w-4 h-4 text-bacalar-600 mr-2 shrink-0 mt-0.5" /> <span>Ecoturismo y conexión profunda con la naturaleza.</span></li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoomsSection({ selectedDestination }: { selectedDestination: string }) {
  const filteredRooms = ROOMS.filter(room => 
    selectedDestination === 'Todos' || room.location.includes(selectedDestination)
  );

  return (
    <section id="habitaciones" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif text-ocean-900 mb-4">Nuestras Habitaciones</h2>
        <div className="w-16 h-px bg-bacalar-600 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {selectedDestination !== 'Todos' 
            ? `Mostrando opciones disponibles en ${selectedDestination}.` 
            : 'Diseñadas para ofrecer el máximo confort y elegancia. Cada espacio está pensado para que tu estancia sea inolvidable.'}
        </p>
      </div>

      {filteredRooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredRooms.map((room) => (
          <motion.div 
            key={room.id}
            whileHover={{ y: -10 }}
            className="bg-white shadow-xl shadow-bacalar-900/5 group cursor-pointer flex flex-col rounded-3xl"
          >
            <div className="relative h-64 overflow-hidden rounded-t-3xl">
              <img 
                src={room.image} 
                alt={room.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-ocean-900/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider rounded-full">
                {room.location}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-semibold text-ocean-900 rounded-full shadow-sm">
                ${room.price} MXN <span className="text-xs font-normal text-gray-500">/ noche</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-serif text-ocean-900 mb-2">{room.name}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">{room.description}</p>
              
              <div className="grid grid-cols-2 gap-y-3 mb-6 border-t border-gray-100 pt-4">
                <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider">
                  <Users className="w-4 h-4 mr-2 text-bacalar-600" />
                  Hasta {room.capacity}
                </div>
                <div className="flex items-center text-xs text-gray-500 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 mr-2 text-bacalar-600" />
                  {room.size}
                </div>
              </div>

              <button className="w-full py-3 border border-bacalar-600 text-bacalar-600 hover:bg-bacalar-600 hover:text-white transition-all duration-300 uppercase text-xs font-semibold tracking-widest rounded-full">
                Ver Detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      ) : (
        <div className="text-center py-16 bg-sand-50 rounded-2xl border border-sand-100">
          <p className="text-gray-500 font-medium text-lg">No se encontraron habitaciones para los criterios seleccionados.</p>
          <p className="text-gray-400 text-sm mt-2">Intenta cambiar el destino en el buscador.</p>
        </div>
      )}
    </section>
  );
}

function ToursSection() {
  return (
    <section id="experiencias" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Compass className="w-6 h-6 text-bacalar-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-serif text-ocean-900">Experiencias en la Laguna</h2>
          </div>
          <div className="w-16 h-px bg-bacalar-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre la magia de Bacalar con nuestros tours exclusivos. Navega, explora y conéctate con la naturaleza de los 7 colores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <motion.div 
              key={tour.id}
              whileHover={{ y: -10 }}
              className="bg-sand-50 rounded-3xl overflow-hidden shadow-xl shadow-bacalar-900/5 border border-sand-100 flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {tour.tags.map(tag => (
                    <span key={tag} className="bg-ocean-900/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-ocean-900 mb-3">{tour.name}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-1 leading-relaxed">{tour.description}</p>
                
                <div className="flex items-center justify-between mb-6 pt-4 border-t border-sand-200">
                  <div className="flex items-center text-sm text-gray-500 font-medium">
                    <Clock className="w-4 h-4 mr-2 text-bacalar-600" />
                    {tour.duration}
                  </div>
                  <div className="text-lg font-semibold text-ocean-900">
                    ${tour.price} <span className="text-xs font-normal text-gray-500">MXN</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-ocean-900 text-white hover:bg-ocean-800 transition-all duration-300 uppercase text-xs font-semibold tracking-widest rounded-full">
                  Reservar Tour
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliverySection() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <section id="room-service" className="py-24 bg-ocean-900 text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <Star className="w-5 h-5 text-bacalar-500 mr-2" />
              <span className="text-bacalar-500 font-medium tracking-[0.2em] uppercase text-sm">Servicio a la Habitación</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Experiencias Gastronómicas</h2>
            <p className="text-gray-300">
              Disfruta de la mejor cocina local e internacional sin salir de tu habitación. 
              Pide desde nuestra app integrada y relájate.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <ShoppingCart className="w-5 h-5 mr-3 text-bacalar-300" />
            <span className="font-medium">{totalItems} artículos en tu pedido</span>
            {totalItems > 0 && (
              <button className="ml-4 text-sm text-bacalar-300 hover:text-bacalar-100 uppercase tracking-wider font-semibold">
                Ver Carrito
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DELIVERY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-colors flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-bacalar-500/20 rounded-2xl">
                    <Icon className="w-6 h-6 text-bacalar-300" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400">{item.category}</span>
                </div>
                <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1">{item.description}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <span className="text-lg font-medium">${item.price} MXN</span>
                  <button 
                    onClick={() => addToCart(item.id)}
                    className="w-8 h-8 rounded-full bg-bacalar-600 hover:bg-bacalar-500 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xl leading-none">+</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-bacalar-300 hover:text-bacalar-100 font-medium uppercase tracking-wider text-sm transition-colors">
            Ver Menú Completo <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="bg-[#0a0f1c] text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="font-serif text-3xl font-bold tracking-wider uppercase mb-6">
            Stays Mexico
          </div>
          <p className="text-gray-400 max-w-sm mb-8">
            Mejora integral para alojamientos. Impulsa tu negocio turístico y gastronómico con estrategias personalizadas.
          </p>
          <div className="flex space-x-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <span className="text-sm">IG</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <span className="text-sm">FB</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              <span className="text-sm">X</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Contacto</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-bacalar-600 shrink-0" />
              <span>Bacalar • Xul-Ha • Rosarito • Cd. Juárez</span>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-3 text-bacalar-600 shrink-0" />
              <span>+52 614 588 5665</span>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-bacalar-600 shrink-0" />
              <span>contacto@staysmexico.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Enlaces</h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-bacalar-500 transition-colors">Inicio</a></li>
            <li><a href="#habitaciones" className="hover:text-bacalar-500 transition-colors">Habitaciones</a></li>
            <li><a href="#room-service" className="hover:text-bacalar-500 transition-colors">Room Service</a></li>
            <li><a href="#" className="hover:text-bacalar-500 transition-colors">Términos y Condiciones</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Stays Mexico. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedDestination, setSelectedDestination] = useState('Todos');

  return (
    <div className="min-h-screen font-sans selection:bg-bacalar-500/30">
      <Navbar />
      <main>
        <Hero selectedDestination={selectedDestination} setSelectedDestination={setSelectedDestination} />
        <DestinationGuideSection />
        <RoomsSection selectedDestination={selectedDestination} />
        <ToursSection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
}
