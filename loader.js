const lang = localStorage.getItem("language") || "pt";

function loadScript(src) {

    return new Promise((resolve, reject) => {

        const script = document.createElement("script");

        script.src = src;

        script.onload = resolve;

        script.onerror = reject;

        document.head.appendChild(script);

    });

}

(async () => {

    try {

        await loadScript(`descriptions_${lang}.js`);

        await loadScript(`questions_${lang}.js`);

        await loadScript("script.js");

    } catch (err) {

        console.error(err);

    }

})();
