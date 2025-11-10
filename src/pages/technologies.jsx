import Image from "next/image";
import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";
import Cards from "@/components/Project/Cards";
import { useState } from "react";

export default function TechnologiesPage() {
    const { technologies, header, footer, theme } = projectData;
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <ProjectLayout
            headerData={header}
            footerData={footer}
            theme={theme}
            title={`Tecnologias - ${header.title}`}
            description={technologies?.title}
        >
            <section className="py-16 max-w-6xl mx-auto px-4" id="technologies">
                <h1
                    className="text-4xl font-bold mb-8"
                    style={{ color: theme.primary }}
                >
                    {technologies.title || "Tecnologias Utilizadas"}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {technologies.items?.map((t, idx) => (
                        <Cards
                            key={idx}
                            title={t.name}
                            icon={t.image || "💻"}
                            content={
                                <div>
                                    <p className="text-sm leading-relaxed">{t.description}</p>
                                </div>
                            }
                            theme={theme}
                            bgColor="#ffffff"
                            isExpanded={expandedCard === idx}
                            onToggle={() => setExpandedCard(expandedCard === idx ? null : idx)}
                        />
                    ))}
                </div>
            </section>
        </ProjectLayout>
    );
}
