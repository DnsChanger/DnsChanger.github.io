import { Feature } from "../../interfaces/feature.interface";
import { features } from "../../constant/features";

export default function Features() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
          ویژگی‌های dnsChanger-desktop
        </h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature: Feature) => {
            return (
              <div className="max-w-sm  overflow-hidden shadow-lg bg-white m-4 rounded-2xl">
                <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-white m-4 flex items-center hover:relative hover:bottom-2">
                  <div className="p-4">
                    <feature.icon className="text-gray-600 text-2xl" />
                  </div>
                  <div className="flex-grow p-4">
                    <div className="font-bold text-xl mb-2">
                      {feature.title}
                    </div>
                    <p className="text-gray-700 text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
