$(document).ready(() => {
  $("html").addClass("light");
  const data = [
    { id: 0, text: "enhancement" },
    { id: 1, text: "bug" },
    { id: 2, text: "duplicate" },
    { id: 3, text: "invalid", disabled: true },
    { id: 4, text: "wontfix" },
  ];
  const hasLabel = $('#has-label').length;
  const successIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img"><path d="M16 8.375c-2.93 0-5.586 1.563-7.07 4.063-1.446 2.539-1.446 5.624 0 8.124A8.13 8.13 0 0 0 16 24.626c2.89 0 5.547-1.523 7.031-4.062 1.446-2.5 1.446-5.586 0-8.125-1.484-2.5-4.14-4.063-7.031-4.063M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m4.414-11.836-5 5c-.39.39-.976.39-1.328 0l-2.5-2.5a.856.856 0 0 1 0-1.289c.351-.39.937-.39 1.328 0l1.836 1.836 4.336-4.336c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29"></path></svg>`;
  const errorIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img"><path d="M15.688 9.82 7.953 22.516c-.078.117-.078.195-.078.312 0 .313.234.547.547.547h15.117c.313 0 .586-.234.586-.547 0-.117-.04-.195-.117-.312L16.273 9.82A.29.29 0 0 0 16 9.625c-.156 0-.234.078-.312.195m-1.602-.976A2.25 2.25 0 0 1 16 7.75c.742 0 1.484.43 1.875 1.094l7.734 12.695c.235.39.391.82.391 1.29 0 1.327-1.094 2.421-2.46 2.421H8.421A2.434 2.434 0 0 1 6 22.828q0-.703.352-1.289zm3.164 12.031c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-.312-7.187v3.75c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-3.75c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938"></path></svg>`;
  if (hasLabel) {
    $('.quill-dropdown-source').closest('.quill-dropdown-md').addClass('label');
  }

  // Initialize Select2 with custom template
  function initializeSelect2(elementId, sizeClass) {
    const hasLabelInitial = $(`#${elementId}`).closest('.quill-dropdown-container').find('#has-label').length > 0;
    console.log('hasLabel param change', hasLabelInitial);
    const hasLabel = $(`#${elementId}`).parent().find('#has-label').length > 0;
    const textAlignment = hasLabel ? 'start' : 'center'; // Default alignment to 'center' if no label
  
    $(`#${elementId}`).select2({
      data: data,
      placeholder: "Select",
      templateResult: function (data, container) {
        $(container).addClass(`select2-results__option--${sizeClass} dropdown-align-${textAlignment}`).removeClass(`select2-results__option--selected`);
        if (data.selected) {
          $(container).addClass('select2-results__option--selected');
        }
        return data.text;
      }
    });
  
    const iconHtml = '<span class="quill-icon-container"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" role="img"><path d="M22.094 22.79a8.76 8.76 0 0 0 2.656-6.29c0-4.805-3.945-8.75-8.75-8.75-4.844 0-8.75 3.945-8.75 8.75a8.89 8.89 0 0 0 2.617 6.29c.547-2.15 2.54-3.79 4.883-3.79h2.5c2.305 0 4.297 1.64 4.844 3.79m-1.133.898v.039c-.156-1.954-1.758-3.477-3.711-3.477h-2.5A3.754 3.754 0 0 0 11 23.727c1.406.976 3.125 1.523 5 1.523 1.836 0 3.555-.547 4.96-1.562M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-10c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.876-.352-.546-.938-.937-1.602-.937-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874A1.87 1.87 0 0 0 16 16.5m-3.125-1.875c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.124 0 .938.586 1.563 1.601 1.563 2.695 0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.125 0a3.16 3.16 0 0 1-1.563-2.734"></path></svg></span>';
    const $selection = $(`#${elementId}`).next('.select2-container').find('.select2-selection');
    $selection.prepend(iconHtml); 
    const has_icon = $selection.find('.quill-icon-container').length > 0;
    if (has_icon) {
      $selection.closest('.quill-dropdown-container').addClass('has-icon').removeClass('has-not-icon');
    }
    else {
       $selection.closest('.quill-dropdown-container').addClass('has-not-icon').removeClass('has-icon');
    }
    // Update text alignment of the select2 container
    $(`#${elementId}`).next('.select2-container')
      .removeClass('text-align-start text-align-center')
      .addClass(`text-align-${textAlignment}`);
  }

  initializeSelect2('test', 'md');
  initializeSelect2('test1', 'sm');

  // Function to update classes for success or error state
  function updateStateClass(elementId, state) {
    const $container = $(`#${elementId}`).next('.select2-container');
    const $selection = $container.find('.select2-selection');
    const $iconContainer = $selection.find('.state-icon-container');
  
    // Remove existing icons
    $iconContainer.remove();
  
    // Create a new icon container
    const $newIconContainer = $('<span class="state-icon-container state-icon"></span>');
  
    if (state === 'success') {
      $container.removeClass('quill-dropdown-error').addClass('quill-dropdown-success');
      $newIconContainer.html(successIcon);
    } else if (state === 'error') {
      $container.removeClass('quill-dropdown-success').addClass('quill-dropdown-error');
      $newIconContainer.html(errorIcon);
    }
  
    // Insert the icon container before the arrow icon
    $selection.find('.select2-selection__arrow').before($newIconContainer);
  }
  

  // Button event handlers for success and error states
  $('#triggerSuccess').on('click', () => updateStateClass('test', 'success'));
  $('#triggerError').on('click', () => updateStateClass('test', 'error'));
  $('#triggerSuccessTest1').on('click', () => updateStateClass('test1', 'success'));
  $('#triggerErrorTest1').on('click', () => updateStateClass('test1', 'error'));

  // Function to update text alignment
  function updateTextAlignment(elementId, alignment) {
    const hasLabel = $(`#${elementId}`).parent().find('#has-label').length > 0;
    const textAlignment = hasLabel ? 'start' : alignment;

    $(`#${elementId}`).next('.select2-container')
        .removeClass('text-align-start text-align-center')
        .addClass(`text-align-${textAlignment}`);

    $(`#${elementId}`).find('option').each(function () {
        $(this).data('data').element.className = `text-align-${textAlignment}`;
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

  // Add label class to the container

  if (hasLabel) {
    $('.quill-dropdown-source').on('select2:open', function () {
      $(this).closest('.quill-dropdown-md').addClass('focused label-focused');
    }).on('select2:close', function () {
      const $container = $(this).closest('.quill-dropdown-md');
      if (!$(this).val()) {
        $container.removeClass('focused label-focused');
      } else {
        $container.removeClass('focused');
      }
    });
  }
  var element = $('.select2-selection__rendered#select2-test-container');

  if (element.children().length > 0 && hasLabel) {

    $('.quill-dropdown-source').closest('.quill-dropdown-md').removeClass('focused label-focused');
  }
  else {
    const addClass = hasLabel ? 'focused label-focused' : 'focused'
    $('.quill-dropdown-source').closest('.quill-dropdown-md').addClass(addClass);
  }

});
