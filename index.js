const { JSDOM } = require("jsdom");
const colors = require('colors');

const pageHtml = `<!doctype html>
                <html>
                    <head></head>
                    <body>
                        <h1>Test of backgroundImage</h1>
                        <p>
                        I'd expect computed style to be 'none' for background-image.
                        </p>
                    </body>
                </html>`;

const dom = new JSDOM(pageHtml);
const h1 = dom.window.document.getElementsByTagName("h1")[0];
const computedStyle = dom.window.getComputedStyle(h1);


console.log(colors.green(`Computed style returned "${computedStyle.backgroundImage}"`)); // => empty string, expected 'none'
