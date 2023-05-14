import { HomePageImages } from "../../constant/imgsUrl";

export default function Screenshots() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          تصاویر dnsChanger-desktop
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {HomePageImages.map((imgSrc: string, index: number) => {
            return (
              <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-black">
                <img
                  src={imgSrc}
                  alt={`image ${index + 1}`}
                  className="w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
