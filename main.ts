let data_string = ""
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setFrequencyBand(0)
let period = 5000
loops.everyInterval(period, function () {
    data_string = "" + input.temperature() + "," + input.lightLevel()
    radio.sendString(data_string)
})
