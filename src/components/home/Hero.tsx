import Link from "next/link";
import { ArrowRight } from "lucide-react";
import config from "@/data/config.json";

export function Hero() {
    return (
        <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                {/* Placeholder for background image */}
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80')] bg-cover bg-center" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                        {config.hero.title}
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        {config.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#products"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                            {config.hero.cta}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-500 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-white transition-colors"
                        >
                            Связаться с нами
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
