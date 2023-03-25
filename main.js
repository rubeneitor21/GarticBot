import puppeteer from "puppeteer";
import Jimp from "jimp";

const sleep = ms => new Promise(r => setTimeout(r, ms));

let args = process.argv

args.shift()
args.shift();

let images = ['.\\Rubeneitor2.png']

let randomURL = images[Math.floor(Math.random() * 2)];


// Esto es para poder usar operaciones asyncronas

(async () => {

    /* ------------------------ Abrir navegador y pagina ------------------------ */

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto(args[0] || "https://garticphone.com/es/?c=00d0ccb0eb") // Sustituir parametro

    await page.setViewport({ width: 800, height: 600 })

    /* -------------------------- Deshabilitar timeout -------------------------- */

    await page.setDefaultNavigationTimeout(0);

    /* ----------------------------- Cambiar nombre ----------------------------- */
    console.log("Setting name")

    await page.type(".jsx-1347952224", args[2] || "Rubeneitor2 Bot") // Sustituir parametro

    /* -------------------------- Por si saltan cookies ------------------------- */
    try {

        await page.waitForSelector('.cmptxt_btn_yes', { timeout: 5000 })
        await page.click(".cmptxt_btn_yes")

    } catch {
        console.log("No cookie's button founded")
    }

    await sleep(1000)

    /* ----------------------------- Clickear unirse ---------------------------- */

    console.log("Joining...")

    await page.waitForSelector('.jsx-570181799')
    await page.click(".jsx-570181799")

    /* ------------------------- Esperar hasta el canvas ------------------------ */

    console.log("Waiting for canvas...\nPlease, enter some text and click next")

    await page.waitForSelector(".drawingContainer")

    let a = await page.$(".jsx-1116305971")
    let b = await a.boundingBox()

    /* ---------------------------- Dibujar la imagen --------------------------- */
    let width = b.width - b.width / 1.3
    let height = b.height - b.height / 1.3
    console.log("Drawing...")
    Jimp.read(args[1] || randomURL, async (_, img) => {
        img.resize(b.width - width, b.height - height)
        for (let x = 0; x < img.getWidth(); x++) {
            for (let y = img.getHeight() - 1; y >= 0; y--) {
                let rgb = Jimp.intToRGBA(img.getPixelColor(x, y))
                if (rgb.r <= 127 && rgb.g <= 127 && rgb.b <= 127) {
                    await page.mouse.down()
                    await page.mouse.move(width / 2 + b.x + x, height / 2 + b.y + y)
                }
                else {
                    await page.mouse.up()
                    page.mouse.move(width / 2 + b.x + x, height / 2 + b.y + y)
                }
            }
        }
        console.log("Done")

        /* ---------------------- Presionar el boton de Hecho --------------------- */

        await page.waitForSelector('.jsx-570181799')
        await page.click(".jsx-570181799")

    });

})()