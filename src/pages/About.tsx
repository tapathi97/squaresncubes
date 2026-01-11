import { Layout } from '../components/layout/Layout';
import { motion } from 'framer-motion';

export function About() {
    return (
        <Layout>
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-12"
                    >
                        We build filters for <span className="text-gray-500">chaos</span>.
                    </motion.h1>

                    <div className="space-y-12 text-lg md:text-xl text-gray-300 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            At SquaresNCubes, we believe space is not just volume—it's an experience. Established in 2026, our firm sits at the intersection of rigid geometry and organic life.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Our name reflects our philosophy: The <strong>Square</strong> representing the foundation, the logic, the plan. The <strong>Cube</strong> representing the volume, the depth, the reality.
                        </motion.p>
                    </div>
                </div>

                <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-white border-b border-white pb-2 inline-block">The Vision</h3>
                        <p className="text-gray-400">
                            To redefine architectural standards by simplifying complexity. We strip away the unnecessary to reveal the essential structure of living.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-white border-b border-white pb-2 inline-block">The Team</h3>
                        <p className="text-gray-400">
                            A collective of architects, designers, and dreamers led by principal architect [Name]. We work collaboratively to solve spatial problems.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
