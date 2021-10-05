// WOW

new WOW().init();

// Change Valute Function

let valute = document.getElementById('valute');
let valuteIcon = document.getElementById('valuteIcon');

function changeValute(value, icon) {
    valute.textContent = value;

    if (icon === true) {
        valuteIcon.classList.remove('fa-sort-down');
        valuteIcon.classList.add('fa-sort-up');
    } else {
        valuteIcon.classList.remove('fa-sort-up');
        valuteIcon.classList.add('fa-sort-down');
    }
}

// Hide placeholder of input

$('.road').on('change', function () {
    $(this).siblings('.placeholder').hide();
});

// Replace from to

let from = document.getElementById('from');
let to = document.getElementById('to');

function swapElements(obj1, obj2) {
    // create marker element and insert it where obj1 is
    let temp = document.createElement("div");
    obj1.parentNode.insertBefore(temp, obj1);

    // move obj1 to right before obj2
    obj2.parentNode.insertBefore(obj1, obj2);

    // move obj2 to right before where obj1 used to be
    temp.parentNode.insertBefore(obj2, temp);

    // remove temporary marker node
    temp.parentNode.removeChild(temp);
}

function doSwap() {
    swapElements(document.getElementById("from"), document.getElementById("to"));
}

// Change passenger number
let passengerNumber = 1;
$("#currentPassenger").text(passengerNumber);

const reloadPassengerNumbers = (el, val) => {
    $("#currentPassenger").text(passengerNumber);
    el.parent().find("input").val(val);
    el.parent().attr("data-number", val);
};

const addPassenger = (el) => {
    let currentNumber = +el.parent().attr("data-number");
    currentNumber++;
    passengerNumber++;
    reloadPassengerNumbers(el, currentNumber);
};

const removePassenger = (el) => {
    let currentNumber = +el.parent().attr("data-number");
    if (passengerNumber <= 0 || currentNumber <= 0) return;
    currentNumber--;
    passengerNumber--;
    reloadPassengerNumbers(el, currentNumber);
};

// WORLD MAP

const lang = 'ru';

const tashkent = {
    id: 0,
    title: {
        ru: 'Ташкент',
        uz: 'Toshkent',
        en: 'Toshkent'
    }
};

const samarkand = {
    id: 1,
    title: {
        ru: 'Самарканд',
        uz: 'Samarqand',
        en: 'Samarkand'
    }
};

const nukus = {
    id: 2,
    title: {
        ru: 'Нукус',
        uz: 'Nukus',
        en: 'Nukus'
    }
};

const urgench = {
    id: 3,
    title: {
        ru: 'Ургенч',
        uz: 'Urganch',
        en: 'Urgench'
    }
};

const bukhara = {
    id: 4,
    title: {
        ru: 'Бухара',
        uz: 'Buxoro',
        en: 'Bukhara'
    }
};

const navoi = {
    id: 5,
    title: {
        ru: 'Навои',
        uz: 'Navoiy',
        en: 'Navoi'
    }
};

const termiz = {
    id: 6,
    title: {
        ru: 'Термиз',
        uz: 'Termiz',
        en: 'Termiz'
    }
};

const namangan = {
    id: 7,
    title: {
        ru: 'Наманган',
        uz: 'Namangan',
        en: 'Namangan'
    }
};

const fergana = {
    id: 8,
    title: {
        ru: 'Фергана',
        uz: `Farg'ona`,
        en: 'Fergana'
    }
};

const andijan = {
    id: 9,
    title: {
        ru: 'Андижан',
        uz: 'Andijon',
        en: 'Andijan'
    }
};

const moscow = {
    id: 10,
    title: {
        ru: 'Москва',
        uz: 'Moskva',
        en: 'Moscow'
    }
};

const petersburg = {
    id: 11,
    title: {
        ru: 'Санкт-Петербург',
        uz: 'Sankt-Peterburg',
        en: 'St. Peterburg'
    }
};

const voronezh = {
    id: 12,
    title: {
        ru: 'Воронеж',
        uz: 'Voronej',
        en: 'Voronezh'
    }
};

const kazan = {
    id: 13,
    title: {
        ru: 'Казань',
        uz: 'Qozon',
        en: 'Kazan'
    }
};

const ekaterinburg = {
    id: 14,
    title: {
        ru: 'Екатеринбург',
        uz: 'Ekaterinburg',
        en: 'Ekaterinburg'
    }
};

const novosibirsk = {
    id: 15,
    title: {
        ru: 'Новосибирск',
        uz: 'Novosibirsk',
        en: 'Novosibirsk'
    }
};

