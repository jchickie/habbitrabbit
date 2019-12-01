$( document ).ready(function() {
    $(".minus-button").click(function() {
        // $(this).remove($(this).parents(".row"));
        console.log($(this));
        $(this).closest(".row").remove();
    })

});