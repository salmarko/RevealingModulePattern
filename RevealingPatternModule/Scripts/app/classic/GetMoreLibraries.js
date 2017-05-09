$(function () {

    $("#GetMoreLibrariesAdvanced").on("click", function () {

        var url = $(this).attr("href");

        $.ajax({
            url: url,
            type: "GET",
            success: function (data, status, xhr) {

                $("#GetMoreLibrariesAdvancedModal").html(xhr.responseText).modal("show");

            }
        });

        return false;
    });
});
