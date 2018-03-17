import { Synthetizer, CustomSynthetizer, FunctionSynthetizer } from '../lib/seaboard-api/js/MIDI'

const synthetizers = [
  new Synthetizer('Synthetizer 1 (Classic Sine)'),
  new Synthetizer('Synthetizer 2 (Classic Square)', {fadeTime: 0.3, type: 'square'}),
  new Synthetizer('Synthetizer 3 (Classic Sawtooth)', {fadeTime: 0.3, type: 'sawtooth'}),
  new Synthetizer('Synthetizer 4 (Classic Triangle)', {fadeTime: 0.3, type: 'triangle'}),
  new CustomSynthetizer('Sine Climb', {fadeTime: 0.3}, [0, -3, -2, -1, 0, 1, 2, 3], [0, -3, 0, 0, 0, 0, 0, 0]),
  new CustomSynthetizer('Organ', {fadeTime: 0.01}, [0, -3, 3, -3, 3], [0, 0, 0, 0, 0]),
  new CustomSynthetizer('Faded Organ', {fadeTime: 1}, [0, -3, 3, -3, 3], [0, 0, 0, 0, 0]),
  new CustomSynthetizer('Classic Synth', {fadeTime: 0.3}, [0, 0, 1], [0, 1, 0]),
  new CustomSynthetizer('Magic Bells', {fadeTime: 0.9}, [0, 0, 0, 0, 0, -3], [0, 0, 0, 0, 0, 0]),
  new CustomSynthetizer('Low Oscillator 1', {fadeTime: 0.3}, [1, 1, 0, 0], [1, 0, 0, 0]),
  new CustomSynthetizer('Low Oscillator 2', {fadeTime: 0.3}, [6, 6, 0, 0], [0, 0, 0, 0], true),
  new CustomSynthetizer('Horn', {fadeTime: 0.3}, [0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8], new Int8Array(12)),
  new FunctionSynthetizer('Creepy Exp Function Synth', {fadeTime: 0.3}, (x) => Math.pow(2 * Math.PI, x)),
  new FunctionSynthetizer('Rhods Like', {fadeTime: 0.5}, (x) => -x + 5, false, 6),
  new FunctionSynthetizer('DJames Bass 1', {fadeTime: 0.3}, (x) => Math.cos(x) * x * Math.PI, false, 50),
  new CustomSynthetizer('Cheap Strings', {fadeTime: 0.7, gain: 0}, [1.5, 0.5, 1, -1.5, -1, -1.5, -1, -1.5, -1, 0, 0.5, 1.3, 1, 0, -0.5, -0.5, -0.5, -0.5, 0, 0.25, 0.5],
  new Int8Array(21), false),
  new FunctionSynthetizer('Negative Pow Function', {fadeTime: 0.3}, (x) => Math.pow(x, 0.9), false, 20),
  new CustomSynthetizer('Clean Space Synth', {fadeTime: 0.5}, [0, 1, 2, 3, 2, 0, 0, 0], [0, 1, 2, 3, 2, 0, 0, 0], false, 5),
  new FunctionSynthetizer('Old School Synth', {fadeTime: 0.5}, (x) => x * Math.sin(x) + x * Math.tan(x), false, 100),
  new FunctionSynthetizer('FlashBack', {fadeTime: 0.5}, (x) => Math.tan(x) + (Math.pow(x, 3) / 100), false, 13),
  new FunctionSynthetizer('High Pitched Buzzer', {fadeTime: 0.5}, (x) => Math.tan(x) + (Math.pow(x, 1.2) / 10), false, 40)
]

export default synthetizers
