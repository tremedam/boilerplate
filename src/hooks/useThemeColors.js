import { useTheme } from "next-themes";
import { projectData } from "@/data/projectData";

/**
 * Hook customizado para obter as cores do tema atual (light/dark)
 * baseado nas configurações do projectData.js
 */
export function useThemeColors() {
    const { theme, resolvedTheme } = useTheme();
    
    // Usa o tema resolvido (considerando a preferência do sistema)
    const currentTheme = resolvedTheme || theme || 'light';
    
    // Retorna as cores do tema atual
    const colors = projectData.theme[currentTheme] || projectData.theme.light;
    
    return {
        colors,
        isDark: currentTheme === 'dark',
        currentTheme,
    };
}
