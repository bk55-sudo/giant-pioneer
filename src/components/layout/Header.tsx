import Link from "next/link";
import { Phone, Search, Menu } from "lucide-react";
import config from "@/data/config.json";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-8 w-8 bg-blue-600 rounded-sm flex items-center justify-center">
                            <span className="text-white font-bold text-xl">D</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">
                            {config.site.title}
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-6">
                    {config.navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-gray-700">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm font-medium">{config.site.contact.phone}</span>
                    </div>
                    <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                        <Search className="h-5 w-5" />
                    </button>
                    <button className="md:hidden p-2 text-gray-500">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}
