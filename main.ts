basic.forever(function () {
    if (input.compassHeading() > 80 && input.compassHeading() < 100) {
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 35 && input.compassHeading() < 55) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 350 && input.compassHeading() < 10) {
        basic.showArrow(ArrowNames.North)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 305 && input.compassHeading() < 325) {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 260 && input.compassHeading() < 280) {
        basic.showArrow(ArrowNames.West)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 215 && input.compassHeading() < 235) {
        basic.showArrow(ArrowNames.SouthWest)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 170 && input.compassHeading() < 190) {
        basic.showArrow(ArrowNames.South)
    }
})
basic.forever(function () {
    if (input.compassHeading() > 125 && input.compassHeading() < 145) {
        basic.showArrow(ArrowNames.SouthEast)
    }
})
