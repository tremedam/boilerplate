import Image from "next/image";
import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";

export default function TechnologiesPage() {
    const { technologies, header, footer, theme } = projectData;
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.items?.map((t, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-lg shadow-sm border bg-white flex flex-col"
                            style={{ borderColor: theme.secondary + '22' }}
                        >
                            <div className="h-32 flex items-center justify-center mb-4 relative">
                                {t.image ? (
                                    <Image
                                        src={t.image}
                                        alt={t.name}
                                        width={112}
                                        height={112}
                                        className="object-contain"
                                    />
                                ) : (
                                    <span className="text-4xl">🛠️</span>
                                )}
                            </div>
                            <h2 className="text-lg font-semibold mb-1">{t.name}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{t.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </ProjectLayout>
    );
}
