import Image from "next/image";

export default function TechnologiesSection({ data, theme }) {
    return (
        <section id="technologies" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    style={{ color: theme.primary }}
                >
                    {data.title}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.items.map((tech, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
                        >
                            {/* Logo da Tecnologia */}
                            {tech.image && (
                                <div className="relative w-20 h-20 mx-auto mb-4">
                                    <Image
                                        src={tech.image}
                                        alt={tech.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}

                            {/* Nome */}
                            <h3
                                className="text-xl font-bold mb-2"
                                style={{ color: theme.primary }}
                            >
                                {tech.name}
                            </h3>

                            {/* Descrição */}
                            <p className="text-sm text-gray-600">{tech.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
