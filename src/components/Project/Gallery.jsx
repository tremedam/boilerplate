import { useState } from "react";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Gallery() {
    const { colors } = useThemeColors();
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-16 px-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto">
                <h2
                    className="text-4xl font-bold text-center mb-12 transition-colors duration-300"
                    style={{ color: colors.title }}
                >
                    {projectData.gallery.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.gallery.images.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            onClick={() => setSelectedImage(image)}
                            style={{
                                backgroundColor: colors.cards.bg,
                                borderColor: colors.cards.border,
                                borderWidth: '1px',
                                borderStyle: 'solid'
                            }}
                        >
                            <div className="aspect-video relative bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                <img
                                    src={image.src}
                                    alt={image.caption}
                                    className="w-full h-full object-cover"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div
                                className="p-4 transition-colors duration-300"
                                style={{ color: colors.cards.text }}
                            >
                                <p className="text-sm text-center">
                                    {image.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal de imagem ampliada */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="max-w-4xl w-full">
                            <div
                                className="rounded-lg overflow-hidden shadow-2xl"
                                style={{ backgroundColor: colors.cards.bg }}
                            >
                                <div className="w-full max-h-[70vh] relative bg-gray-200 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={selectedImage.src}
                                        alt={selectedImage.caption}
                                        className="max-w-full max-h-[70vh] object-contain"
                                    />
                                </div>
                                <div
                                    className="p-6 transition-colors duration-300"
                                    style={{ color: colors.cards.text }}
                                >
                                    <p className="text-center text-lg">
                                        {selectedImage.caption}
                                    </p>
                                </div>
                            </div>
                            <button
                                className="mt-4 w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 hover:opacity-80"
                                style={{
                                    backgroundColor: colors.primary,
                                    color: "white",
                                }}
                                onClick={() => setSelectedImage(null)}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
