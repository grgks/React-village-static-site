import { useTranslation } from 'react-i18next'
import {useEffect} from "react";
import i18n from "i18next";

export default function InfoPage() {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = i18n.language === 'el' ? 'Ποταμούλα | Πληροφορίες' : 'Potamoula | Information'
    }, [i18n.language])

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-green-800 mb-8">{t('info.title')}</h1>

            {/* Τοποθεσία */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">{t('info.location')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('info.location_text')}</p>
            </section>

            {/* Επικοινωνία */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-3">{t('info.contact')}</h2>
                <p className="text-gray-600 text-lg">
                    {/*📞 <p className="text-gray-600 text-lg">{t('info.contact_text')}</p>*/}
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