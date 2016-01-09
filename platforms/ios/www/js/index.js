// Группы которые играют
var groups = [
    {
        id: 1,
        name: "Работники МЕТРО",
        color: "btn-primary",
        colorAllert: "alert-info",
        colorRu: "Синие",
        loaction: "Спальня",
        quests: [
            {id :1, answer: "635556731456542590"},
            {id :2, answer: "fvNGF98Jg"},
            {id :3, answer: "7P8X4MR6oNgcTvRx8k"},
            {id :4, answer: "642315"},
            {id :5, answer: "Китай"},
            {id :6, answer: "дюлбрев"}
        ],
        flareGun: {
            name: "Сигнальный пистолет",
            description: "<img src='img/finish.jpg' class='img-responsive img-rounded'/><p>Вы отгадали все загадки Купера и вошли в БУНКЕР!</p><p>На исходе последние секунды операции по поиску выживших после взрыва и вы рискуете упустить спасительный шатл.</p><p>Сигнальный пистолет находится в кармане детской кроватки.</p>"
        }
    },
    {
        id: 2,
        name: "Физики-ядерщики",
        color: "btn-danger",
        colorAllert: "alert-danger",
        colorRu: "Красные",
        loaction: "Гостинная",
        quests: [
            {id :2, answer: "fvNGF98Jg"},
            {id :3, answer: "7P8X4MR6oNgcTvRx8k"},
            {id :4, answer: "642315"},
            {id :5, answer: "Китай"},
            {id :6, answer: "дюлбрев"},
            {id :1, answer: "635556731456542590"}
        ],
        flareGun: {
            name: "Сигнальный пистолет",
            description: "<img src='img/finish.jpg' class='img-responsive img-rounded'/><p>Вы отгадали все загадки Купера и вошли в БУНКЕР!</p><p>На исходе последние секунды операции по поиску выживших после взрыва и вы рискуете упустить спасительный шатл.</p><p>Сигнальный пистолет находится в первом слева напольном пенале.</p>"
        }
    },
    {
        id: 3,
        name: "Заключенные",
        color: "btn-warning",
        colorAllert: "alert-warning",
        colorRu: "Желтые",
        loaction: "Кухня",
        quests: [
            {id :3, answer: "7P8X4MR6oNgcTvRx8k"},
            {id :4, answer: "642315"},
            {id :5, answer: "Китай"},
            {id :6, answer: "дюлбрев"},
            {id :1, answer: "635556731456542590"},
            {id :2, answer: "fvNGF98Jg"}
        ],
        flareGun: {
            name: "Сигнальный пистолет",
            description: "<img src='img/finish.jpg' class='img-responsive img-rounded'/><p>Вы отгадали все загадки Купера и вошли в БУНКЕР!</p><p>На исходе последние секунды операции по поиску выживших после взрыва и вы рискуете упустить спасительный шатл.</p><p>Сигнальный пистолет находится в ящике под духовкой.</p>"
        }
    },
    {
        id: 4,
        name: "Военные",
        color: "btn-success",
        colorAllert: "alert-success",
        colorRu: "Зелёные",
        loaction: "Кабинет",
        quests: [
            {id :4, answer: "642315"},
            {id :5, answer: "Китай"},
            {id :6, answer: "дюлбрев"},
            {id :1, answer: "635556731456542590"},
            {id :2, answer: "fvNGF98Jg"},
            {id :3, answer: "7P8X4MR6oNgcTvRx8k"}
        ],
        flareGun: {
            name: "Сигнальный пистолет",
            description: "<img src='img/finish.jpg' class='img-responsive img-rounded'/><p>Вы отгадали все загадки Купера и вошли в БУНКЕР!</p><p>На исходе последние секунды операции по поиску выживших после взрыва и вы рискуете упустить спасительный шатл.</p><p>Сигнальный пистолет находится в первом отсеке встроенного шкафа во втором ящике сверху.</p>"
        }
    }
];

