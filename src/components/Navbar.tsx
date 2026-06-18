import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {useState} from "react";

export default function Navbar() {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <nav className="bg-green-800 text-white px-6 py-4">
            <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Ποταμούλα</span>

                {/* Hamburger */}
                <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link to="/" className="hover:text-green-200 transition">{t('nav.home')}</Link>
                    <Link to="/photos" className="hover:text-green-200 transition">{t('nav.photos')}</Link>
                    <Link to="/info" className="hover:text-green-200 transition">{t('nav.info')}</Link>
                    <div className="flex items-center gap-1 bg-green-900 rounded-full p-1">
                        <button onClick={() => i18n.changeLanguage('el')} className={`px-3 py-1 rounded-full text-sm font-medium transition ${i18n.language === 'el' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'}`}>ΕΛ</button>
                        <button onClick={() => i18n.changeLanguage('en')} className={`px-3 py-1 rounded-full text-sm font-medium transition ${i18n.language === 'en' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'}`}>EN</button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4">
                    <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-green-200">{t('nav.home')}</Link>
                    <Link to="/photos" onClick={() => setMenuOpen(false)} className="hover:text-green-200">{t('nav.photos')}</Link>
                    <Link to="/info" onClick={() => setMenuOpen(false)} className="hover:text-green-200">{t('nav.info')}</Link>
                    <div className="flex items-center gap-1 bg-green-900 rounded-full p-1 w-fit">
                        <button onClick={() => i18n.changeLanguage('el')} className={`px-3 py-1 rounded-full text-sm font-medium transition ${i18n.language === 'el' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'}`}>ΕΛ</button>
                        <button onClick={() => i18n.changeLanguage('en')} className={`px-3 py-1 rounded-full text-sm font-medium transition ${i18n.language === 'en' ? 'bg-white text-green-800' : 'text-green-300 hover:text-white'}`}>EN</button>
                    </div>
                </div>
            )}
        </nav>
    )
}