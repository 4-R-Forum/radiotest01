input.onButtonPressed(Button.A, function () {
    if (tx_power < 7) {
        tx_power += 1
    }
    basic.showString("P=" + convertToText(tx_power))
})
input.onButtonPressed(Button.B, function () {
    if (tx_power > 0) {
        tx_power += -1
    }
    basic.showString("P=" + convertToText(tx_power))
})
let data_string = ""
let tx_power = 0
let period = 5000
tx_power = 0
radio.setGroup(1)
radio.setTransmitPower(2)
radio.setFrequencyBand(0)
loops.everyInterval(period, function () {
    data_string = "" + input.temperature() + "," + input.lightLevel()
    radio.sendString(data_string)
    basic.showString(data_string)
})