// Квесты
var quests = [
    {
        id: 1,
        name: "Счастливое число Купера",
        description: "<img src='img/1.jpg' class='img-responsive img-rounded'/><p>Вам повезло, в вашей команде есть Умник, державший в своих руках архив Купера по проекту БУНКЕР. К сожалению под воздействием радиации, детали стерлись из его памяти, но одна зацепка осталась, и он хранил ее много лет с целью наживы. Жизнь распорядилась по-своему и эта информация уже нужна ему и его команде, чтобы выжить…</p>"
    },
    {
        id: 2,
        name: "Подземелье",
        description: "<img src='img/2.jpg' class='img-responsive img-rounded'/><p>\"Как это обычно бывает в жизни, многие пользуются плодами чужого труда в собственных интересах. Пришло время слезть с шеи более умного компаньона и проявить себя лично. Вижу, что самый тугой из вас Верзила, так пусть хоть мышцами поработает. Поручаю ему добыть мое следующее задание. Как у него со спортивным ориентированием? Как я и думал, плоховато! Тогда, так уж и быть, дам ему в напарники Командира, у которого с этим делом получше. Мое следующее задание находится в самом глубоком месте воронки взрыва. Вроде бы в Подземелье есть спуск в кабине на тросах, но сохранился ли он после взрыва, я не подскажу.\"</p>"
    },
    {
        id: 3,
        name: "Холодные игры",
        description: "<img src='img/3.jpg' class='img-responsive img-rounded'/><p>\"Чтож, вы сильны духом и мне это нравится! Ну ничего, может следующая загадка охладит ваш пыл? Мне больше нечего добавить, все более чем прозрачно. Ловкач, эта загадка тебе по зубам, тем более что хитрый Ростовщик приберег для тебя подсказку. Придется побегать, чтобы все выяснить и получить код.\"</p>"
    },
    {
        id: 4,
        name: "Исходный код",
        description: "<img src='img/4.jpg' class='img-responsive img-rounded'/><p>\"Торопитесь, ваши соперники дышат в спину, а может даже и опережают вас! Так уж и быть, помогу вам, дам наводку на следующее задание. Местоположение следующего задания зашифровано в любимом журнале плохонького инженера Говарда Воловица. Код вы найдете в конверте Шпиона, он выкрал его у одного из Ваших конкурентов. Я оставил вам подсказку, вы поймете, что на верном пути. Берегитесь, ведь и вы можете стать объектом воровства!\"</p>"
    },
    {
        id: 5,
        name: "Спасти рядового Райна",
        description: "<img src='img/5.jpg' class='img-responsive img-rounded'/><p>Медленно но верно вы приближаетесь к своей цели. Тем временем песчаная буря начинает набирать обороты и кислорода в воздухе все меньше. К сожалению, у вашего Ростовщика астма и он падает в обморок. Подойдите к Оракулу, он подскажет, где найти лекарство, которое вернет его к жизни.</p>"
    },
    {
        id: 6,
        name: "Код Да Винчи",
        description: "<img src='img/6.jpg' class='img-responsive img-rounded'/><p>\"Браво, вы сильны и настойчивы! Возможно я бы даже пожал вам руки, если бы был жив. Поверили? Бугагашечки, судя по тому, как вы провели последние пару часов, вы всю заразу в округе собрали, не хватало еще от вас что-то подцепить!  Вернемся к делу. Решите головоломку и докажите, что достойны спасения из этого ада! Один из вас найдет ее рядом с источником за своим лицом\".</p>\n<p>Будь осторожен, шпионы не дремлют. Не подавай виду, что что-то ищешь!</p>"
    }
];

// Текущее состояние возможно нужно схранить в пмять/куки
var state = {groupId : 0, questId: 0};

//состояние аларма
var alrmState = false;

//таймер
var startTime = null;
var fineTime = 0;
var intervalID = null;

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        var buttons = "";
        _.forEach(groups, function(group){
            buttons += "<div class='row btn-container'><input name='group' id=\""+group.id+"\" class=\"btn "+group.color+ " btn-lg btn-full\"  type=\"button\" value=\""+group.name+"\"/></div>"
        });
        $('div#buttons').html(buttons);
        $('div#buttons').show();

        $('input[name="group"]').on('click', function() {
            var input = $(this);
            var id = _.findIndex(groups, {'id': parseInt(input.attr('id'))});

            $('div#buttons').hide();
            app.showQuestsPanel(id);
        });

        $('form[name="answerForm"]').on('submit', function() {
            var form = $(this);
            var input = $('input#answer', form).val();

            if (groups[state.groupId].quests[state.questId].answer.toString() === input.toString()) {
                app.showAlarm(false);
                $('input#answer', form).val('');

                if (state.questId+1 < quests.length)
                    app.showQuests(state.groupId, state.questId + 1);
                else
                    app.showFlareGun(state.groupId);
            } else if (input == "") {
                app.showAlarm(true, "Введите код, не жмите просто так");
            } else {
                app.showAlarm(true, "Бугагашеньки, непавильный код, +3 мин ко времени");
                fineTime += 60*3;
            }

            return false;
        });

        $('input#flareGunAccept').on('click', function() {
            app.showResult();
        });
    },

    showQuestsPanel : function (groupId) {
        $('div#quest').show();

        var alert = $('div#current');
        var group = groups[groupId];
        alert.addClass(group.colorAllert);
        $('span#currentText', alert).text("Ваша команда: "+ group.name);
        //alert.text();
        alert.show();

        intervalID = setInterval(app.updateTimer, 1000);
        state = {groupId : groupId, questId : 0};
        app.showQuests(groupId, 0);
    },

    updateTimer : function () {
        if (!startTime)
            startTime = Date.now();

        $('strong',$('span#timer')).text(app.getCurrentTimer(true));
    },

    getCurrentTimer : function(addFine) {
        var timer = ((Date.now() - startTime ) / 1000 | 0) + fineTime*addFine; //Timer in seconds

        return  app.getTextTime(timer);
    },

    getTextTime : function(time) {
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        var minutes = time / 60 | 0;
        var seconds = time - minutes*60;

        return  (addZero(minutes) + ":" + addZero(seconds));
    },

    showQuests: function(groupId, questId) {
        var group = groups[groupId];
        var quest = _.find(quests, {'id': group.quests[questId].id});
        state = {groupId : groupId, questId : questId};

        $('div#questName').text(quest.name);
        $('div#questDescription').html(quest.description);
    },

    showFlareGun: function(groupId) {
        clearInterval(intervalID);

        $('dd#time').text(app.getCurrentTimer(false) + " мин.");
        $('dd#fineTime').text(app.getTextTime(fineTime) + " мин.");
        $('dd#summary').text(app.getCurrentTimer(true) + " мин.");

        var group = groups[groupId];
        $('div#flareGunName').text(group.flareGun.name);
        $('div#flareGunDescription').html(group.flareGun.description);

        $('div#quest').hide();
        $('div#flareGun').show();

    },

    showResult: function() {
        $('div#flareGun').hide();
        $('div#result').show();
    },

    showAlarm: function(show, text) {
        $('div#answerResult').text(text);
        if (alrmState !== show) {
            if (show)
                $('div#answerResult').show();
            else
                $('div#answerResult').hide();

            alrmState = show;
        }
        $("html, body").animate({ scrollTop: $(document).height() }, "slow");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
