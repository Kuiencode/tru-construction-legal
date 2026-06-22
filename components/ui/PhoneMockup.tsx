export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      <div className="rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl">
        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-slate-900 px-5 py-2 text-[10px] text-white">
            <span>9:41</span>
            <span className="h-1.5 w-10 rounded-full bg-white/40" />
          </div>

          {/* App header */}
          <div className="bg-amber-500 px-5 py-4">
            <p className="text-xs font-medium text-amber-950/70">New Estimate</p>
            <p className="text-lg font-bold text-slate-900">Smith Residence</p>
          </div>

          {/* Body */}
          <div className="space-y-3 px-5 py-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs text-slate-500">Concrete (sq ft)</span>
              <span className="text-xs font-semibold text-slate-900">1,200</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs text-slate-500">Lumber (bd ft)</span>
              <span className="text-xs font-semibold text-slate-900">3,400</span>
            </div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <span className="text-xs text-slate-500">Labor (hrs)</span>
              <span className="text-xs font-semibold text-slate-900">86</span>
            </div>

            <div className="mt-2 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-wide text-slate-400">
                Total Estimate
              </p>
              <p className="text-xl font-bold text-slate-900">$24,850.00</p>
            </div>

            <div className="rounded-xl bg-amber-500 px-4 py-2.5 text-center text-xs font-semibold text-slate-900">
              Send Branded PDF Quote
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
