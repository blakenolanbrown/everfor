import { Shield, Cloud, HardDrive, Clock } from "lucide-react";

export default function ArchiveSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-cream/30 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-navy mb-6">
            Built to Last Forever
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Your family's legacy deserves the highest level of protection. We use enterprise-grade storage systems to ensure your videos remain safe for generations to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* AWS Glacier Deep Archive */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Cloud className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-navy mb-3">
              AWS Glacier Deep Archive
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              Ultra-secure cloud storage designed for long-term preservation with 99.999999999% durability
            </p>
          </div>

          {/* RAID NAS Systems */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <HardDrive className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-navy mb-3">
              RAID NAS Systems
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              Redundant local storage with automatic backup ensures immediate access and hardware failure protection
            </p>
          </div>

          {/* Multiple Locations */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-navy mb-3">
              Geographic Redundancy
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              Your videos are stored across multiple geographic locations to protect against regional disasters
            </p>
          </div>

          {/* Perpetual Access */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/40 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="text-gold h-8 w-8" />
            </div>
            <h3 className="font-cormorant text-xl font-semibold text-navy mb-3">
              Lifetime Guarantee
            </h3>
            <p className="text-warm-gray text-sm leading-relaxed">
              We maintain and migrate your files as technology evolves, ensuring access for future generations
            </p>
          </div>
        </div>

        {/* Technical Details Card */}
        <div className="mt-16 bg-navy-light rounded-3xl p-8 md:p-12 border border-gold/20">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-2xl font-bold text-cream mb-4">
              Enterprise-Grade Protection
            </h3>
            <p className="text-warm-gray">
              The same technology trusted by Fortune 500 companies to protect their most valuable data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-gold text-3xl font-bold mb-2">99.999999999%</div>
              <div className="text-cream/80 text-sm">Data Durability Rating</div>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-2">3+ Copies</div>
              <div className="text-cream/80 text-sm">Of Every File Stored</div>
            </div>
            <div>
              <div className="text-gold text-3xl font-bold mb-2">24/7</div>
              <div className="text-cream/80 text-sm">Monitoring & Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}