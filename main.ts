GamePad.Butao(GamePad.ButtonsPin.P14, GamePad.ButtonType.down, function () {
    GamePad.Vibracao(Estado.Off)
})
GamePad.Butao(GamePad.ButtonsPin.P13, GamePad.ButtonType.down, function () {
    GamePad.Vibracao(Estado.On)
})
