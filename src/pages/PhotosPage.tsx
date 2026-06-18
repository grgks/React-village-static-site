import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const photos = [
    '/images/potamoula1.jpg',
    '/images/potamoulaBench.jpg',
    '/images/potamoula2.jpg',
    '/images/potamoula3.jpg'
]

export default function PhotosPage() {
    const { t } = useTranslation()
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-green-800 mb-8">{t('nav.photos')}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {photos.map((src, i) => (
                    <div
                        key={i}
                        className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                        onClick={() => setSelected(src)}
                    >
                        <img
                            src={src}
                            alt={`Ποταμούλα ${i + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition duration-300"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <img
                        src={selected}
                        alt="fullscreen"
                        className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                    />
                    <button
                        className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-green-300"
                        onClick={() => setSelected(null)}
                    >
                        ×
                    </button>
                </div>
            )}
        </div>
    )
}