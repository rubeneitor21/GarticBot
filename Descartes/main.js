const mouse = require("lepikjs")
const jimp = require("jimp")
const nut = require("@nut-tree/nut-js")

mouse.on("keyPress", _ => {
    process.exit()
})

const colores = [{ x: 276, y: 360, button: 1 },
{ x: 326, y: 360, button: 1 },
{ x: 373, y: 362, button: 1 },
{ x: 272, y: 414, button: 1 },
{ x: 326, y: 414, button: 1 },
{ x: 373, y: 419, button: 1 },
{ x: 276, y: 468, button: 1 },
{ x: 326, y: 468, button: 1 },
{ x: 373, y: 469, button: 1 },
{ x: 270, y: 524, button: 1 },
{ x: 321, y: 523, button: 1 },
{ x: 377, y: 523, button: 1 },
{ x: 273, y: 572, button: 1 },
{ x: 316, y: 573, button: 1 },
{ x: 375, y: 572, button: 1 },
{ x: 279, y: 632, button: 1 },
{ x: 328, y: 635, button: 1 },
{ x: 391, y: 639, button: 1 }]

const url = "https://images.ecestaticos.com/tUsQqBMzVgb6yd63QjsoObsXmd0=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd53%2F5d5%2Fdb0%2Fd535d5db070fa6ecf441b32de847e756.jpg"

// mouse.mouseMove(593, 254, true, 0)
nut.sleep(0)
// const origin = new nut.Point(593, 254)
// nut.mouse.setPosition(origin)
nut.mouse.config.mouseSpeed = 9000
nut.mouse.config.autoDelayMs = 0
const ratio = 1

jimp.read(url, async (err, image) => {
    image.resize(25 * ratio, 25 * ratio)
    console.log(image.getWidth(), image.getHeight())
    for (let y = 0; y < image.getHeight(); y++) {
        for (let x = 0; x < image.getWidth(); x++) {
            let color = colores[Math.floor(Math.random() * colores.length)]
            let posColor = new nut.Point(color.x, color.y)
            // nut.mouse.setPosition(posColor)
            // await nut.mouse.click(nut.Button.LEFT)
            let coord = new nut.Point(x + 593, y + 254 * 2)
            nut.mouse.setPosition(coord)
            // await nut.mouse.click(nut.Button.LEFT)
        }

    }
})

// const url = 'https://images.ecestaticos.com/tUsQqBMzVgb6yd63QjsoObsXmd0=/0x0:0x0/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fd53%2F5d5%2Fdb0%2Fd535d5db070fa6ecf441b32de847e756.jpg';
    // await (async () => Jimp.read(url, async (_, img) => {
    //     img.resize(Math.round(b.width) - 250, Math.round(b.height) - 125)
    //     const top = b.y + 100 / 2
    //     const left = b.x + 200 / 2


    //     for (let y = 0; y < img.getHeight(); y++) {
    //         for (let x = 0; x < img.getWidth(); x++) {
    //             await page.mouse.down()
    //             await page.mouse.move(x + left, y + top)
    //             await page.mouse.up()
    //         }
    //     }


    // }))()