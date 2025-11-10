import Image from "next/image";
import { projectData } from "@/data/projectData";
import ProjectLayout from "@/components/Project/ProjectLayout";

export default function TeamPage() {
    const { team, header, footer, theme } = projectData;
    return (
        <ProjectLayout
            headerData={header}
            footerData={footer}
            theme={theme}
            title={`Equipe - ${header.title}`}
            description={team?.title}
        >
            <section className="py-16 max-w-6xl mx-auto px-4" id="team">
                <h1
                    className="text-4xl font-bold mb-8"
                    style={{ color: theme.primary }}
                >
                    {team.title || "Equipe do Projeto"}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.members?.map((m, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-lg shadow-sm border text-center"
                            style={{ backgroundColor: theme.secondary, borderColor: theme.secondary }}
                        >
                            <div className="relative w-28 h-28 mx-auto mb-4">
                                <Image
                                    src={m.image}
                                    alt={m.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h2 className="text-lg font-semibold text-white">{m.name}</h2>
                            <p className="text-gray-200 text-sm mb-3">{m.role}</p>
                            <div className="flex justify-center gap-4 text-sm">
                                {m.github && (
                                    <a
                                        href={m.github}
                                        className="text-cyan-400 hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {m.linkedin && (
                                    <a
                                        href={m.linkedin}
                                        className="text-cyan-400 hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {team.advisor && (
                    <div className="mt-12 p-6 rounded-lg border"
                        style={{ backgroundColor: theme.secondary, borderColor: theme.secondary }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-white">Orientador</h3>
                        <p className="text-gray-200">
                            {team.advisor.name} — {team.advisor.role}
                        </p>
                        {team.advisor.email && (
                            <a href={`mailto:${team.advisor.email}`} className="text-cyan-400 hover:underline text-sm">
                                {team.advisor.email}
                            </a>
                        )}
                    </div>
                )}
            </section>
        </ProjectLayout>
    );
}
