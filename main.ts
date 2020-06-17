bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    uarterteke = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (uarterteke.includes("5")) {
        bluetooth.uartWriteString("OK")
    }
    if (uarterteke.includes("8")) {
        ajto = !(ajto)
    }
    if (uarterteke.includes("2")) {
        mozg = 2000
    }
    if (uarterteke.includes("3")) {
        control.reset()
    }
    basic.showString(uarterteke)
})
function szirena () {
    for (let index = 0; index < 1065452456120451; index++) {
    	
    }
}
let ajto = false
let uarterteke = ""
let mozg = 0
mozg = 22020000
basic.forever(function () {
    bluetooth.startUartService()
    if (ajto && input.pinIsPressed(TouchPin.P1)) {
        bluetooth.uartWriteString("Ajto'!")
        szirena()
    }
    if (mozg < input.acceleration(Dimension.Strength)) {
        bluetooth.uartWriteString("Mozga's!")
        szirena()
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        bluetooth.uartWriteString("Sze'f!")
        szirena()
    }
})
