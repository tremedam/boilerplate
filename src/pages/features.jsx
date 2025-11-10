import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";
import Cards from "@/components/Project/Cards";
import { useState } from "react";

export default function FeaturesPage() {
    const { features, header, footer, theme } = projectData;
    const [expandedCard, setExpandedCard] = useState(null);

    return (
        <ProjectLayout
            headerData={header}
            footerData={footer}
            theme={theme}
            title={`Funcionalidades - ${header.title}`}
            description={features?.title}
        >
            <section className="py-16 max-w-6xl mx-auto px-4" id="features">
                <h1
                    className="text-4xl font-bold mb-8"
                    style={{ color: theme.primary }}
                >
                    {features.title || "Funcionalidades"}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
                    {features.items?.map((f, idx) => (
                        <Cards
                            key={idx}
                            title={f.title}
                            icon=""
                            content={<p className="text-sm leading-relaxed">{f.description}</p>}
                            theme={theme}
                            isExpanded={expandedCard === idx}
                            onToggle={() => setExpandedCard(expandedCard === idx ? null : idx)}
                        />
                    ))}
                </div>
            </section>
        </ProjectLayout>
    );
}
