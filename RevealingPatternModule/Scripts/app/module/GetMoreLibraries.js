var getMoreLibraries = function() {

    var self = this;
    var _survey;
    var _surveyModal;

    function init() {

        function _initDom() {
            self._dom = {};
            self._dom.GetMoreLibrariesAdvanced = $("#GetMoreLibrariesAdvanced");
            self._dom.GetMoreLibrariesAdvancedModal = $("#GetMoreLibrariesAdvancedModal");
        }

        function _bindEvents() {
            self._dom.GetMoreLibrariesAdvanced.on("click", _onGetMoreLibrariesAdvancedClick);
        }

        function _initComponents() {
            _survey = new survey("GetMoreLibraries");
            _survey.init();
        }

        _initDom();
        _bindEvents();
        _initComponents();
    }

    function _onGetMoreLibrariesAdvancedClick() {
        var url = $(this).attr("href");

        $.ajax({
            url: url,
            type: "GET",
            success: function (data, status, xhr) {

                self._dom.GetMoreLibrariesAdvancedModal.html(xhr.responseText).modal("show");

                _surveyModal = new survey("GetMoreLibrariesAdvanced");
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
    getMoreLibraries.init();
});
