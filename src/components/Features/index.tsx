import { features } from "../../constant/features";
import { Feature } from "../../interfaces/feature.interface";

export default function Features() {
  return (
    <section className="bg-slate-950 py-20 px-4 border-b border-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white mb-12">
          ویژگی‌های DNS Changer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-800 bg-slate-900/90 hover:border-slate-700 transition-all select-none shadow-lg flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 text-emerald-400">
                <feature.icon className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-lg text-white mb-1.5">{feature.title}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
