var printText = $('.text').data('text');

var contentArray = printText.split('/n');
$.each(contentArray, function (index, newLine) {
  $('.text').append('<span style="display:block;" id="' + index + '"></span>');

  var lineID = index;
  var self = $(this);
  setTimeout(function () {
    $.each(self, function (index, chunk) {
      setTimeout(function () {
        $('#' + lineID).append("<span>" + chunk + "</span>");
        $('body, html').scrollTop($(document).height());
      }, index * 5);
    });

  }, index * 100);
});


$(document).ready(function () {
  setTimeout(function () {
    $(".wrapper p:nth-child(3)").text("done ✅"); // Змінює текст на "done" через 5 секунд
    $(".wrapper2").remove(); // Видаляє блок wrapper2
  }, 20000);
});