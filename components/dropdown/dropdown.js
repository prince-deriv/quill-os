$(document).ready(() => {
  const data = [
    { id: 0, text: "enhancement" },
    { id: 1, text: "bug" },
    { id: 2, text: "duplicate" },
    { id: 3, text: "invalid", disabled: true },
    { id: 4, text: "wontfix" },
  ];
let textAlignment = 'start';
  // Initialize Select2 with custom template
  function initializeSelect2(elementId, sizeClass) {
    $(`#${elementId}`).select2({
      data: data,
      templateResult: function (data, container) {
        $(container).addClass(`select2-results__option--${sizeClass}`).removeClass('select2-results__option--selected');
        if (data.selected) {
          $(container).addClass('select2-results__option--selected');
        }
        return data.text;
      }
    });
  }

  initializeSelect2('test', 'md');
  initializeSelect2('test1', 'sm');

  // Function to update classes for success or error state
  function updateStateClass(elementId, state) {
    const $container = $(`#${elementId}`).next('.select2-container');
    if (state === 'success') {
      $container.removeClass('quill-dropdown-error').addClass('quill-dropdown-success');
    } else if (state === 'error') {
      $container.removeClass('quill-dropdown-success').addClass('quill-dropdown-error');
    }
  }

  // Button event handlers for success and error states
  $('#triggerSuccess').on('click', () => updateStateClass('test', 'success'));
  $('#triggerError').on('click', () => updateStateClass('test', 'error'));
  $('#triggerSuccessTest1').on('click', () => updateStateClass('test1', 'success'));
  $('#triggerErrorTest1').on('click', () => updateStateClass('test1', 'error'));

  // Function to update text alignment
  function updateTextAlignment(elementId, alignment) {
    $(`#${elementId}`).next('.select2-container')
      .removeClass('text-align-start text-align-center')
      .addClass(`text-align-${alignment}`);

    $(`#${elementId}`).find('option').each(function () {
      $(this).data('data').element.className = `text-align-${alignment}`;
    });
   

    initializeSelect2(elementId, elementId === 'test' ? 'md' : 'sm');
  }

  // Button event handlers for text alignment
  $('#triggerTestAlignLeft').on('click', () => updateTextAlignment('test', 'start'));
  $('#triggerTestAlignCenter').on('click', () => updateTextAlignment('test', 'center'));
  $('#triggerTest1AlignLeft').on('click', () => updateTextAlignment('test1', 'start'));
  $('#triggerTest1AlignCenter').on('click', () => updateTextAlignment('test1', 'center'));

  // Replace the default select2 arrow
  $('.select2-selection__arrow > b').replaceWith(`
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
