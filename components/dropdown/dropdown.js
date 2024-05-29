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
      disabled: true,
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
    templateResult: function (data, container) {
      $(container)
        .addClass("select2-results__option--sm")
        .removeClass("select2-results__option--selected");

      if (data.selected) {
        $(container).addClass("select2-results__option--selected");
      }

      return data.text;
    },
  });
  $(".select2-selection__arrow > b").replaceWith(`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 22" role="img" data-state="close" class="quill-input__rotate quill-input__icon">
    <g>
      <path d="m6.535 14.715-5.25-5.25c-.273-.246-.273-.656 0-.93.246-.246.656-.246.93 0L7 13.348l4.785-4.786c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903l-5.277 5.25a.6.6 0 0 1-.903 0"></path>
    </g>
    <defs>
      <clipPath id="f43687b6c6d919677eabf8a2c671e282__a">
        <path d="M0 0h14v22H0z"></path>
      </clipPath>
    </defs>
  </svg>
`);
});
