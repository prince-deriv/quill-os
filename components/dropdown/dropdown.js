$(document).ready(() => {
  const data = [
    {
      id: 0,
      text: "enhancement",
    },
    {
      id: 1,
      text: "bug",
    },
    {
      id: 2,
      text: "duplicate",
    },
    {
      id: 3,
      text: "invalid",
    },
    {
      id: 4,
      text: "wontfix",
    },
  ];
  $("#test").select2({
    data: data,
    templateResult: function (data, container) {
      $(container)
        .addClass("select2-results__option--md")
        .removeClass("select2-results__option--selected");

      if (data.selected) {
        $(container).addClass("select2-results__option--selected");
      }

      return data.text;
    },
  });
  $("#test1").select2({
    data: data,
  });
});
