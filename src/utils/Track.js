/**
 * The JavaScript Tracks Objects
*/

import { MIDIController } from '../lib/seaboard-api/js/MIDI'

class Track {
  constructor (inputs = [], outputs = []) {
    this.inputs = inputs
    this.outputs = outputs
    this.audioContext = MIDIController.audioContext
  }
}

export default Track
