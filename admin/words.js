/*global systemDictionary:true */
'use strict';

systemDictionary = {
    "options": {
        "en": "Options",
        "de": "Einstellungen",
        "ru": "Настройки",
        "pt": "Opções",
        "nl": "opties",
        "fr": "Options",
        "it": "Opzioni",
        "es": "Opciones",
        "pl": "Opcje",
        "zh-cn": "选项"
    },
    "trash types": {
        "en": "Trash Types",
        "de": "Abfall-Typen",
        "ru": "Типы мусора",
        "pt": "Tipos de Lixo",
        "nl": "Soorten afval",
        "fr": "Types de corbeille",
        "it": "Tipi di rifiuti",
        "es": "Tipos de basura",
        "pl": "Rodzaje śmieci",
        "zh-cn": "垃圾类型"
    },
    "ical instance": {
        "en": "ical instance",
        "de": "ical-Instanz",
        "ru": "реальный пример",
        "pt": "instância",
        "nl": "ical exemplaar",
        "fr": "instance ical",
        "it": "istanza ical",
        "es": "instancia ical",
        "pl": "instancja fizyczna",
        "zh-cn": "实例"
    },
    "ical instance help": {
        "en": "Choose your ical instance with pickup events",
        "de": "Wähle die ical-Instanz, welche die Abfuhrtermine bereitstellt",
        "ru": "Выберите свой экземпляр с событиями пикапа",
        "pt": "Escolha sua instância icônica com eventos de recebimento",
        "nl": "Kies uw ical exemplaar met ophaalgebeurtenissen",
        "fr": "Choisissez votre instance ical avec les événements de ramassage",
        "it": "Scegli la tua istanza ical con eventi di ritiro",
        "es": "Elija su instancia ical con eventos de recogida",
        "pl": "Wybierz swoje ical wystąpienie ze zdarzeniami odbioru",
        "zh-cn": "选择具有拾取事件的ical实例"
    },
    "global offset": {
        "en": "Global Offset (days)",
        "de": "Globaler Offset (Tage)",
        "ru": "Глобальное смещение (дни)",
        "pt": "Compensação global (dias)",
        "nl": "Wereldwijde offset (dagen)",
        "fr": "Décalage global (jours)",
        "it": "Offset globale (giorni)",
        "es": "Compensación global (días)",
        "pl": "Globalne przesunięcie (dni)",
        "zh-cn": "全球偏移量（天）"
    },
    "global offset help": {
        "en": "Number of days added (or substracted) from each event date",
        "de": "Anzahl der Tage, welche zum Termin im Kalender hinzugefügt (oder abgezogen) werden",
        "ru": "Количество дней, добавленных (или вычтенных) из каждой даты события",
        "pt": "Número de dias adicionados (ou subtraídos) a partir de cada data do evento",
        "nl": "Aantal dagen toegevoegd (of afgetrokken) vanaf elke afspraakdatum",
        "fr": "Nombre de jours ajoutés (ou soustraits) à partir de chaque date d'événement",
        "it": "Numero di giorni aggiunti (o sottratti) da ogni data dell'evento",
        "es": "Número de días agregados (o restados) de cada fecha de evento",
        "pl": "Liczba dni dodanych (lub odjęta) od każdej daty wydarzenia",
        "zh-cn": "从每个活动日期添加（或减去）的天数"
    },
    "next separator": {
        "en": "Next-Text Separator",
        "de": "Trenner für Nächste-Text",
        "ru": "Разделитель следующего текста",
        "pt": "Separador de texto seguinte",
        "nl": "Volgende-tekstscheider",
        "fr": "Séparateur de texte suivant",
        "it": "Separatore testo successivo",
        "es": "Separador de texto siguiente",
        "pl": "Separator następnego tekstu",
        "zh-cn": "下一个文本分隔符"
    },
    "next separator help": {
        "en": "Will be used to concatenate multiple trash types on the same day as text (and)",
        "de": "Wird genutzt, um Abfall-Typen am gleichen Tag als Text zu verketten (und)",
        "ru": "Будет использоваться для объединения нескольких типов мусора в один день с текстом (и)",
        "pt": "Será usado para concatenar vários tipos de lixo no mesmo dia que o texto (e)",
        "nl": "Wordt gebruikt om meerdere soorten prullenbak op dezelfde dag samen te voegen als tekst (en)",
        "fr": "Sera utilisé pour concaténer plusieurs types de corbeille le même jour que le texte (et)",
        "it": "Verrà utilizzato per concatenare più tipi di cestino nello stesso giorno del testo (e)",
        "es": "Se usará para concatenar múltiples tipos de basura el mismo día que el texto (y)",
        "pl": "Będzie używany do łączenia wielu typów śmieci w tym samym dniu co tekst (i)",
        "zh-cn": "将用于在同一天将多种垃圾类型与文本（和）连接在一起"
    },
    "skip same day at hour": {
        "en": "Skip same day at hour",
        "de": "Aktuellen Tag ab Stunde X überspringen",
        "ru": "Пропустить тот же день в час",
        "pt": "Pule o mesmo dia às horas",
        "nl": "Sla dezelfde dag om het uur over",
        "fr": "Passer le même jour à l'heure",
        "it": "Salta lo stesso giorno all'ora",
        "es": "Salta el mismo día a la hora",
        "pl": "Pomiń ten sam dzień o godzinie",
        "zh-cn": "每小时跳过同一天"
    },
    "skip same day at hour help": {
        "en": "After this hour, the next event search will skip today. This is relevant, if today and tomorrow is a pickup event.",
        "de": "Nach dieser Uhrzeit wird nach Abholungen in der Zukunft gesucht und heute übersprungen. Relevant, wenn heute und morgen eine Abholung stattfindet.",
        "ru": "После этого часа поиск следующего события будет пропущен сегодня. Это актуально, если сегодня и завтра пикап.",
        "pt": "Após essa hora, a próxima pesquisa de eventos será ignorada hoje. Isso é relevante, se hoje e amanhã for um evento de recebimento.",
        "nl": "Na dit uur wordt het volgende evenement zoeken vandaag overgeslagen. Dit is relevant, als vandaag en morgen een pick-up evenement is.",
        "fr": "Après cette heure, la prochaine recherche d'événement sera ignorée aujourd'hui. C'est pertinent, si aujourd'hui et demain est un événement de ramassage.",
        "it": "Dopo quest'ora, la prossima ricerca dell'evento salterà oggi. Questo è rilevante, se oggi e domani è un evento di ritiro.",
        "es": "Después de esta hora, la próxima búsqueda de eventos se saltará hoy. Esto es relevante, si hoy y mañana es un evento de recolección.",
        "pl": "Po tej godzinie wyszukiwanie następnego wydarzenia zostanie pominięte dzisiaj. Jest to istotne, jeśli dzisiaj i jutro odbędzie się odbiór.",
        "zh-cn": "在这小时之后，下一个事件搜索将在今天跳过。如果今天和明天是接送活动，则这是相关的。"
    },
    "name": {
        "en": "Name",
        "de": "Name",
        "ru": "имя",
        "pt": "Nome",
        "nl": "Naam",
        "fr": "Nom",
        "it": "Nome",
        "es": "Nombre",
        "pl": "Nazwa",
        "zh-cn": "名称"
    },
    "event match": {
        "en": "Matches events",
        "de": "Gilt für Termine",
        "ru": "Соответствует событиям",
        "pt": "Corresponde a eventos",
        "nl": "Komt overeen met evenementen",
        "fr": "Matchs d'événements",
        "it": "Incontri eventi",
        "es": "Eventos de partidos",
        "pl": "Dopasowuje wydarzenia",
        "zh-cn": "比赛赛事"
    },
    "color": {
        "en": "color",
        "de": "Farbe",
        "ru": "цвет",
        "pt": "cor",
        "nl": "kleur",
        "fr": "Couleur",
        "it": "colore",
        "es": "color",
        "pl": "kolor",
        "zh-cn": "颜色"
    },
    "exact match": {
        "en": "Exact Match",
        "de": "Genauer Treffer",
        "ru": "Точное совпадение",
        "pt": "Combinação exata",
        "nl": "Exacte overeenkomst",
        "fr": "Correspondance exacte",
        "it": "Corrispondenza esatta",
        "es": "Coincidencia exacta",
        "pl": "Dokładne dopasowanie",
        "zh-cn": "完全符合"
    },
    "table name help": {
        "en": "Name: Name of the trash pickup. e.g. \"paper\", \"trash\" or \"general waste\"",
        "de": "Name: Name der Abholung. Zum Beispiel \"Papiertonne\", \"Restabfalltonne\", \"Biotonne\" oder \"Gelber Sack\"",
        "ru": "Имя: Название мусорной корзины. например «бумага», «мусор» или «общие отходы»",
        "pt": "Nome: nome da coleta de lixo. por exemplo. \"papel\", \"lixo\" ou \"lixo geral\"",
        "nl": "Naam: naam van de prullenbak. bijv. \"papier\", \"afval\" of \"algemeen afval\"",
        "fr": "Nom: nom du ramassage des ordures. par exemple. \"papier\", \"poubelle\" ou \"déchet général\"",
        "it": "Nome: nome del cestino. per esempio. \"carta\", \"spazzatura\" o \"rifiuti generici\"",
        "es": "Nombre: Nombre de la recolección de basura. p.ej. \"papel\", \"basura\" o \"desperdicio general\"",
        "pl": "Nazwa: nazwa odbioru śmieci. na przykład „papier”, „śmieci” lub „odpady ogólne”",
        "zh-cn": "名称：垃圾箱的名称。例如“纸张”，“垃圾”或“一般废物”"
    },
    "table match help": {
        "en": "Matches events: This text must be included in the event name of the calendar. If \"Exact Match\" is checked, the name has to match exactly.",
        "de": "Gilt für Termine: Dieser Text muss als Termin im Kalender enthalten sein, damit dieser als Abholtermin des Typs erkannt wird. Wird \"Genauer Treffer\" muss der Termin genau übereinstimmen.",
        "ru": "Соответствует событиям: этот текст должен быть включен в название события календаря. Если установлен флажок «Точное соответствие», имя должно точно соответствовать.",
        "pt": "Corresponde a eventos: este texto deve ser incluído no nome do evento do calendário. Se a opção \"Correspondência exata\" estiver marcada, o nome deverá corresponder exatamente.",
        "nl": "Komt overeen met evenementen: deze tekst moet worden opgenomen in de naam van de agenda. Als \"Exact zoeken\" is aangevinkt, moet de naam exact overeenkomen.",
        "fr": "Correspond aux événements: ce texte doit être inclus dans le nom de l'événement du calendrier. Si \"Correspondance exacte\" est coché, le nom doit correspondre exactement.",
        "it": "Abbina eventi: questo testo deve essere incluso nel nome dell'evento del calendario. Se si seleziona \"Corrispondenza esatta\", il nome deve corrispondere esattamente.",
        "es": "Eventos de coincidencias: este texto debe incluirse en el nombre del evento del calendario. Si se marca \"Exact Match\", el nombre debe coincidir exactamente.",
        "pl": "Pasuje do wydarzeń: ten tekst musi być zawarty w nazwie wydarzenia kalendarza. Jeśli zaznaczone jest „Dopasowanie ścisłe”, nazwa musi być dokładnie taka sama.",
        "zh-cn": "匹配事件：此文本必须包含在日历的事件名称中。如果选中“完全匹配”，则名称必须完全匹配。"
    },
    "table color help": {
        "en": "Specify a color for the trash type. This color can be used in VIS to colorize the pickup type.",
        "de": "Mit diesem Farbcode können die einzelnen Termine in VIS eingefärbt werden.",
        "ru": "Укажите цвет для типа мусора. Этот цвет можно использовать в VIS для раскраски типа пикапа.",
        "pt": "Especifique uma cor para o tipo de lixo. Essa cor pode ser usada no VIS para colorir o tipo de coleta.",
        "nl": "Geef een kleur op voor het type prullenbak. Deze kleur kan in VIS worden gebruikt om het ophaaltype te kleuren.",
        "fr": "Spécifiez une couleur pour le type de corbeille. Cette couleur peut être utilisée dans VIS pour coloriser le type de micro.",
        "it": "Specifica un colore per il tipo di cestino. Questo colore può essere utilizzato in VIS per colorare il tipo di pickup.",
        "es": "Especifique un color para el tipo de basura. Este color se puede usar en VIS para colorear el tipo de recolección.",
        "pl": "Określ kolor dla typu kosza. Tego koloru można użyć w VIS do pokolorowania typu odbioru.",
        "zh-cn": "指定垃圾桶类型的颜色。可以在VIS中使用此颜色为拾取器类型着色。"
    }
};