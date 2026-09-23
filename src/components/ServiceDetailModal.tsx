import { X, CheckCircle2, AlertCircle, Clock, Shield, Calendar, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export default function ServiceDetailModal({ service, onClose, onBookService }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#16181F] border border-[#343B4B] rounded-sm shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#1B1E26] border-b border-[#282E3B] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 bg-[#E65100]" />
            <span className="font-heading text-xs uppercase tracking-wider text-[#A0A8B8]">
              {service.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8C93A0] hover:text-white rounded-sm hover:bg-[#252A36] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                {service.name}
              </h3>
              <span className="font-mono text-lg font-bold text-[#E65100]">
                From {service.startingPrice}
              </span>
            </div>
            <p className="text-sm text-[#9CA3AF] mt-2 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Quick Specs Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 bg-[#121418] border border-[#232731] rounded-sm text-xs">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#717A8C] block">Turnaround Time</span>
                <span className="font-semibold text-white">{service.estDuration}</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#717A8C] block">Interval</span>
                <span className="font-semibold text-white">{service.recommendedInterval}</span>
              </div>
            </div>
            <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
              <Shield className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
              <div>
                <span className="text-[#717A8C] block">Warranty</span>
                <span className="font-semibold text-white">30 Days / 1,000 km</span>
              </div>
            </div>
          </div>

          {/* Workshop Checklist */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#E65100]" />
              What Is Included In This Service:
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C2C8D4]">
              {service.keyChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#E65100] font-mono font-bold text-xs shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Warning Symptoms */}
          <div className="p-3.5 bg-[#1C1F28] border border-[#2D3342] rounded-sm">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-[#E65100] mb-2 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              Symptoms Indicating This Service Is Required:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#9CA3AF]">
              {service.symptoms.map((symptom, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#8C93A0] rounded-none"></span>
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-[#14161C] border-t border-[#262B37] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#343B4B] text-xs font-semibold uppercase font-heading tracking-wider text-[#9CA3AF] hover:text-white rounded-sm transition-colors cursor-pointer"
          >
            CLOSE
          </button>
          <button
            onClick={() => {
              onBookService(service.name);
              onClose();
            }}
            className="bg-[#E65100] hover:bg-[#D94418] text-white px-5 py-2.5 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>BOOK THIS SERVICE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
