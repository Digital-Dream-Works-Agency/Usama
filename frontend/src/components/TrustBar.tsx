export default function TrustBar() {
  const stats = [
    { number: '$1.08M', label: 'Ad Spend Managed (90 Days)' },
    { number: '600%', label: 'Peak ROAS Achieved' },
    { number: '15,594', label: 'Conversions Delivered' },
    { number: '$0.09', label: 'Lowest CPC (Healthcare)' },
  ]

  return (
    <section className="bg-gradient-to-r from-indigo-950/20 via-purple-950/20 to-pink-950/20 border-y border-white/5" data-testid="trust-bar">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-zinc-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
