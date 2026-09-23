import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/workshopData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#15171E] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
            <span className="w-2 h-2 bg-[#E65100]" />
            <span>CLARITY BEFORE YOU DROP YOUR BIKE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] mt-2">
            Got questions about our service procedure, parts authenticity, or waiting lounge? Here is how we operate.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#181B22] border border-[#272B36] rounded-sm overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1E222B] transition-colors"
                >
                  <span className="font-heading text-lg font-bold uppercase tracking-wide text-white">
                    {faq.q}
                  </span>
                  <div className="p-1 text-[#8C93A0] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#E65100]" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#9CA3AF] leading-relaxed border-t border-[#232731] animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
