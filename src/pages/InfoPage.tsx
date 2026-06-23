import { useTranslation } from 'react-i18next'
import {useEffect} from "react";
import i18n from "i18next";

export default function InfoPage() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title =
            i18n.language === 'el'
                ? 'Ποταμούλα Μακρυνείας | Πληροφορίες & Τοποθεσία'
                : 'Potamoula Village | Information & Location'
    }, [i18n.language])

    useEffect(() => {

        const schema = {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            "name": "Ποταμούλα Μακρυνείας",
            "description": "Η Ποταμούλα είναι ένα ημιορεινό χωριό στην Αιτωλοακαρνανία, κοντά στη λίμνη Τριχωνίδα.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ποταμούλα",
                "addressRegion": "Αιτωλοακαρνανία",
                "postalCode": "30015",
                "addressCountry": "GR"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.5489",
                "longitude": "21.5827"
            }
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-schema', 'potamoula-info')
        script.innerHTML = JSON.stringify(schema)
        document.head.appendChild(script)

        return () => {
            const el = document.querySelector('script[data-schema="potamoula-info"]')
            if (el) el.remove()
        }
    }, [])

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-green-800 mb-8">{t('info.title')}</h1>

            <section className="mb-10">
                <p className="text-gray-600 text-lg leading-relaxed">
                    {t('info.intro_text')}
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                    {t('info.history_title')}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                    {t('info.history_text')}
                </p>
            </section>

            {/* Location */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">{t('info.location')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('info.location_text')}</p>
            </section>

            {/* Contact */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">
                    {t('info.contact')}
                </h2>

                <h3 className="text-lg font-medium text-gray-700 mb-2">
                    {t('info.contact_subtitle')}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                    {t('info.contact_text')}
                </p>
            </section>

            {/*  Disclaimer */}
            <section className="mb-10 border-t pt-8 border-gray-200">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">{t('info.disclaimer_title')}</h2>
                <p className="text-gray-500 text-base leading-relaxed">{t('info.disclaimer_text')}</p>
            </section>
        </div>
    )
}