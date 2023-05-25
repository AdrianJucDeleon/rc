input.onButtonPressed(Button.A, function () {
    radio.sendString("" + (left))
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("" + (forward))
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == right) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        basic.pause(500)
        motobit.enable(MotorPower.Off)
    }
    if (receivedString == left) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        basic.pause(500)
        motobit.enable(MotorPower.Off)
    }
    if (receivedString == forward) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        basic.pause(500)
        motobit.enable(MotorPower.Off)
    }
    if (receivedString == stop) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        motobit.enable(MotorPower.Off)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("" + (right))
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + (stop))
})
radio.onReceivedValue(function (name, value) {
	
})
let stop = ""
let right = ""
let left = ""
let forward = ""
forward = forward
left = left
right = right
stop = stop
radio.setGroup(77)
