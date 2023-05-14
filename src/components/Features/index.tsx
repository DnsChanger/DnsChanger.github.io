import { Feature } from "../../interfaces/feature.interface";
import { features } from "../../constant/features";

export default function Features() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          ویژگی‌های DnsChanger Desktop
        </h2>
        <div className="grid grid-cols-3 gap-5">
          {features.map((feature: Feature) => (
            <div className="max-w-sm p-6 rounded border border-gray-200 transition-all select-none hover:shadow-xl bg-white flex items-center">
              <feature.icon className="text-gray-600 text-2xl" />
              <div className="flex-1 p-4">
                <div className="font-bold text-xl mb-2">{feature.title}</div>
                <p className="text-gray-600 text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
