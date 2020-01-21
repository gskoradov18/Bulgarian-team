var obj = {
    "Blue Economy Title1" : {
        bg: "Epa nema problem bace",
        en: "my header"
    },
    "neshto": {
        bg: "моят хедър",
        en: "my header"
    }
};

function changeMeTo(lang1) {
    $('[data-lang]').each(function(){
        var dataLangValue = $(this).data('lang');
        $(this).text(obj[dataLangValue][lang1]);
    })
}