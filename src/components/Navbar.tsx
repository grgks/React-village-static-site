import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const { t, i18n } = useTranslation()


    return (
        <nav className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold">{t('potamoula')}</span>
            <div className="flex gap-6 items-center">
                <Link to="/" className="hover:text-green-200 transition">{t('nav.home')}</Link>
                <Link to="/photos" className="hover:text-green-200 transition">{t('nav.photos')}</Link>
                <Link to="/info" className="hover:text-green-200 transition">{t('nav.info')}</Link>
                <div className="flex items-center gap-1 bg-green-900 rounded-full p-1">
                    <button
                        onClick={() => i18n.changeLanguage('el')}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                            i18n.language === 'el' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'
                        }`}
                    >
                        ΕΛ
                    </button>
                    <button
                        onClick={() => i18n.changeLanguage('en')}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                            i18n.language === 'en' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'
                        }`}
                    >
                        EN
                    </button>
                </div>
            </div>
        </nav>
    )
}