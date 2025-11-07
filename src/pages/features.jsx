import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";

export default function FeaturesPage() {
    const { features, header, footer, theme } = projectData;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {features.items?.map((f, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-lg shadow-sm border bg-white flex flex-col"
                            style={{ borderColor: theme.secondary + '22' }}
                        >
                            <div className="text-3xl mb-4">{f.icon}</div>
                            <h2 className="text-xl font-semibold mb-2">{f.title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ProjectLayout>
    );
}
