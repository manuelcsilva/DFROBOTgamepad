
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
    //% blockId=initJoystickBit block="initialization joystick:bit"
    export function initJoystickBit(): void {
        pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
        pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
    }

    export enum ButtonsPin {
        //% block="C"
        P13 = DAL.MICROBIT_ID_IO_P13,
        //% block="D"
        P14 = DAL.MICROBIT_ID_IO_P14,
        //% block="E"
        P15 = DAL.MICROBIT_ID_IO_P15,
        //% block="F"
        P16 = DAL.MICROBIT_ID_IO_P16
    }
    export enum ButtonType {
        //% block="pressed"
        down = PulseValue.High,
        //% block="released"
        up = PulseValue.Low
    }
    //% block
    export function Butao(button: ButtonsPin, event: ButtonType, handler: Action): void {
        pins.onPulsed(<number>button, <number>event, handler);
    }
    //% block
    export function Vibracao(t: Estado): void {
        if (t == Estado.On) {
            pins.digitalWritePin(DigitalPin.P12, 0)
        } else {
            pins.digitalWritePin(DigitalPin.P12, 1)
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
