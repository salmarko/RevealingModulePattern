$(function () {

    $("#GettingStartedAdvanced").on("click", function () {

        var url = $(this).attr("href");

        $.ajax({
            url: url,
            type: "GET",
            success: function (data, status, xhr) {

                $("#GettingStartedAdvancedModal").html(xhr.responseText).modal("show");

            }
        });

        return false;
    });
});
