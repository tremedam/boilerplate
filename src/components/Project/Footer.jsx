import { useThemeColors } from "@/hooks/useThemeColors";

export default function Footer({ data, theme }) {
    const { colors } = useThemeColors();

    return (
        <footer
            className="py-12 transition-colors duration-300"
            style={{
                backgroundColor: colors.footer.bg,
                borderTop: `3px solid ${colors.primary}`,
                color: colors.footer.text
            }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Informações Acadêmicas */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Informações Acadêmicas</h3>
                        <p className="text-sm opacity-90">{data.university}</p>
                        <p className="text-sm opacity-90">{data.course}</p>
                        <p className="text-sm opacity-90">Semestre: {data.semester}</p>
                    </div>

                    {/* Contato */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        {data.contact.email && (
                            <p className="text-sm opacity-90 mb-2">
                                <a href={`mailto:${data.contact.email}`} className="hover:underline">
                                    📧 {data.contact.email}
                                </a>
                            </p>
                        )}
                        {data.contact.github && (
                            <p className="text-sm opacity-90">
                                <a
                                    href={data.contact.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    💻 GitHub
                                </a>
                            </p>
                        )}
                    </div>

                    {/* Créditos */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Sobre este Template</h3>
                        <p className="text-sm opacity-90">
                            Template desenvolvido com Next.js e Tailwind CSS
                        </p>
                        <p className="text-sm opacity-90 mt-2">
                            Reutilizável para projetos acadêmicos
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-sm opacity-75">
                        © {data.year} - Todos os direitos reservados
                    </p>
                </div>
            </div>
        </footer >
    );
}
