import Link from "next/link";
import { ArrowRight } from "lucide-react";
import products from "@/data/products.json";

export function ProductGrid() {
    return (
        <section id="products" className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                        Наша Продукция
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Профессиональный алмазный инструмент для любых задач.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                                <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
                                    {/* Placeholder for actual image */}
                                    <span className="text-4xl font-bold opacity-20">
                                        {product.name.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-medium text-gray-900">
                                    <Link href={`#product-${product.id}`}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </Link>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="mt-4 flex items-center justify-between">
                                    <p className="text-sm font-medium text-blue-600">{product.price}</p>
                                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="#catalog"
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        Смотреть весь каталог
                    </Link>
                </div>
            </div>
        </section>
    );
}
