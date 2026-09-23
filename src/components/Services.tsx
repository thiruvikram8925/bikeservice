import { useState } from 'react';
import { 
  Settings, 
  Cpu, 
  Disc, 
  ShieldAlert, 
  Zap, 
  CircleDot, 
  Sliders, 
  BatteryCharging, 
  Truck,
  ArrowRight,
  Clock,
  Search,
  Filter
} from 'lucide-react';
import { SERVICES_DATA } from '../data/workshopData';
import { ServiceItem } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

export default function Services({ onBookService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#E65100]" };
    switch (iconName) {
      case 'Settings': return <Settings {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Disc': return <Disc {...props} />;
      case 'ShieldAlert': return <ShieldAlert {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'CircleDot': return <CircleDot {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'BatteryCharging': return <BatteryCharging {...props} />;
      case 'Truck': return <Truck {...props} />;
      default: return <Settings {...props} />;
    }
  };

  const categories = ['All', 'General Maintenance', 'Mechanical Engineering', 'Scooter Transmission', 'Safety Systems', 'Electronics', 'Convenience & Assist'];

  const filteredServices = SERVICES_DATA.filter(service => {
    const matchesCategory = activeCategory === 'All' || service.category === activeCategory;
    const matchesSearch = 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>MECHANICAL & DIAGNOSTIC CAPABILITIES</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              TWO-WHEELER SERVICES
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md">
            From routine oil servicing and scooter CVT transmission overhaul to complex engine rebuilds and doorstep breakdown pickup across Chennai.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-heading font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap cursor-pointer border ${
                  activeCategory === cat
                    ? 'bg-[#E65100] border-[#E65100] text-white shadow-sm'
                    : 'bg-[#181B22] border-[#2A2F3D] text-[#8C93A0] hover:text-white hover:border-[#3E4554]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7E8796] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service (e.g., CVT, Brake, Oil)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181B22] border border-[#2B303C] rounded-sm py-2 pl-9 pr-3 text-xs text-white placeholder-[#5C6474] focus:outline-none focus:border-[#E65100]"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-[#181B22] border border-[#272C38] hover:border-[#E65100]/60 rounded-sm p-5 flex flex-col justify-between transition-all duration-150 hover:bg-[#1E222B]"
            >
              <div>
                {/* Card Top: Mechanical index and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-sm bg-[#13151A] border border-[#2B313E] flex items-center justify-center group-hover:border-[#E65100]/50 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-[11px] font-semibold text-[#5B6373]">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#E65100] transition-colors mb-2">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-[#8C93A0] leading-relaxed line-clamp-3 mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Bottom Meta */}
              <div className="pt-4 border-t border-[#232731] space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#7E8796]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E65100]" />
                    {service.estDuration}
                  </span>
                  <span className="font-mono font-semibold text-white">
                    {service.startingPrice.startsWith('₹') ? `From ${service.startingPrice}` : service.startingPrice}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-heading font-semibold uppercase tracking-wider text-[#A0A8B8] hover:text-[#E65100] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookService(service.name)}
                    className="bg-[#242832] group-hover:bg-[#E65100] text-[#D2D7E0] group-hover:text-white px-3 py-1.5 rounded-sm text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#181B22] border border-[#272C38] rounded-sm">
            <p className="text-sm text-[#8C93A0]">No services found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-3 text-xs font-mono text-[#E65100] underline uppercase cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      {/* Bottom Guarantee Strip */}
        <div className="mt-8 p-4 bg-[#16181F] border border-[#272C38] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C93A0]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E65100]"></span>
            <span>All repair operations adhere strictly to manufacturer torque specs and safety tolerances.</span>
          </div>
          <span className="font-mono text-[#BAC2CF]">30-DAY / 1,000 KM WORKSHOP GUARANTEE ON LABOUR</span>
        </div>

      </div>

      {/* Modal Detail View */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={(serviceName: string) => {
            setSelectedService(null);
            onBookService(serviceName);
          }}
        />
      )}
    </section>
  );
}
