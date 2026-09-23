import { useState } from 'react';
import { X, Calculator, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface EstimateCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyEstimateToBooking: (estimateDetails: {
    bikeType: string;
    packageName: string;
    totalEst: number;
    notes: string;
  }) => void;
}

export default function EstimateCalculatorModal({
  isOpen,
  onClose,
  onApplyEstimateToBooking
}: EstimateCalculatorModalProps) {
  if (!isOpen) return null;

  const [bikeType, setBikeType] = useState('sports');
  const [packageType, setPackageType] = useState('complete');
  const [oilPreference, setOilPreference] = useState('synthetic');
  const [addons, setAddons] = useState<string[]>(['chain-clean']);

  // Base pricing
  const packageCosts: Record<string, { name: string; labor: number }> = {
    basic: { name: 'Basic Care', labor: 699 },
    complete: { name: 'Complete Service', labor: 1499 },
    premium: { name: 'Premium Care', labor: 2499 }
  };

  const bikeMultipliers: Record<string, { label: string; multiplier: number }> = {
    commuter: { label: 'Commuter (100cc - 150cc)', multiplier: 1.0 },
    sports: { label: 'Sports / Naked (150cc - 400cc)', multiplier: 1.15 },
    cruiser: { label: 'Cruiser / Retro (350cc - 650cc)', multiplier: 1.25 },
    adventure: { label: 'Adventure / Tourer (250cc - 650cc)', multiplier: 1.3 },
    electric: { label: 'Electric Scooter / Motorcycle', multiplier: 0.95 }
  };

  const oilOptions: Record<string, { label: string; cost: number }> = {
    mineral: { label: 'Premium Mineral Grade (20W-40)', cost: 350 },
    semi: { label: 'Semi-Synthetic Grade (10W-30 / 15W-50)', cost: 580 },
    synthetic: { label: '100% Fully Synthetic (Motul 7100 / Castrol Power1)', cost: 1050 }
  };

  const addonOptions = [
    { id: 'brake-bleed', label: 'Brake Line Vacuum Bleed & DOT 4 Fluid', cost: 290 },
    { id: 'chain-clean', label: 'Ultrasonic Chain Degreasing & Motul Paste', cost: 250 },
    { id: 'teflon-detail', label: 'Teflon Tank Sealant & Exhaust Buffing', cost: 350 },
    { id: 'spark-plug', label: 'NGK OEM Spark Plug Replacement', cost: 220 }
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(a => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const currentPkg = packageCosts[packageType];
  const currentBike = bikeMultipliers[bikeType];
  const currentOil = oilOptions[oilPreference];

  const calculatedLabor = Math.round(currentPkg.labor * currentBike.multiplier);
  const addonsTotal = addons.reduce((sum, id) => {
    const item = addonOptions.find(a => a.id === id);
    return sum + (item ? item.cost : 0);
  }, 0);

  const totalEstimate = calculatedLabor + currentOil.cost + addonsTotal;

  const handleApply = () => {
    const selectedAddonLabels = addons
      .map(id => addonOptions.find(a => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const notes = `Calculated Estimate: ${currentBike.label} | ${currentPkg.name} | Oil: ${currentOil.label} | Addons: ${selectedAddonLabels || 'None'}`;

    onApplyEstimateToBooking({
      bikeType: currentBike.label,
      packageName: currentPkg.name,
      totalEst: totalEstimate,
      notes
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#16181F] border border-[#343B4B] rounded-sm shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#1B1E26] border-b border-[#282E3B] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#E65100]" />
            <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
              SERVICE ESTIMATE CALCULATOR
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8C93A0] hover:text-white rounded-sm hover:bg-[#252A36] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Step 1: Bike Category */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-2">
              1. SELECT MOTORCYCLE CATEGORY
            </label>
            <select
              value={bikeType}
              onChange={(e) => setBikeType(e.target.value)}
              className="w-full bg-[#121418] border border-[#2B303C] rounded-sm py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#E65100]"
            >
              {Object.entries(bikeMultipliers).map(([key, item]) => (
                <option key={key} value={key}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Package Type */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-2">
              2. SELECT SERVICE PACKAGE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {Object.entries(packageCosts).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setPackageType(key)}
                  className={`p-3 text-left rounded-sm border transition-colors cursor-pointer ${
                    packageType === key
                      ? 'bg-[#202530] border-[#E65100] text-white'
                      : 'bg-[#121418] border-[#262B36] text-[#8C93A0] hover:text-white'
                  }`}
                >
                  <span className="block font-heading text-sm font-bold uppercase">
                    {item.name}
                  </span>
                  <span className="block font-mono text-xs text-[#E65100] mt-0.5">
                    ₹{item.labor} Base
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Engine Oil Grade */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-2">
              3. ENGINE OIL PREFERENCE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {Object.entries(oilOptions).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOilPreference(key)}
                  className={`p-2.5 text-left rounded-sm border text-xs transition-colors cursor-pointer ${
                    oilPreference === key
                      ? 'bg-[#202530] border-[#E65100] text-white'
                      : 'bg-[#121418] border-[#262B36] text-[#8C93A0] hover:text-white'
                  }`}
                >
                  <span className="block font-semibold">{item.label}</span>
                  <span className="font-mono text-[11px] text-[#A0A8B8] mt-0.5 block">
                    +₹{item.cost}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Add-on Inspections */}
          <div>
            <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-2">
              4. OPTIONAL WORKSHOP ADD-ONS
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonOptions.map((addon) => {
                const isSelected = addons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-2.5 text-left rounded-sm border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#1E232D] border-[#E65100] text-white'
                        : 'bg-[#121418] border-[#262B36] text-[#8C93A0] hover:text-white'
                    }`}
                  >
                    <span>{addon.label}</span>
                    <span className="font-mono text-white ml-2 whitespace-nowrap">
                      +₹{addon.cost}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Estimate Breakdown Slip */}
          <div className="p-4 bg-[#121418] border border-[#2B303C] rounded-sm space-y-2">
            <div className="flex items-center justify-between text-xs text-[#8C93A0]">
              <span>Workshop Labor ({currentPkg.name}):</span>
              <span className="font-mono text-white">₹{calculatedLabor}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-[#8C93A0]">
              <span>Consumables ({currentOil.label.split('(')[0]}):</span>
              <span className="font-mono text-white">₹{currentOil.cost}</span>
            </div>
            {addonsTotal > 0 && (
              <div className="flex items-center justify-between text-xs text-[#8C93A0]">
                <span>Selected Add-ons ({addons.length}):</span>
                <span className="font-mono text-white">₹{addonsTotal}</span>
              </div>
            )}
            <div className="pt-2 border-t border-[#242832] flex items-center justify-between">
              <span className="font-heading text-sm font-bold uppercase text-white">
                Estimated Service Total:
              </span>
              <span className="font-mono text-2xl font-black text-[#E65100]">
                ₹{totalEstimate}
              </span>
            </div>
            <p className="text-[10px] text-[#6E7585] pt-1">
              * Final invoice will reflect exact oil quantity (Liters) based on your engine's crankcase capacity.
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#14161C] border-t border-[#262B37] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#343B4B] text-xs font-semibold uppercase font-heading tracking-wider text-[#9CA3AF] hover:text-white rounded-sm transition-colors cursor-pointer"
          >
            CANCEL
          </button>
          <button
            onClick={handleApply}
            className="bg-[#E65100] hover:bg-[#D94418] text-white px-5 py-2.5 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span>USE ESTIMATE & BOOK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
