import type { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen bg-brand-black text-white selection:bg-white selection:text-black">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
            <footer className="py-12 px-6 md:px-12 border-t border-white/10 mt-20">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <h3 className="text-xl font-bold">SquaresNCubes</h3>
                        <p className="text-gray-400 text-sm mt-2 max-w-xs">
                            Designing spaces that inspire and function with precision.
                        </p>
                    </div>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <div className="flex flex-col gap-2">
                            <span className="text-white font-semibold">Contact</span>
                            <span>hello@thesquaresncubes.com</span>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-white font-semibold">Socials</span>
                            <a href="#" className="hover:text-white transition-colors">Instagram</a>
                            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-xs text-gray-600 flex justify-between">
                    <span>© 2026 SquaresNCubes. All rights reserved.</span>

                </div>
            </footer>
        </div>
    );
}
