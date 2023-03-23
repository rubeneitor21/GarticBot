import puppeteer from "puppeteer";
import Jimp from "jimp";

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Esto es para poder usar operaciones asyncronas

(async () => {

    /* ------------------------ Abrir navegador y pagina ------------------------ */

    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()

    await page.goto("https://garticphone.com/es/?c=00d0ccb0eb") // Sustituir parametro

    await page.setViewport({ width: 800, height: 600 })

    /* -------------------------- Deshabilitar timeout -------------------------- */

    await page.setDefaultNavigationTimeout(0);

    /* ----------------------------- Cambiar nombre ----------------------------- */

    await page.type(".jsx-1347952224", "NombreDeMierda") // Sustituir parametro

    /* -------------------------- Por si saltan cookies ------------------------- */

    await page.waitForSelector('.cmptxt_btn_yes')
    await page.click(".cmptxt_btn_yes")

    await sleep(1000)

    /* ----------------------------- Clickear unirse ---------------------------- */

    await page.waitForSelector('.jsx-570181799')
    await page.click(".jsx-570181799")

    /* ------------------------- Esperar hasta el canvas ------------------------ */


    await page.waitForSelector(".drawingContainer")

    let a = await page.$(".jsx-1116305971")
    let b = await a.boundingBox()

    /* ---------------------------- Dibujar la imagen --------------------------- */



    await page.mouse.move(b.x, b.y + 100)
    await page.mouse.down()
    for (let i = 10; i < b.width - 10; i++) {
        await page.mouse.move(b.x + i, Math.sin(i) * 10 + b.y + 100)
    }
    await page.mouse.up()

    /* ---------------------- Presionar el boton de Hecho --------------------- */

    await page.waitForSelector('.jsx-570181799')
    await page.click(".jsx-570181799")

})()