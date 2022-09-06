let number = 0
input.onButtonPressed(Button.A, function () {
    number = 0
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
