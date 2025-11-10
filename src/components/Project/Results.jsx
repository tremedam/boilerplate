import { projectData } from "@/data/projectData";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Results() {
    const { colors } = useThemeColors();

    return (
        <section className="py-16 px-4 transition-colors duration-300" style={{ backgroundColor: colors.background }}>
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-bold text-center mb-8 transition-colors duration-300"
                    style={{ color: colors.title }}
                >
                    {projectData.results.title}
                </h2>

                <div className="mb-12">
                    <p
                        className="text-lg text-center max-w-3xl mx-auto leading-relaxed transition-colors duration-300"
                        style={{ color: colors.text }}
                    >
                        {projectData.results.content}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectData.results.achievements.map(
                        (achievement, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg shadow-lg border-l-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    backgroundColor: colors.cards.bg,
                                    borderLeftColor: colors.cards.border,
                                    color: colors.cards.text,
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors duration-300"
                                        style={{
                                            backgroundColor: colors.cards.border,
                                            color: colors.cards.text,
                                        }}
                                    >
                                        {index + 1}
                                    </div>
                                    <p className="flex-1 leading-relaxed">
                                        {achievement}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>

                {/* Estatísticas resumidas */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div
                        className="p-6 rounded-lg text-center shadow-lg transform transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: colors.cards.bg,
                            color: colors.cards.text,
                        }}
                    >
                        <div
                            className="text-4xl font-bold mb-2 transition-colors duration-300"
                            style={{ color: colors.cards.text }}
                        >
                            {projectData.results.achievements.length}
                        </div>
                        <div className="text-sm uppercase tracking-wide opacity-80">
                            Conquistas
                        </div>
                    </div>

                    <div
                        className="p-6 rounded-lg text-center shadow-lg transform transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: colors.cards.bg,
                            color: colors.cards.text,
                        }}
                    >
                        <div
                            className="text-4xl font-bold mb-2 transition-colors duration-300"
                            style={{ color: colors.cards.text }}
                        >
                            {projectData.about.stats[0].value}
                        </div>
                        <div className="text-sm uppercase tracking-wide opacity-80">
                            {projectData.about.stats[0].label}
                        </div>
                    </div>

                    <div
                        className="p-6 rounded-lg text-center shadow-lg transform transition-all duration-300 hover:scale-105"
                        style={{
                            backgroundColor: colors.cards.bg,
                            color: colors.cards.text,
                        }}
                    >
                        <div
                            className="text-4xl font-bold mb-2 transition-colors duration-300"
                            style={{ color: colors.cards.text }}
                        >
                            90+
                        </div>
                        <div className="text-sm uppercase tracking-wide opacity-80">
                            Score Lighthouse
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
