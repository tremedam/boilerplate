import { useState, useEffect } from "react";
import Image from "next/image";
import { projectData } from "@/data/projectData";
import { useThemeColors } from "@/hooks/useThemeColors";

export default function Gallery() {
    const { colors } = useThemeColors();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Função para navegar para a próxima imagem
    const nextImage = () => {
        const newIndex = (currentIndex + 1) % projectData.gallery.images.length;
        setCurrentIndex(newIndex);
        setSelectedImage(projectData.gallery.images[newIndex]);
    };

    // Função para navegar para a imagem anterior
    const prevImage = () => {
        const newIndex = currentIndex === 0
            ? projectData.gallery.images.length - 1
            : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(projectData.gallery.images[newIndex]);
    };

    // Suporte para teclas do teclado
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;

            if (e.key === "ArrowRight") {
                nextImage();
            } else if (e.key === "ArrowLeft") {
                prevImage();
            } else if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedImage, currentIndex]);

    // Atualizar índice quando uma imagem é selecionada
    const handleImageClick = (image, index) => {
        setCurrentIndex(index);
        setSelectedImage(image);
    };

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
                            onClick={() => handleImageClick(image, index)}
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
                        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 md:p-8 overflow-y-auto"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative flex items-center justify-center w-full min-h-full max-w-7xl py-8">
                            {/* Botão Anterior */}
                            <button
                                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevImage();
                                }}
                                aria-label="Imagem anterior"
                            >
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
                                    style={{ color: colors.text }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Container da imagem */}
                            <div className="flex flex-col items-center justify-center w-full my-auto">
                                <div
                                    className="rounded-lg overflow-hidden shadow-2xl inline-block max-w-full"
                                    style={{ backgroundColor: colors.cards.bg }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Imagem com tamanho original respeitado */}
                                    <div className="flex items-center justify-center p-4 bg-gray-100 dark:bg-gray-900">
                                        <img
                                            src={selectedImage.src}
                                            alt={selectedImage.caption}
                                            className="w-auto h-auto max-w-full max-h-[60vh] object-contain rounded"
                                        />
                                    </div>
                                    <div
                                        className="p-4 md:p-6 transition-colors duration-300"
                                        style={{ color: colors.cards.text }}
                                    >
                                        <p className="text-center text-sm md:text-lg">
                                            {selectedImage.caption}
                                        </p>
                                        <p className="text-center text-xs md:text-sm opacity-60 mt-2">
                                            {currentIndex + 1} / {projectData.gallery.images.length}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    className="mt-4 py-2 px-6 md:px-8 rounded-lg font-semibold transition-all duration-300 hover:opacity-80 text-sm md:text-base"
                                    style={{
                                        backgroundColor: colors.primary,
                                        color: "white",
                                    }}
                                    onClick={() => setSelectedImage(null)}
                                >
                                    Fechar
                                </button>
                            </div>

                            {/* Botão Próximo */}
                            <button
                                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-3 md:p-4 shadow-lg transition-all duration-300 z-10"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextImage();
                                }}
                                aria-label="Próxima imagem"
                            >
                                <svg
                                    className="w-5 h-5 md:w-6 md:h-6 transition-colors duration-300"
                                    style={{ color: colors.text }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
