<script is:inline type="text/javascript">
  (function () {
    const divElement = document.getElementById("viz1741232842910");
    if (!divElement) return; // Ensure the element exists before continuing
    const vizElement = divElement.getElementsByTagName("object")[0];

    function updateHeight() {
      const divElementWidth = divElement.offsetWidth;
      let aspectRatio;

      // Adjust aspect ratio based on divElement width
      if (divElementWidth > 800) {
        aspectRatio = 0.75; // 4:3 aspect ratio
      } else if (divElementWidth > 500) {
        aspectRatio = 0.75; // Maintain 4:3 for medium screens
      } else {
        aspectRatio = 1.77; // 9:16 aspect ratio for mobile
      }

      // Apply dynamic padding to maintain aspect ratio
      divElement.style.paddingBottom = `${aspectRatio * 100}%`;
    }

    // Note: Pass the function reference, do not invoke it immediately.
    updateHeight();

    // Update on window resize
    window.addEventListener("resize", updateHeight);

    // Script loader with existence check
    function loadTableauScript() {
      const existingScript = document.querySelector(
        'script[src="https://public.tableau.com/javascripts/api/viz_v1.js"]',
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
        vizElement.parentNode.insertBefore(script, vizElement);
        console.log("Tableau script loaded");
      }
    }

    // Run once on initial load
    loadTableauScript();

    // Cleanup on window unload
    window.addEventListener("unload", () => {
      window.removeEventListener("resize", updateHeight);
    });
  })();
</script>
