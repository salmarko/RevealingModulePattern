$(function () {

    $("#YesButton, #NoButton").on("click", function () {

        updateSurvey(this);

    });

    $("#YesButton, #NoButton").tooltip({
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

});


function updateSurvey(element) {

    var url = $(element).data("url");
    var pageId = $(element).data("id");
    var answer = $(element).data("value");

    $.ajax({
        url: url,
        type: "POST",
        data: {
            pageId: pageId,
            answer: answer
        },
        error: function (xhr) {
            $("#SurveyMessage").html(xhr.responseText);
        },
        success: function (data, status, xhr) {
            $("#SurveyMessage").html(xhr.responseText);
            $("#YesButton, #NoButton").attr("disabled", true);
        }
    });
}
