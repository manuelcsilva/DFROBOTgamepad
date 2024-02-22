
/**
* Utilize este ficheiro para definir funções personalizadas e blocos.
* Ler mais em https://makecode.microbit.org/blocks/custom
*/

enum Estado {
    //% block="On"
    On,
    //% block="Off"
    Off
}

enum Eixo {
    //% block="X"
    X,
    //% block="Y"
    Y
}
/**
 * Custom blocks
 */
//% weight=100 color=#a87b4d icon="\uf11b"
namespace GamePad {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function Vibracao(t: Estado): void {
        if (t == Estado.On) {
            pins.digitalWritePin(DigitalPin.P12, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 0)
        }
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function joystick(value: Eixo): Eixo {
        if (value == Eixo.X) {
            return pins.analogReadPin(AnalogPin.P1)
        } else {
            return pins.analogReadPin(AnalogPin.P1)
        }
    }
}
