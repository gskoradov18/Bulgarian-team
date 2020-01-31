var obj = {
    "Title1" : {
        bg: "Какво е Синя Икономика?",
        en: "What is Blue Economy ?",
        ru: ""
    },
    "Text1": {
        bg: "Според Световната банка синята икономика е „устойчивото използване на океанските ресурси за икономически растеж, подобряване на поминъка и работни места, като същевременно се запазва здравето на океанската екосистема“. Европейската комисия го определя като „Всички икономически дейности, свързани с океаните, моретата и бреговете. Тя обхваща широк спектър от взаимосвързани установени и нововъзникващи сектори“. Общността на народите счита, че това е „възникваща концепция, която насърчава по-доброто управление на нашите океански или„ сини “ресурси“. Conservation International добавя, че „синята икономика включва и икономически ползи, които може да не се предлагат на пазара, като съхранение на въглерод, крайбрежна защита, културни ценности и биоразнообразие“. Центърът за синята икономика казва, че \" това е широко използван термин по целия свят с три свързани, но различни значения - цялостният принос на океаните за икономиките, необходимостта от справяне с екологичната и екологичната устойчивост на океаните и океана икономиката като възможност за растеж както за развитите, така и за развиващите се страни.\" " ,
        en: "According to the World Bank, the blue economy is the \"sustainable use of ocean resources for economic growth, improved livelihoods, and jobs while preserving the health of ocean ecosystem.\" European Commission defines it as \"All economic activities related to oceans, seas and coasts. It covers a wide range of interlinked established and emerging sectors.\" The Commonwealth of Nations considers it \"an emerging concept which encourages better stewardship of our ocean or 'blue' resources.\" Conservation International adds that \"blue economy also includes economic benefits that may not be marketed, such as carbon storage, coastal protection, cultural values and biodiversity.\" The Center for the Blue Economy says \"it is now a widely used term around the world with three related but distinct meanings- the overall contribution of the oceans to economies, the need to address the environmental and ecological sustainability of the oceans, and the ocean economy as a growth opportunity for both developed and developing countries.\"",
        ru: ""
    },
    "Title2" : {
        bg: "Защо Синята Икономика?",
        en: "Why The Blue Economy ?",
        ru: ""
    },
    "Text2": {
        bg: "Казано по-просто, синята икономика е устойчивото и интегрирано развитие на икономическите сектори в здравите океани. Основният принцип на концепцията е, че океанските сектори са неразривно свързани и не могат да се разглеждат изолирано. Опазването на здравето на океаните и защита на поминъка, продоволствената сигурност и благополучието на всички, които зависят от тях, зависи от обмислен стратегически подход - подход на синята икономика - за развитието на икономически дейности, които разчитат или влияят на океаните. Приемане на обектива синя икономика позволява на Световната банка и нейните партньори да предложи оптимални стратегии за развитие за страните, които зависят от чисти океани за растеж, работни места и храна. Тези стратегии разчитат на задълбочени диагностични анализи." ,
        en: "Put simply, the blue economy is the sustainable and integrated development of economic sectors in healthy oceans. The driving principle behind the concept is that oceanic sectors are inextricably interlinked and cannot be considered in isolation. Preserving the health of oceans and defending the livelihoods, food security, and well-being of all who depend upon them is contingent on a thoughtful, strategic approach—a blue economy approach—to the development of economic activities that rely on or affect oceans. Adopting a blue economy lens enables the World Bank and its partners to propose optimal development strategies for countries that depend on clean oceans for growth, jobs, and food. These strategies rely on thorough diagnostic analyses.",
        ru: ""
    },
    "Title3" : {
        bg: "Какво е предизвикателството?",
        en: "What is The Challenge ?",
        ru: ""
    },
    "Text3": {
        bg: "Морските ресурси, както крайбрежни, така и океански, осигуряват незаменими ползи и услуги, които съответстват на целите на близнаци на Групата на Световната банка за премахване на крайната бедност и стимулиране на споделения просперитет. Въпреки това океаните са в криза: замърсяване на морето и пластмасови отпадъци, заедно с нарастващото въздействие на изменението на климата, застрашават морските екосистеми, здравето на крайбрежните общности и ресурсите и услугите, които водят до растеж. Освен това нарастващото търсене на океански и сухопътни ресурси може да влоши съществуващото прекомерно използване на океанските ресурси и услуги, като същевременно увеличава потреблението на пластмаса и потоците от отпадъци. Без съгласуван отговор тези заплахи ще изчерпат допълнително риболова (от които над 30 процента са свръхулов), ще унищожат крайбрежните влажни зони и ще причинят пагубни ефекти върху природните богатства, които привличат туризма в крайбрежните общности. Тези предизвикателства се засилват от проблемите на управлението, особено в области извън националната юрисдикция, и конфликтите между употребата сред секторите, които могат да бъдат решени само чрез подобрено и по-добро интегрирано управление." ,
        en: "Marine resources, both coastal and oceanic, provide irreplaceable benefits and services that align with the World Bank Group’s twin goals of eliminating extreme poverty and boosting shared prosperity.However, oceans are in crisis: marine pollution and plastic litter, along with the growing impacts of climate change, endanger marine ecosystems, the health of coastal communities, and the resources and services that drive growth. Furthermore, growing demand for oceanic and land-based resources may worsen existing overexploitation of ocean resources and services while increasing plastic consumption and litter flows. Without a coordinated response, these threats will further deplete fisheries (of which over 30 percent are overfished), destroy coastal wetlands, and cause pernicious effects on the natural assets that attract tourism to coastal communities. These challenges are exacerbated by governance problems, especially in areas beyond national jurisdiction, and usage conflicts among sectors, which can be resolved only through improved and better integrated management.",
        ru: ""
    },

};

function changeMeTo(lang1) {
    $('[data-lang]').each(function(){
        var dataLangValue = $(this).data('lang');
        $(this).text(obj[dataLangValue][lang1]);
    })
}