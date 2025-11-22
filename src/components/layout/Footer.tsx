import Link from "next/link";
import config from "@/data/config.json";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">{config.site.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {config.site.description}
                        </p>
                        <p className="text-gray-400 text-sm">
                            {config.site.contact.address}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
                        <ul className="space-y-2">
                            {config.navigation.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors text-sm"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>Телефон: {config.site.contact.phone}</li>
                            <li>Email: {config.site.contact.email}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} {config.site.title}. Все права защищены.
                </div>
            </div>
        </footer>
    );
}
