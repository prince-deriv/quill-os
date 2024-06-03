const theme = $parameters.theme;
const allowedThemes = ["light", "dark"];
const currentTheme = allowedThemes.includes(theme) ? theme : "light";

if (typeof window.quill === "undefined") {
  window.quill = {
    theme: currentTheme,
  };
}

$("html").removeClass(allowedThemes.join(" ")).addClass(currentTheme);
