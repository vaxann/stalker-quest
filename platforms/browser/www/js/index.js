
var groups = [
    {
        id: 1,
        name: "Работники МЕТРО",
        color: "btn-primary",
        colorAllert: "alert-info",
        colorRu: "Синие",
        loaction: "Кухня"
    },
    {
        id: 2,
        name: "Физики-ядерщики",
        color: "btn-danger",
        colorAllert: "alert-danger",
        colorRu: "Красные",
        loaction: "Гостинная"
    },
    {
        id: 3,
        name: "Заключенные",
        color: "btn-warning",
        colorAllert: "alert-warning",
        colorRu: "Желтые",
        loaction: "Спальная"
    },
    {
        id: 4,
        name: "Военные",
        color: "btn-success",
        colorAllert: "alert-success",
        colorRu: "Зелёные",
        loaction: "Кабинет"
    }
];


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
            var id = input.attr('id');

            $('div#buttons').hide();
            app.showQuestsPanel(id);
        });
    },

    showQuestsPanel : function (groupId) {
        $('div#quest').show();

        var alert = $('div#current');
        var group = _.find(groups, {'id': parseInt(groupId)});
        alert.addClass(group.colorAllert);
        alert.text("Ваша команда: "+ group.name);
        alert.show();
    },

    showQuests: function(group, questId) {


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