const astana = {
    id: 16,
    title: {
        ru: 'Астана',
        uz: 'Ostona',
        en: 'Astana'
    }
};

const almaty = {
    id: 17,
    title: {
        ru: 'Алматы',
        uz: 'Olmaota',
        en: 'Almaty'
    }
};

const aktau = {
    id: 18,
    title: {
        ru: 'Актау',
        uz: 'Aktau',
        en: 'Aktau'
    }
};

const dushanbe = {
    id: 19,
    title: {
        ru: 'Душанбе',
        uz: 'Dushanbe',
        en: 'Dushanbe'
    }
};

const istanbul = {
    id: 20,
    title: {
        ru: 'Стамбул',
        uz: 'Istanbul',
        en: 'Istanbul'
    }
};

const tbilisi = {
    id: 21,
    title: {
        ru: 'Тбилиси',
        uz: 'Tbilisi',
        en: 'Tbilisi'
    }
};

const baku = {
    id: 22,
    title: {
        ru: 'Баку',
        uz: 'Baku',
        en: 'Baku'
    }
};

const yerevan = {
    id: 23,
    title: {
        ru: 'Ереван',
        uz: 'Yerevan',
        en: 'Yerevan'
    }
};

const sharm = {
    id: 24,
    title: {
        ru: 'Шарм-Эль-Шейх',
        uz: 'Sharm al-Shayx',
        en: 'Sharm El Sheikh'
    }
};

const sharjah = {
    id: 25,
    title: {
        ru: 'Шарджа',
        uz: 'Voronej',
        en: 'Sharjah'
    }
};

let countries = [
    {
        title: tashkent.title[lang],

        from: {
            samarkand: samarkand.title[lang],
            nukus: nukus.title[lang],
            urgench: urgench.title[lang],
            bukhara: bukhara.title[lang],
            navoi: navoi.title[lang],
            termiz: termiz.title[lang],
            namangan: namangan.title[lang],
            fergana: fergana.title[lang],
        }
    },
    {
        title: samarkand.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: nukus.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: urgench.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: bukhara.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: navoi.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: termiz.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: namangan.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: fergana.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: andijan.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: moscow.title[lang],

        from: {
            tashkent: tashkent.title[lang],
            samarkand: samarkand.title[lang],
            nukus: nukus.title[lang],
            urgench: urgench.title[lang],
            bukhara: bukhara.title[lang],
            navoi: navoi.title[lang],
            termiz: termiz.title[lang],
            namangan: namangan.title[lang],
            fergana: fergana.title[lang],
        }
    },
    {
        title: petersburg.title[lang],

        from: {
            tashkent: tashkent.title[lang],
            samarkand: samarkand.title[lang],
            nukus: nukus.title[lang],
            urgench: urgench.title[lang],
            bukhara: bukhara.title[lang],
            navoi: navoi.title[lang],
            termiz: termiz.title[lang],
            namangan: namangan.title[lang],
            fergana: fergana.title[lang],
        }
    },
    {
        title: voronezh.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: kazan.title[lang],

        from: {
            tashkent: tashkent.title[lang],
            samarkand: samarkand.title[lang],
            fergana: fergana.title[lang],
        }
    },
    {
        title: ekaterinburg.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: novosibirsk.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: astana.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: almaty.title[lang],

        from: {
            tashkent: tashkent.title[lang],
            samarkand: samarkand.title[lang],
        }
    },
    {
        title: aktau.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: dushanbe.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: istanbul.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: tbilisi.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: baku.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: yerevan.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: sharm.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
    {
        title: sharjah.title[lang],

        from: {
            tashkent: tashkent.title[lang],
        }
    },
];

// Restart Flies

function restartFlies() {
    $('#flyTo').html('');
    $('#flyFrom').html('');
}

// Close Map Info Block

function closeMapInfo() {
    $('.world-map-info').hide(200);
    $('.city').removeClass('active');
}

// Change Map Info

function changeMapInfo(id, el) {
    restartFlies();
    $('.world-map-info').show(200);
    $('#flyTo').text(countries[id].title);
    for (let [key, value] of Object.entries(countries[id].from)) {
        $(`<li>${value}</li>`).appendTo('#flyFrom');
    };

    if (!$(el).hasClass('active')) {
        $('.city').removeClass('active');
        $(el).addClass('active');
    };
};

// Change Map
$(".world-map-switch label").on("click", function() {
    $(".world-map-svg").toggle(200);
})