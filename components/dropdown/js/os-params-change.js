const props = window.quill.dropdown[$parameters.Id];
const inputElement = document.getElementById($parameters.Id);

const currentItems = props.items;
const currentSize = props.size;
const currentStatus = props.status;
const newItems = $parameters.items;
const newSize = $parameters.size;
const newStatus = $parameters.status;

let hasParamChanges = false;

if (currentItems !== newItems) {
  hasParamChanges = true;
  window.quill.dropdown[$parameters.Id].items = newItems;
}

if (currentSize !== newSize) {
  hasParamChanges = true;
  window.quill.dropdown[$parameters.Id].size = newSize;

  const allowedSizes = ["sm", "md"];

  // Remove all sizes class
  allowedSizes.forEach((size) => {
    $(inputElement).parent().removeClass(`quill-dropdown-${size}`);
  });
}

if (currentStatus !== newStatus) {
  hasParamChanges = true;
  window.quill.dropdown[$parameters.Id].status = newStatus;

  const allowedStatuses = ["neutral", "success", "error"];

  allowedStatuses.forEach((status) => {
    $(inputElement)
      .next(".select2-container")
      .removeClass(`quill-dropdown-${status}`);
  });
}

if (hasParamChanges) {
  const select2Instance = $(inputElement).data("select2");
  const resetOptions = select2Instance.options.options;

  $(inputElement).html("");
  $(inputElement).select2("destroy");
}

$parameters.hasChanges = hasParamChanges;
