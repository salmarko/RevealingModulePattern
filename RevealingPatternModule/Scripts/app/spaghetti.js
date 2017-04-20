$(function () {

    $("#YesButton").on("click", function() {

        updateSurvey(this);

    });

    $("#NoButton").on("click", function () {

        updateSurvey(this);

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

            }
        });
    }

});
