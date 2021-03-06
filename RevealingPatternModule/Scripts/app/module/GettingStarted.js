var gettingStarted = function () {

    var self = this;
    var _survey;
    var _surveyModal;

    function init() {

        function _initDom() {
            self._dom = {};
            self._dom.GettingStartedAdvanced = $("#GettingStartedAdvanced");
            self._dom.GettingStartedAdvancedModal = $("#GettingStartedAdvancedModal");
        }

        function _bindEvents() {
            self._dom.GettingStartedAdvanced.on("click", _onGettingStartedAdvancedClick);
        }

        function _initComponents() {
            _survey = new survey("GettingStarted");
            _survey.init();
        }

        _initDom();
        _bindEvents();
        _initComponents();
    }

    function _onGettingStartedAdvancedClick() {
        var url = $(this).attr("href");

        $.ajax({
            url: url,
            type: "GET",
            success: function (data, status, xhr) {

                self._dom.GettingStartedAdvancedModal.html(xhr.responseText).modal("show");

                _surveyModal = new survey("GettingStartedAdvanced");
                _surveyModal.init();

            }
        });

        return false;
    }

    return {
        init: init
    }
}();

$(function () {
    gettingStarted.init();
});