var rangeSlider = function () {
  var slider = $(".range-wrap"),
    range = $(".form-range"),
    value = $(".rangeval");

  slider.each(function () {
    value.each(function () {
      var value = $(this).prev().attr('value');
      $(this).html(value);
    });

    range.on("input", function () {
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();
