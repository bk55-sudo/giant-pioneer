import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { ProductGrid } from "@/components/products/ProductGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <ProductGrid />

      {/* About Section Placeholder */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                О Компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы поставляем высококачественный алмазный инструмент для профессионалов в строительстве и камнеобработке уже более 15 лет. Наша миссия — обеспечить надежность и точность в каждом резе.
              </p>
              <p className="text-lg text-gray-600">
                Наша продукция проходит испытания в самых сложных условиях, чтобы гарантировать соответствие высочайшим стандартам прочности и производительности.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 relative h-64 sm:h-80 lg:h-full min-h-[300px] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/about_us.png`}
                alt="About Us"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Нужна помощь в выборе инструмента? Свяжитесь с нашими экспертами сегодня.
          </p>
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:info@almaz-profi.ru"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Написать в отдел продаж
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
