import { useEffect } from "react";
import { useRouter } from "next/router";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/project");
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400 mx-auto mb-4"></div>
                <p className="text-lg text-gray-600 dark:text-gray-300">Carregando projeto...</p>
            </div>
            <ThemeToggle />
        </div>
    );
}