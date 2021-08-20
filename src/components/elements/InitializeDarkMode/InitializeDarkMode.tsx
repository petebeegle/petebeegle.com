/**
 * Intended to prevent the "flashing" effect when rendering dark-mode elements with SSR.
 *
 * Should block render until the theme can be determined from either the OS preference or
 * a localstorage value.
 *
 * @returns Blocking script which sets initial dark theme.
 */
const InitializeDarkMode = (): JSX.Element => (
  <script
    async
    dangerouslySetInnerHTML={{
      __html: `
          (function() {
            function setTheme(newTheme) {
              const root = window.document.documentElement;
              root.classList.add(newTheme);
            }
          
            const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem("dark-mode") === "true" ? "dark" : "light";
            } catch {
              preferredTheme = darkQuery.matches ? "dark" : "light";
            }
          
            setTheme(preferredTheme);
          })();
        `,
    }}
  />
);

export default InitializeDarkMode;
