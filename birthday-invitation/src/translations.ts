export const translations = {
  mk: {
    // --- General / Envelope ---
    openEnvelope: "Отвори ја поканата",
    envelopeSubtitle: "Крштевка & Прв Роденден | Вашата покана ве чека...",

    // --- Hero Section ---
    badge: "Првиот роденден на авантуристот",
    babyName: "Дариан",
    heroBadge: "Крштевка & Прв Роденден",
    heroIntro: "„Една прекратна година полна со први чекори и насмевки, проследена со благословот на светото крштевање. Заедно летаме кон нови радосни спомени!“",
    intro: "Една година полна со насмевки, радост и први полетувања во животот! Ве покануваме заедно да го прославиме првиот роденден.",

    // --- Date, Time & Location ---
    dateLabel: "Датум",
    dateValue: "Сабота, 7 Ноември 2026",
    timeLabel: "Време",
    timeValue: "17:00 часот",
    locationLabel: "Локација",
    locationName: "Марси бар, Штип",
    locationAddress: "Булевар Гоце Делчев, Штип 2000, Северна Македонија",
    mapBtn: "Отвори во Google Maps",

    // --- Dress Code ---
    dressCodeTitle: "Свечен код на облекување",
    dressCodeDesc: "Бидејќи ова е посебен момент за нас, ќе ни биде мило доколку заблескате во свечена облека и костими, за заедно да создадеме прекрасни фотографии и спомени.",

    // --- Countdown ---
    countdownTitle: "Одбројуваме до големиот ден!",
    countdownExpiredTitle: "Среќен роденден Дариан!",
    countdownExpiredSubtitle: "Eдна година полна со љубов!",
    days: "Дена",
    hours: "Часа",
    minutes: "Минути",
    seconds: "Секунди",

    // --- Photo Wall / Gallery ---
    liveMemoryWall: "Галерија на мемории",
    photoWallTitle: "Споделете ги вашите моменти 📸",
    photoWallSubtitle: "Сликајте се за време на прославата, зачувајте ги спомените и оставете ги во нашата трајна галерија!",
    cameraCardTitle: "Сликај со камера",
    cameraCardSub: "Отворете ја камерата веднаш",
    uploadCardTitle: "Прикажи од галерија",
    uploadCardSub: "Изберете постоечка слика",
    uploadBtn: "Прикажи слика",
    uploading: "Се зачувува...",
    uploadSuccess: "Успешно зачувано во галеријата!",
    previewPhotoCount: (current: number, total: number) => `Слика ${current} од ${total}`,
    closePreview: "Затвори",
    downloadPhoto: "Преземи ја сликата",
    guestGalleryTitle: (count: number) => `Галерија на гостите (${count})`,
    emptyGallery: "Сè уште нема качени слики. Бидете први што ќе споделете момент! ✈️",
    clickToPreview: "Кликни за преглед",
    showMore: (remaining: number) => `Прикажи повеќе (${remaining} преостанати)`,
    uploadError: "Грешка при качување на сликата.",

    // --- RSVP Form ---
    rsvpTitle: "Потврдете го вашето присуство",
    rsvpSubtitle: "Ве молиме известете нè дали ќе бидете дел од прославата најдоцна до први ноември",
    nameLabel: "Име и Презиме",
    namePlaceholder: "пр. Петар Петровски",
    phoneLabel: "Телефон / Viber (за контакт)",
    phonePlaceholder: "пр. 070 123 456",
    attendingLabel: "Дали ќе присуствувате?",
    accept: "Со задоволство",
    decline: "За жал, нема да можам",
    guestsLabel: "Број на возрасни гости",
    kidsLabel: "Број на деца",
    dietaryLabel: "Алергии / Белешки (опционално)",
    dietaryPlaceholder: "Известете нè ако имате специфични потреби...",
    submitBtn: "Потврди",
    submittingBtn: "Се испраќа...",
    successTitle: "Ви благодариме!",
    successDesc: "Вашиот одговор е забележан. Со нетрпение чекаме да се видиме!",
    errorText: "Настана грешка. Ве молиме обидете се повторно.",

    // --- Footer ---
    footer: "Со љубов изработено од вујко за првиот роденден на Дариан.",
  },

  en: {
    // --- General / Envelope ---
    openEnvelope: "Open Invitation",
    envelopeSubtitle: "Christening & First Birthday | Your invitation awaits...",

    // --- Hero Section ---
    badge: "The 1st Birthday Adventure of",
    babyName: "Darian",
    heroBadge: "Christening & First Birthday",
    heroIntro: "\"A wonderful year full of first steps and smiles, followed by the blessing of holy christening. Together we fly toward new joyful memories!\"",
    intro: "One whole year of smiles, joy, and the first flight into life's great adventures! You are warmly invited to celebrate our little pilot's very first birthday.",

    // --- Date, Time & Location ---
    dateLabel: "Date",
    dateValue: "Saturday, November 7th, 2026",
    timeLabel: "Time",
    timeValue: "5:00 PM Onwards",
    locationLabel: "Location",
    locationName: "Marsi Bar, Shtip",
    locationAddress: "Bulevar Goce Delcev, Shtip 2000, North Macedonia",
    mapBtn: "Open in Google Maps",

    // --- Dress Code ---
    dressCodeTitle: "Dress Code & Elegance",
    dressCodeDesc: "To match the elegance of this special milestone, we would love for our guests to join us in formal attire or suits. We can't wait to celebrate together!",

    // --- Countdown ---
    countdownTitle: "Countdown to the Celebration!",
    countdownExpiredTitle: "Happy 1st Birthday Darian!",
    countdownExpiredSubtitle: "Celebrating a wonderful year full of love!",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",

    // --- Photo Wall / Gallery ---
    liveMemoryWall: "Live Memory Wall",
    photoWallTitle: "Share Your Live Party Snaps",
    photoWallSubtitle: "Take photos during the celebration and keep them permanently saved in our live gallery!",
    cameraCardTitle: "Snap Instant Photo",
    cameraCardSub: "Open your camera right away",
    uploadCardTitle: "Upload from Library",
    uploadCardSub: "Choose an existing picture",
    uploadBtn: "Upload Picture",
    uploading: "Saving...",
    uploadSuccess: "Successfully saved to the gallery!",
    previewPhotoCount: (current: number, total: number) => `Photo ${current} of ${total}`,
    closePreview: "Close",
    downloadPhoto: "Download Photo",
    guestGalleryTitle: (count: number) => `Guest Gallery (${count})`,
    emptyGallery: "No photos uploaded yet. Be the first to share a moment! ✈️",
    clickToPreview: "Click to preview",
    showMore: (remaining: number) => `Show more (${remaining} remaining)`,
    uploadError: "Error uploading the image.",

    // --- RSVP Form ---
    rsvpTitle: "Kindly Respond",
    rsvpSubtitle: "Please let us know if you will be joining our celebration by November 1st",
    nameLabel: "Full Name",
    namePlaceholder: "e.g. John & Jane Doe",
    phoneLabel: "Phone Number (Optional)",
    phonePlaceholder: "e.g. +389 70 123 456",
    attendingLabel: "Will you attend?",
    accept: "Joyfully Accepts",
    decline: "Regretfully Declines",
    guestsLabel: "Adult Guests Count",
    kidsLabel: "Number of Kids",
    dietaryLabel: "Dietary Restrictions / Notes (Optional)",
    dietaryPlaceholder: "Let us know if you have any allergies...",
    submitBtn: "Confirm",
    submittingBtn: "Submitting...",
    successTitle: "Thank You!",
    successDesc: "Your response has been recorded. We can't wait to celebrate with you!",
    errorText: "Something went wrong. Please try again.",

    // --- Footer ---
    footer: "Crafted with love by his uncle for Darian's 1st birthday.",
  }
};