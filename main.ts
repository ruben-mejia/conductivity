let Establecer_conductividad = 0
let Establecer_proporcionalidad = 0
basic.forever(function () {
    let Proporcionalidad = 0
    Establecer_conductividad = pins.analogReadPin(AnalogPin.P1)
    Establecer_proporcionalidad = pins.map(
    Proporcionalidad,
    0,
    1023,
    0,
    100
    )
    basic.showNumber(Proporcionalidad)
})
