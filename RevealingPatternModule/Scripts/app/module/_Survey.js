var survey = function (pageId) {

    var self = this;
    var _pageId = pageId;

    function init() {

        function _initDom() {
            self._dom = {};
            self._dom.Buttons = $("#YesButton-" + _pageId + ", #NoButton-" + _pageId);
            self._dom.Message = $("#Message-" + _pageId);
        }

        function _bindEvents() {
            self._dom.Buttons.on("click", _onUpdateSurvey);
        }

        function _initComponents() {
            self._dom.Buttons.tooltip({
                position: {
                    my: "center bottom",
                    at: "center bottom+60",
                    collision: "none",
                    using: function (position, feedback) {
                        $(this).css(position);
                        $("<div>")
                            .addClass("arrow")
                            .addClass(feedback.vertical)
                            .addClass(feedback.horizontal)
                            .appendTo(this);
                    }
                }
            });
        }

        _initDom();
        _bindEvents();
        _initComponents();
    }

    function _onUpdateSurvey() {
        var url = $(this).data("url");
        var pageId = $(this).data("id");
        var answer = $(this).data("value");

        $.ajax({
            url: url,
            type: "POST",
            data: {
                pageId: pageId,
                answer: answer
            },
            error: function (xhr) {
                self._dom.Message.html(xhr.responseText);
            },
            success: function (data, status, xhr) {
                self._dom.Message.html(xhr.responseText);
                self._dom.Buttons.attr("disabled", true);
            }
        });
    }

    return {
        init: init
    }
};