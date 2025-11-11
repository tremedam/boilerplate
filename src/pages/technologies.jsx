import Image from "next/image";
import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";
import Cards from "@/components/Project/Cards";
import { useState } from "react";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function TechnologiesPage() {
    const { technologies, header, footer, theme } = projectData;
    const [expandedCard, setExpandedCard] = useState(null);
    const { colors } = useThemeColors();

    // Ordenar as categorias na ordem desejada
    const categories = [
        { key: 'languages', data: technologies.languages },
        { key: 'frameworks', data: technologies.frameworks },
        { key: 'libraries', data: technologies.libraries },
        { key: 'tools', data: technologies.tools },
        { key: 'platforms', data: technologies.platforms },
    ];

    return (
        <ProjectLayout
            headerData={header}
            footerData={footer}
            theme={theme}
            title={`Tecnologias - ${header.title}`}
            description={technologies?.subtitle}
        >
            <section className="py-16 max-w-6xl mx-auto px-4" id="technologies">
                {/* Título Principal */}
                <h1
                    className="text-4xl font-bold mb-3 transition-colors duration-300"
                    style={{ color: colors.title }}
                >
                    {technologies.title || "Stack Tecnológico"}
                </h1>
                {technologies.subtitle && (
                    <p className="text-lg mb-12 opacity-80 transition-colors duration-300" style={{ color: colors.text }}>
                        {technologies.subtitle}
                    </p>
                )}

                {/* Renderizar todas as categorias */}
                {categories.map((category, categoryIndex) => {
                    const categoryData = category.data;
                    if (!categoryData || !categoryData.items || categoryData.items.length === 0) return null;

                    return (
                        <div key={category.key} className={categoryIndex < categories.length - 1 ? "mb-16" : ""}>
                            <h2
                                className="text-3xl font-bold mb-3 transition-colors duration-300"
                                style={{ color: colors.title }}
                            >
                                {categoryData.title}
                            </h2>
                            <p className="text-base mb-8 opacity-75 transition-colors duration-300" style={{ color: colors.text }}>
                                {categoryData.description}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                                {categoryData.items.map((tech, idx) => (
                                    <Cards
                                        key={`${category.key}-${idx}`}
                                        title={tech.name}
                                        icon={tech.image || "💻"}
                                        content={
                                            <div>
                                                <p className="text-sm leading-relaxed">{tech.description}</p>
                                            </div>
                                        }
                                        theme={theme}
                                        bgColor="#ffffff"
                                        isExpanded={expandedCard === `${category.key}-${idx}`}
                                        onToggle={() =>
                                            setExpandedCard(expandedCard === `${category.key}-${idx}` ? null : `${category.key}-${idx}`)
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </section>
        </ProjectLayout>
    );
}
