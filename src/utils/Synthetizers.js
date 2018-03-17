import { SubstractiveSynthetizer, CustomSubstractiveSynthetizer, FunctionSubstractiveSynthetizer } from '../lib/seaboard-api/js/Synthetizers'
import { Filter } from '../lib/seaboard-api/js/Filters'

const filters = {
  lowpass: new Filter('lowpass', 1000, 25, 9),
  highpass: new Filter('highpass', 1000, 25, 9),
  bandpass: new Filter('bandpass', 1000, 25, 9),
  lowshelf: new Filter('lowshelf', 1000, 25, 9),
  highshelf: new Filter('highshelf', 1000, 25, 9),
  peaking: new Filter('peaking', 1000, 25, 9),
  notch: new Filter('notch', 1000, 25, 9),
  allpass: new Filter('allpass', 1000, 25, 9)
}

const synthetizers = [
  new SubstractiveSynthetizer('Synthetizer 1 (Classic Sine)', filters.lowpass),
  new SubstractiveSynthetizer('Synthetizer 2 (Classic Square)', filters.lowpass, {fadeTime: 0.3, type: 'square'}),
  new SubstractiveSynthetizer('Synthetizer 3 (Classic Sawtooth)', filters.lowpass, {fadeTime: 0.3, type: 'sawtooth'}),
  new SubstractiveSynthetizer('Synthetizer 4 (Classic Triangle)', filters.lowpass, {fadeTime: 0.3, type: 'triangle'}),
  new CustomSubstractiveSynthetizer('Sine Climb', filters.lowpass, {fadeTime: 0.3}, [0, -3, -2, -1, 0, 1, 2, 3], [0, -3, 0, 0, 0, 0, 0, 0]),
  new CustomSubstractiveSynthetizer('Organ', filters.lowpass, {fadeTime: 0.01}, [0, -3, 3, -3, 3], [0, 0, 0, 0, 0]),
  new CustomSubstractiveSynthetizer('Faded Organ', filters.lowpass, {fadeTime: 1}, [0, -3, 3, -3, 3], [0, 0, 0, 0, 0]),
  new CustomSubstractiveSynthetizer('Classic Synth', filters.lowpass, {fadeTime: 0.3}, [0, 0, 1], [0, 1, 0]),
  new CustomSubstractiveSynthetizer('Magic Bells', filters.lowpass, {fadeTime: 0.9}, [0, 0, 0, 0, 0, -3], [0, 0, 0, 0, 0, 0]),
  new CustomSubstractiveSynthetizer('Low Oscillator 1', filters.lowpass, {fadeTime: 0.3}, [1, 1, 0, 0], [1, 0, 0, 0]),
  new CustomSubstractiveSynthetizer('Low Oscillator 2', filters.lowpass, {fadeTime: 0.3}, [6, 6, 0, 0], [0, 0, 0, 0], true),
  new CustomSubstractiveSynthetizer('Horn', filters.lowpass, {fadeTime: 0.3}, [0, 0.4, 0.4, 1, 1, 1, 0.3, 0.7, 0.6, 0.5, 0.9, 0.8], new Int8Array(12)),
  new FunctionSubstractiveSynthetizer('Creepy Exp Function Synth', filters.lowpass, {fadeTime: 0.3}, (x) => Math.pow(2 * Math.PI, x)),
  new FunctionSubstractiveSynthetizer('Rhods Like', filters.notch, {fadeTime: 0.5}, (x) => -x + 5, false, 6),
  new FunctionSubstractiveSynthetizer('DJames Bass 1', filters.lowshelf, {fadeTime: 0.3}, (x) => Math.cos(x) * x * Math.PI, false, 50),
  new CustomSubstractiveSynthetizer('Cheap Strings', filters.lowpass, {fadeTime: 0.7, gain: 0}, [1.5, 0.5, 1, -1.5, -1, -1.5, -1, -1.5, -1, 0, 0.5, 1.3, 1, 0, -0.5, -0.5, -0.5, -0.5, 0, 0.25, 0.5],
  new Int8Array(21), false),
  new FunctionSubstractiveSynthetizer('Negative Pow Function', filters.lowpass, {fadeTime: 0.3}, (x) => Math.pow(x, 0.9), false, 20),
  new CustomSubstractiveSynthetizer('Clean Space Synth', filters.lowpass, {fadeTime: 0.5}, [0, 1, 2, 3, 2, 0, 0, 0], [0, 1, 2, 3, 2, 0, 0, 0], false, 5),
  new FunctionSubstractiveSynthetizer('Old School Synth', filters.lowpass, {fadeTime: 0.5}, (x) => x * Math.sin(x) + x * Math.tan(x), false, 100),
  new FunctionSubstractiveSynthetizer('FlashBack', filters.lowpass, {fadeTime: 0.5}, (x) => Math.tan(x) + (Math.pow(x, 3) / 100), false, 13),
  new FunctionSubstractiveSynthetizer('High Pitched Buzzer', filters.lowpass, {fadeTime: 0.5}, (x) => Math.tan(x) + (Math.pow(x, 1.2) / 10), false, 40)
]

export default synthetizers
