$(document).ready(function() {
  $(".minus-button").click(function() {
    // $(this).remove($(this).parents(".row"));
    var ref = $(this).parent().attr('href');
    console.log(ref);
    $(this).parent().removeAttr('href');
    console.log($(this));
    $(this)
      .closest(".row")
      .remove();
  });

  $(".delete-habit-btn").click(function() {
    // $(this).remove($(this).parents(".row"));
    console.log($(this));
    if (confirm("Are you sure you want to delete this?")) {
      $(this)
        .closest(".habit-card")
        .remove();
        window.location.replace("../index.html");
    }
  });
});
