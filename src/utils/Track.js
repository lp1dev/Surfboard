/**
 * The JavaScript Tracks Objects
*/

import { MIDIController } from '../lib/seaboard-api/js/MIDI'

class Track {
  constructor (name, inputs = [], outputs = []) {
    this._name = name
    this.active = true
    this.inputs = inputs
    this.outputs = outputs
    this.audioContext = MIDIController.audioContext
    this.gainNode = this.audioContext.createGain()
  }
  gain (gain) {
    if (gain) {
      this.gainNode.gain.value = gain
    }
    return this.gainNode.gain.value
  }
  name (name) {
    if (name) {
      this._name = name
    }
    return this._name
  }
  addInput (input) {
    // this.gainNode
    this.inputs.push(input)
  }
}

export default Track
