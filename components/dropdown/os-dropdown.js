const inputElement = document.getElementById($parameters.Id);

// Handle Sizes
const allowedSizes = ["sm", "md"];

const size = !allowedSizes.includes($parameters.size) ? "md" : $parameters.size;

$(inputElement).parent().addClass(`quill-dropdown-${size}`);

// Fetch Items from props
const items = JSON.parse($parameters.items);

$(inputElement)
  .select2({
    data: items,
    templateResult: function (data, container) {
      $(container)
        .addClass(`select2-results__option--${size}`)
        .removeClass("select2-results__option--selected");

      const selectedOptionData = $(inputElement).select2("data")[0];

      if (selectedOptionData._resultId === data._resultId) {
        $(container).addClass("select2-results__option--selected");
      }

      if (data.disabled) {
        $(container).addClass("select2-results__option--disabled");
      }

      return data.text;
    },
  })
  .on("select2:select", function (e) {
    const selected = e.currentTarget.value;

    if (items.length > 0) {
      const selectedItem = items[selected - 1];
      const stringifiedObj = JSON.stringify(selectedItem);
      $actions.TriggerOnChange(stringifiedObj);
    }
  });

// Apply Quill Icons in the dropdown arrow
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

// set active as default selected
let currentActive = null;

items.forEach((e) => {
  if (e.selected) {
    currentActive = e.id;
  }
});

if (currentActive) {
  $(inputElement).val(currentActive).trigger("change");
}
