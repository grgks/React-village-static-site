import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import i18n from "i18next";
import {Link} from "react-router-dom";

const images = [
    { src: '/images/potamoula1.jpg', position: 'center 90%' },
    { src: '/images/potamoulaBench.jpg', position: 'center 70%' },
]

export default function HomePage() {
    const { t } = useTranslation()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const schema = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Potamoula Village",
            "url": "https://www.potamoula.gr",
            "description": "Official informational website of Potamoula village in Aetolia-Acarnania, Greece.",
            "inLanguage": ["el", "en"]
        }

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-schema', 'potamoula-home')
        script.innerHTML = JSON.stringify(schema)

        document.head.appendChild(script)

        return () => {
            const el = document.querySelector('script[data-schema="potamoula-home"]')
            if (el) el.remove()
        }
    }, [])

    useEffect(() => {
        document.title = i18n.language === 'el' ? 'Ποταμούλα Μακρυνείας | Ιστορία, Φωτογραφίες & Νέα'
            : 'Potamoula Village | History, Photos & News'
    }, [i18n.language])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const prev = () => setCurrent(prev => (prev - 1 + images.length) % images.length)
    const next = () => setCurrent(prev => (prev + 1) % images.length)

    return (
        <div>
            {/* Hero Carousel */}
            <div
                className="relative h-[500px] flex items-center justify-center bg-cover transition-all duration-700"
                style={{ backgroundImage: `url('${images[current].src}')`, backgroundPosition: images[current].position }}
            >
                <div className="absolute inset-0 bg-black/40" />

                {/* Arrows */}
                <button onClick={prev} className="absolute left-4 z-20 text-white text-4xl hover:text-green-300">‹</button>
                <button onClick={next} className="absolute right-4 z-20 text-white text-4xl hover:text-green-300">›</button>

                {/* Dots */}
                <div className="absolute bottom-4 flex gap-2 z-20">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}
                        />
                    ))}
                </div>

                {/* Tittle */}
                <div className="text-center text-white z-10">
                    <h1 className="text-5xl font-bold mb-2">{t('home.hero_title')}</h1>
                    <p className="text-xl">{t('home.hero_subtitle')}</p>
                </div>
            </div>

            {/* Welcome */}
            <section className="max-w-3xl mx-auto px-6 py-12 text-center">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">{t('home.welcome')}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{t('home.welcome_text')}</p>
            </section>

            <section className="max-w-4xl mx-auto px-6 pb-12">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    {t('home.history_title')}
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    {t('home.history_text')}
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 pb-12">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    {t('home.nature_title')}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                    {t('home.nature_text')}
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 pb-12">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">
                    {i18n.language === 'el' ? 'Τοποθεσία' : 'Location'}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                    {t('home.location_intro')}
                </p>
            </section>

            <div className="text-center mb-6">
            <Link to="/info" className="text-green-700 underline">
                {i18n.language === 'el'
                    ? 'Περισσότερες πληροφορίες για την Ποταμούλα'
                    : 'More information about Potamoula'}
            </Link>
            </div>
            {/* Google Maps */}
            <section className="max-w-4xl mx-auto px-6 pb-12">
                <div className="rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        title="Ποταμούλα"
                        src="https://www.google.com/maps?q=Ποταμούλα+Μακρυνείας+30015&output=embed"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    )
}