import config from "@/data/config.json";

export function Stats() {
    return (
        <section className="bg-white py-12 border-b border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {config.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
