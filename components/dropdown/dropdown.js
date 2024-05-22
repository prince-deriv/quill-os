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
  });
  $("#test1").select2({
    data: data,
  });
  
  // Event listener for when the dropdown is opened
  $("#test").on('select2:open', function (e) {
    setTimeout(function() {
      $('.select2-results__option').css('min-height', '48px');
    }, 0);
  });
  $("#test1").on('select2:open', function (e) {
    setTimeout(function() {
      $('.select2-results__option').css('min-height', '32px');
    }, 0);
  });
});