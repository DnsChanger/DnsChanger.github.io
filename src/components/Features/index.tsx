import { features } from "../../constant/features";
import { Feature } from "../../interfaces/feature.interface";

export default function Features() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          ویژگی‌های DNS Changer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {features.map((feature: Feature, index: number) => (
            <div
              key={index}
              className="max-w-sm p-6 rounded-md border border-gray-200 transition-all select-none hover:shadow-xl bg-white flex items-center"
            >
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
