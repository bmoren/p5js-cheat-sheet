const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

/**
 * Creates a Buffer containing a PDF from a specified URL.
 */
async function createPDF(browser, url) {
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: "networkidle0"});
    const pdf = await page.pdf({
        // These are the options that Chrome gave by default.
        margin: {
            top: "1cm",
            right: "1cm",
            bottom: "1cm",
            left: "1cm",
        },
    });

    return pdf;
}

/**
 * Formats a language code (HTML file name without the extension) into
 * one which can be used by a PDF file. It will either output a `-` followed
 * by the formatted language code, or nothing (for `index.html`).
 */
function formatLangCode(name) {
    // We need to make text before the - uppercase, and
    // leave text before it lowercase. Also, if we get
    // index, we'll leave it blank.
    if(name === "index") return "";

    const split = name.split("-");
    if(split.length !== 1 && split.length !== 2)
        throw new Error(name + "is not a valid file name!");

    if(split.length === 1) return "-" + split[0].toUpperCase();
    if(split.length === 2) return "-" + split[0].toUpperCase() + "-" + split[1].toLowerCase();
}

(async () => {
    // Each HTML file in ../docs must be converted to a PDF file, saved in .. .
    // These HTML files follow the format of LANG.html, where LANG is lowercased.
    // The PDF files follow the format of p5cheatsheet-LANG.pdf, where LANG is correctly
    // formatted. For example, it.html becomes p5cheatsheet-IT.pdf, while zh-tw.html
    // becomes p5cheatsheet-ZH-tw.pdf. Also, index.html becomes p5cheatsheet.pdf.
    //
    // We'll start off by getting every HTML file, getting its PDF name, and finally,
    // converting it to a PDF.
    const HTMLDir = path.resolve(path.join(__dirname, "../", "docs"));
    const PDFDir = path.resolve(path.join(__dirname, "../"));

    const browser = await puppeteer.launch({
        // CORS blocks font loading.
        args: [
            "--disable-web-security",
        ],
        headless: true,

    });

    for(const fileName of fs.readdirSync(HTMLDir)) {
        if(!fileName.endsWith(".html")) continue;

        const filePath = path.join(HTMLDir, fileName);

        const name = path.basename(fileName, ".html");
        const newName = "p5cheatsheet" + formatLangCode(name) + ".pdf";

        fs.writeFileSync(path.join(PDFDir, newName), await createPDF(browser, "file://" + filePath));
        console.log("Saved " + newName + ".");
    }

    await browser.close();
})();
