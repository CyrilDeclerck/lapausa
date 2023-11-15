import fr from '../locales/fr.json'
import it from '../locales/it.json'
import en from '../locales/en.json'
export default defineI18nConfig(() => {
    return {
        legacy: false,
        locale: 'fr',
        messages: {
            fr,
            it,
            en
        }
    }
})
