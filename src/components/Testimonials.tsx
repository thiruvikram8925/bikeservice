import { Star, CheckCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/workshopData';

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>COMMUNITY FEEDBACK</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              WHAT RIDERS SAY
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
            <span className="text-[#E65100] font-bold">4.8 / 5.0</span>
            <span>OVERALL RATING ACROSS 350+ VERIFIED JOB CARDS</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#181B22] border border-[#272B36] p-6 rounded-sm flex flex-col justify-between hover:border-[#383F4F] transition-colors"
            >
              <div>
                {/* Top Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E65100]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#303644]" />
                </div>

                {/* Comment */}
                <p className="text-sm text-[#C0C6D2] leading-relaxed italic mb-5">
                  "{item.comment}"
                </p>
              </div>

              {/* Rider Bio & Job Info */}
              <div className="pt-4 border-t border-[#232731]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase tracking-wider text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#E65100] font-mono mt-0.5">
                      {item.bikeModel}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[11px] text-[#717A8C]">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Verified</span>
                  </div>
                </div>

                <div className="mt-2 text-[11px] text-[#6E7585] flex items-center justify-between">
                  <span>Job: {item.serviceDone}</span>
                  <span>{item.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
