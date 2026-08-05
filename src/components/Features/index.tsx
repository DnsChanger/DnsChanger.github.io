import { features } from "../../constant/features";
import { Feature } from "../../interfaces/feature.interface";

export default function Features() {
  return (
    <section className="py-24 px-5 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            ویژگی‌های DNS Changer
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            همه چیزی که برای مدیریت DNS نیاز دارید، در یک برنامه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass-card hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300 flex items-start gap-4 select-none"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-gray-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/15 transition-colors duration-300">
                <feature.icon className="text-emerald-400 text-xl" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-base text-white mb-1.5">{feature.title}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
