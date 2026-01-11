import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export function Contact() {
    return (
        <Layout>
            <section className="min-h-screen py-20 px-6 md:px-12 flex flex-col md:flex-row gap-16">
                <div className="flex-1">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-8"
                    >
                        Let's start a project.
                    </motion.h1>
                    <p className="text-xl text-gray-400 mb-12">
                        Ready to transform your space? Get in touch with us.
                    </p>

                    <div className="space-y-8 text-lg">
                        <div>
                            <h3 className="font-bold text-white mb-2">Office</h3>
                            <p className="text-gray-400">123 Design District, Creative Block<br />Metropolis, NY 10012</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">Email</h3>
                            <a href="mailto:hello@thesquaresncubes.com" className="text-gray-400 hover:text-white transition-colors">hello@thesquaresncubes.com</a>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2">Phone</h3>
                            <p className="text-gray-400">+1 (555) 000-0000</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 bg-white/5 p-8 md:p-12 rounded-sm border border-white/10"
                >
                    <form className="flex flex-col gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input type="text" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input type="email" className="w-full bg-black/50 border border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows={5} className="w-full bg-black/50 border border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors resize-none" placeholder="Tell us about your project..." />
                        </div>
                        <Button size="lg" className="w-full mt-4">Send Message</Button>
                    </form>
                </motion.div>
            </section>
        </Layout>
    );
}
