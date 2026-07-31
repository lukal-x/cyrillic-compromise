export class UniversalTransliterator {
    constructor() {
        this.maps = {
            balkan: {
                'a': 'а', 'b': 'б', 'c': 'ц', 'č': 'ч', 'ć': 'ць', 'd': 'д', 'đ': 'джь', 'e': 'е',
                'f': 'ф', 'g': 'г', 'h': 'х', 'i': 'і', 'j': 'й', 'k': 'к', 'l': 'л', 'm': 'м',
                'n': 'н', 'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 'š': 'ш', 't': 'т', 'u': 'у',
                'v': 'в', 'z': 'з', 'ž': 'ж',
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'ђ': 'джь', 'е': 'е', 'ж': 'ж',
                'з': 'z', 'и': 'і', 'ј': 'й', 'к': 'к', 'л': 'л', 'љ': 'ль', 'м': 'м', 'н': 'н',
                'њ': 'нь', 'о': 'о', 'п': 'п', 'р': 'р', 'с': 'с', 'т': 'т', 'ћ': 'ць', 'у': 'у',
                'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч', 'џ': 'дж', 'ш': 'ш'
            },
            eastern: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з', 
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п', 
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч', 
                'ш': 'ш', 'щ': 'щ', 'ю': 'ю', 'я': 'я', 'ь': 'ь', 'ы': 'и', 'ъ': 'а'
            },
            bulgarian: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': 'ъ', 'ь': 'ь', 'ю': 'ю', 'я': 'я'
            },
            czech_slovak: {
                'a': 'а', 'á': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д', 'ď': 'дь', 'e': 'е', 
                'é': 'е', 'ž': 'ж', 'z': 'з', 'i': 'і', 'í': 'і', 'j': 'й', 'k': 'к', 'l': 'л', 
                'ĺ': 'л', 'ľ': 'ль', 'm': 'м', 'n': 'н', 'ň': 'нь', 'o': 'о', 'ó': 'о', 'p': 'п', 
                'r': 'р', 'ŕ': 'р', 's': 'с', 'š': 'ш', 't': 'т', 'ť': 'ть', 'u': 'у', 'ú': 'у', 
                'ů': 'у', 'f': 'ф', 'h': 'г', 'c': 'ц', 'č': 'ч', 'y': 'и', 'ý': 'и',
                'х': 'х', 'ж': 'ж', 'ч': 'ч', 'ш': 'ш', 'є': 'є', 'я': 'я', 'л': 'л'
            },
            polish_sorbian: {
                'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'х', 
                'i': 'і', 'j': 'й', 'k': 'к', 'l': 'л', 'ł': 'в', 'm': 'м', 'n': 'н', 'o': 'о', 
                'ó': 'у', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'w': 'в', 'y': 'и', 
                'z': 'з', 'ž': 'ж',
                'щ': 'щ', 'х': 'х', 'ч': 'ч', 'ш': 'ш'
            },
            kazakh: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п', 'р': 'р',
                'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч', 'ш': 'ш',
                'щ': 'щ', 'ъ': '', 'ы': 'и', 'ь': '', 'э': 'е', 'ю': 'ю', 'я': 'я', 'і': 'і',
                'ұ': 'у', 'ү': 'у', 'ә': 'ә'
            },
            mongolian: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'о', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': '', 'ы': 'і', 'ь': 'ь', 'э': 'е', 'ю': 'ю', 'я': 'я',
                'ө': 'е', 'ү': 'ү'
            },
            greek: {
                'α': 'а', 'β': 'в', 'γ': 'г', 'δ': 'д', 'ε': 'е', 'ζ': 'з', 'η': 'і', 'θ': 'т',
                'ι': 'і', 'κ': 'к', 'λ': 'л', 'μ': 'м', 'ν': 'н', 'ξ': 'кс', 'ο': 'о', 'π': 'п',
                'ρ': 'р', 'σ': 'с', 'ς': 'с', 'τ': 'т', 'υ': 'і', 'φ': 'ф', 'χ': 'х', 'ψ': 'пс',
                'ω': 'о'
            },
            caucasian: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': 'ъ', 'ы': 'и', 'ь': 'ь', 'э': 'е', 'ю': 'ю', 'я': 'я',
                'і': 'і', 'Ӏ': 'Ӏ', 'ӏ': 'ӏ', 'аь': 'аь', 'хоь': 'хоь'
            },
            uralic: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': '', 'ы': 'и', 'ь': 'ь', 'э': 'е', 'ю': 'ю', 'я': 'я',
                'ӟ': 'ӟ', 'ӥ': 'і', 'ӧ': 'е'
            },
            iranic_central_asia: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': '', 'ы': 'и', 'ь': 'ь', 'э': 'е', 'ю': 'ю', 'я': 'я',
                'ӣ': 'ӣ', 'ҷ': 'ҷ'
            },
            romance_cyrillic: {
                'a': 'а', 'ă': 'е', 'â': 'и', 'b': 'б', 'c': 'к', 'd': 'д', 
                'e': 'е', 'f': 'ф', 'g': 'ґ', 'h': 'х', 'i': 'і', 'î': 'ін', 
                'j': 'ж', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о', 
                'p': 'п', 'r': 'р', 's': 'с', 'ș': 'ш', 'ş': 'ш', 't': 'т', 
                'ț': 'ц', 'ţ': 'ц', 'u': 'у', 'v': 'в', 'x': 'кс', 'z': 'з'
            },
            rusyn: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'ґ': 'ґ', 'д': 'д', 'е': 'е', 'ж': 'ж',
                'з': 'з', 'и': 'и', 'і': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н',
                'о': 'о', 'п': 'п', 'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х',
                'ц': 'ц', 'ч': 'ч', 'ш': 'ш', 'щ': 'щ', 'ю': 'ю', 'я': 'я', 'ь': 'ь',
                'є': 'є', 'ї': 'ї', 'ы': 'и', 'ъ': '’'
            },
            sinitic_cyrillic: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': '', 'ы': 'и', 'ь': '', 'э': 'е', 'ю': 'ю', 'я': 'я'
            },
            baltic: {
                'a': 'а', 'b': 'б', 'c': 'ц', 'č': 'ч', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г',
                'h': 'х', 'i': 'і', 'j': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
                'p': 'п', 'r': 'р', 's': 'с', 'š': 'ш', 't': 'т', 'u': 'у', 'v': 'в', 'z': 'з',
                'ž': 'ж'
            },
            kurdish_cyrillic: {
                'а': 'а', 'б': 'б', 'в': 'в', 'г': 'г', 'д': 'д', 'е': 'е', 'ж': 'ж', 'з': 'з',
                'и': 'і', 'й': 'й', 'к': 'к', 'л': 'л', 'м': 'м', 'н': 'н', 'о': 'о', 'п': 'п',
                'р': 'р', 'с': 'с', 'т': 'т', 'у': 'у', 'ф': 'ф', 'х': 'х', 'ц': 'ц', 'ч': 'ч',
                'ш': 'ш', 'щ': 'щ', 'ъ': '', 'ы': 'и', 'ь': '', 'э': 'е', 'ю': 'ю', 'я': 'я'
            }
        };
    }

    _preprocessDigraphs(text, languageGroup) {
        if (languageGroup === 'balkan') {
            if (/[а-яА-ЯёЁ]/.test(text)) {
                text = this._cyrillicToLatin(text);
            }
            return text
                .replace(/ije/g, 'іє').replace(/Ije/g, 'Іє').replace(/IJE/g, 'ІЄ')
                .replace(/je/g, 'є').replace(/Je/g, 'Є').replace(/JE/g, 'Є')
                .replace(/ija/g, 'ія').replace(/Ija/g, 'Ія').replace(/IJA/g, 'ІЯ')
                .replace(/iju/g, 'ію').replace(/Iju/g, 'Ію').replace(/IJU/g, 'ІЮ')
                .replace(/ja/g, 'я').replace(/Ja/g, 'Я').replace(/JA/g, 'Я')
                .replace(/ju/g, 'ю').replace(/Ju/g, 'Ю').replace(/JU/g, 'Ю')
                .replace(/lj/g, 'ль').replace(/Lj/g, 'Ль').replace(/LJ/g, 'ЛЬ')
                .replace(/nj/g, 'нь').replace(/Nj/g, 'Нь').replace(/NJ/g, 'НЬ')
                .replace(/dž/g, 'дж').replace(/Dž/g, 'Дж').replace(/DŽ/g, 'ДЖ')
                .replace(/đ/g, 'джь').replace(/Đ/g, 'Джь')
                .replace(/i/g, 'і').replace(/I/g, 'І');
        }
        
        if (languageGroup === 'polish_sorbian') {
            return text
                .replace(/szcz/g, 'щ').replace(/Szcz/g, 'Щ').replace(/SZCZ/g, 'Щ')
                .replace(/ch/g, 'х').replace(/Ch/g, 'Х').replace(/CH/g, 'Х')
                .replace(/cz/g, 'ч').replace(/Cz/g, 'Ч').replace(/CZ/g, 'Ч')
                .replace(/sz/g, 'ш').replace(/Sz/g, 'Ш').replace(/SZ/g, 'Ш')
                .replace(/rz/g, 'ж').replace(/Rz/g, 'Ж').replace(/RZ/g, 'Ж')
                .replace(/ż/g, 'ж').replace(/Ż/g, 'Ж')
                .replace(/ł/g, 'в').replace(/Ł/g, 'В')
                .replace(/ę/g, 'ен').replace(/Ę/g, 'Ен')
                .replace(/ą/g, 'он').replace(/Ą/g, 'Он')
                .replace(/ci/g, 'ці').replace(/Ci/g, 'Ці')
                .replace(/ć/g, 'ць').replace(/Ć/g, 'Ць')
                .replace(/si/g, 'сьі').replace(/Si/g, 'Сьі')
                .replace(/ś/g, 'сь').replace(/Ś/g, 'Сь')
                .replace(/zi/g, 'зьі').replace(/Zi/g, 'Зьі')
                .replace(/ź/g, 'зь').replace(/Ź/g, 'Зь')
                .replace(/ni/g, 'ньі').replace(/Ni/g, 'Ньі')
                .replace(/ń/g, 'нь').replace(/Ń/g, 'Нь')
                .replace(/w/g, 'в').replace(/W/g, 'В')
                .replace(/i/g, 'і').replace(/I/g, 'І')
                .replace(/y/g, 'и').replace(/Y/g, 'И');
        }

        if (languageGroup === 'czech_slovak') {
            return text
                .replace(/x/g, 'кс').replace(/X/g, 'Кс')
                .replace(/ch/g, 'х').replace(/Ch/g, 'Х').replace(/CH/g, 'Х')
                .replace(/ř/g, 'рж').replace(/Ř/g, 'Рж')
                .replace(/ě/g, 'є').replace(/Ě/g, 'Є')
                .replace(/ä/g, 'е').replace(/Ä/g, 'Е')
                .replace(/ô/g, 'уо').replace(/Ô/g, 'Уо')
                .replace(/ľа/g, 'ля').replace(/Ľа/g, 'Ля')
                .replace(/ľе/g, 'лє').replace(/Ľе/g, 'Лє')
                .replace(/іа/g, 'іа').replace(/іе/g, 'іє')
                .replace(/y/g, 'и').replace(/Ý/g, 'И').replace(/ý/g, 'и')
                .replace(/i/g, 'і').replace(/Í/g, 'І').replace(/í/g, 'і')
                .replace(/ci/g, 'ці').replace(/Ci/g, 'Ці');
        }

        if (languageGroup === 'greek') {
            let cleanText = text
                .replace(/[ά]/g, 'α').replace(/[έ]/g, 'ε')
                .replace(/[ή]/g, 'η').replace(/[ίϊΐ]/g, 'ι')
                .replace(/[ό]/g, 'ο').replace(/[ύϋΰ]/g, 'υ')
                .replace(/[ώ]/g, 'ω')
                .replace(/[Ά]/g, 'Α').replace(/[Έ]/g, 'Ε')
                .replace(/[Ή]/g, 'Η').replace(/[Ί]/g, 'Ι')
                .replace(/[Ό]/g, 'Ο').replace(/[Ύ]/g, 'Υ')
                .replace(/[Ώ]/g, 'Ω');

            return cleanText
                .replace(/ου/g, 'у').replace(/Ου/g, 'У')
                .replace(/οι/g, 'і').replace(/Οι/g, 'І')
                .replace(/ει/g, 'і').replace(/Ει/g, 'І')
                .replace(/αι/g, 'е').replace(/Αι/g, 'Е')
                .replace(/μπ/g, 'б').replace(/Μπ/g, 'Б');
        }

        if (languageGroup === 'caucasian') {
            return text
                .replace(/(\p{L})1/gu, '$1ъ').replace(/1(\p{L})/gu, 'ъ$1')
                .replace(/ӕ/g, 'е').replace(/Ӕ/g, 'Е')
                .replace(/и/g, 'і').replace(/И/g, 'І')
                .replace(/ы/g, 'и').replace(/Ы/g, 'И');
        }

        if (languageGroup === 'eastern') {
            return text
                .replace(/ъ/g, 'а').replace(/Ъ/g, 'А')
                .replace(/ы/g, 'и').replace(/Ы/g, 'И')
                .replace(/и/g, 'і').replace(/И/g, 'І');
        }

        if (languageGroup === 'rusyn') {
            text = text.replace(/([бвгґджзклмнпрстфхцчшщ])ё/g, '$1ьо');
            text = text.replace(/([БВГҐДЖЗКЛМНПРСТФХЦЧШЩ])Ё/g, '$1ЬО');
            text = text.replace(/([БВГҐДЖЗКЛМНПРСТФХЦЧШЩ])ё/g, '$1ьо');

            text = text.replace(/([А-ЯҐЄІЇЫЪЬ])Ё/g, '$1ЙО');
            text = text.replace(/Ё([А-ЯҐЄІЇЫЪЬ])/g, 'ЙО$1');
            text = text.replace(/Ё/g, 'Йо');
            text = text.replace(/ё/g, 'йо');
            
            return text;
        }

        if (languageGroup === 'romance_cyrillic') {
            return text
                .replace(/che/gi, 'ке').replace(/chi/gi, 'кі')
                .replace(/ghe/gi, 'ґе').replace(/ghi/gi, 'ґі')
                .replace(/cea/gi, 'ча').replace(/cia/gi, 'ча')
                .replace(/ce/gi, 'че').replace(/ci/gi, 'чі')
                .replace(/gea/gi, 'джа').replace(/gia/gi, 'джа')
                .replace(/ge/gi, 'дже').replace(/gi/gi, 'джі')
                .replace(/c([aouAOU])/g, 'к$1').replace(/C([aouAOU])/g, 'К$1')
                .replace(/c$/g, 'к');
        }
        
        return text;
    }

    _cyrillicToLatin(text) {
        const cyrToLatMap = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'ђе': 'đe', 'ђ': 'đ', 'е': 'e', 'ж': 'ž',
            'з': 'z', 'и': 'i', 'ј': 'j', 'к': 'k', 'л': 'l', 'љ': 'lj', 'м': 'm', 'н': 'n',
            'њ': 'nj', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'ћ': 'ć', 'у': 'u',
            'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'č', 'џ': 'dž', 'ш': 'š'
        };
        return text.split('').map(char => {
            const lower = char.toLowerCase();
            if (cyrToLatMap[lower]) {
                return char === char.toUpperCase() ? cyrToLatMap[lower].toUpperCase() : cyrToLatMap[lower];
            }
            return char;
        }).join('');
    }

    transliterate(text, languageGroup) {
        const currentMap = this.maps[languageGroup];
        if (!currentMap) {
            throw new Error(`Language group '${languageGroup}' not found.`);
        }

        let processedText = this._preprocessDigraphs(text, languageGroup);

        return processedText.split('').map(char => {
            const lowerChar = char.toLowerCase();

            if (currentMap[lowerChar] === undefined) {
                return char;
            }

            const replacement = currentMap[lowerChar];

            if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                return replacement.charAt(0).toUpperCase() + replacement.slice(1);
            }

            return replacement;
        }).join('');
    }
}
