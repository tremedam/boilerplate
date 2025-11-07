export default function FeaturesSection({ data, theme }) {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                    style={{ color: theme.primary }}
                >
                    {data.title}
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.items.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            {/* Ícone */}
                            <div className="text-5xl mb-4">{feature.icon}</div>

                            {/* Título */}
                            <h3
                                className="text-xl font-semibold mb-3"
                                style={{ color: theme.primary }}
                            >
                                {feature.title}
                            </h3>

                            {/* Descrição */}
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
