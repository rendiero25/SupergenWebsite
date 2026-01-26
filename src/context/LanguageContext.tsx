import { createContext, useContext, useState, type ReactNode } from 'react';
import EnglishTranslations from '../data/Translation/English.json';
import IndonesianTranslations from '../data/Translation/Indonesian.json';

type Language = 'English' | 'Indonesia';

type TranslationData = typeof EnglishTranslations;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
    translations: TranslationData;
}

const translations: Record<Language, TranslationData> = {
    'English': EnglishTranslations,
    'Indonesia': IndonesianTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Get from localStorage or default to English
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'English';
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    // Translation helper function using dot notation (e.g., "common.search")
    const t = (key: string): string => {
        const keys = key.split('.');
        let result: unknown = translations[language];
        
        for (const k of keys) {
            if (result && typeof result === 'object' && k in result) {
                result = (result as Record<string, unknown>)[k];
            } else {
                // Fallback to English if key not found
                let fallback: unknown = translations['English'];
                for (const fk of keys) {
                    if (fallback && typeof fallback === 'object' && fk in fallback) {
                        fallback = (fallback as Record<string, unknown>)[fk];
                    } else {
                        return key; // Return key if not found anywhere
                    }
                }
                return typeof fallback === 'string' ? fallback : key;
            }
        }
        
        return typeof result === 'string' ? result : key;
    };

    return (
        <LanguageContext.Provider value={{ 
            language, 
            setLanguage, 
            t,
            translations: translations[language]
        }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export default LanguageContext;
