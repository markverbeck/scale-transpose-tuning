export const state = () => ({
  chords: [
    {
      name: "Major",
      chord: [0, 4, 7, 0],
    },
    {
      name: "Minor",
      chord: [0, 3, 7, 0],
    },
    {
      name: "Diminished",
      chord: [0, 3, 6, 0],
    },
    {
      name: "Full Diminished",
      chord: [0, 3, 6, 9],
    },
    {
      name: "Augmented",
      chord: [0, 4, 8, 0],
    },
    {
      name: "Major 7th",
      chord: [0, 4, 7, 11],
    },
    {
      name: "Dominant 7th",
      chord: [0, 4, 7, 10],
    },
    {
      name: "Minor 7th",
      chord: [0, 3, 7, 10],
    },
    {
      name: "Minor M7th",
      chord: [0, 3, 7, 11],
    },
    {
      name: "Major 6th",
      chord: [0, 4, 7, 9],
    },
    {
      name: "Minor 6th",
      chord: [0, 3, 7, 9],
    },
    {
      name: "Minor b5",
      chord: [0, 3, 6, 10],
    },
  ],
  chord: {
    name: "c",
    chord: [0, 4, 7, 0],
  },
  key: {
    name: "c",
    mode: 0,
  },
  instrumentView: false,
  instrument: "Guitar",
  strings: [],
  scales: true,
  sharpNotes: ["a", "a#", "b", "c", "c#", "d", "d#", "e", "f", "f#", "g", "g#"],
  flatNotes: ["a", "Bb", "b", "c", "Db", "d", "Eb", "e", "f", "Gb", "g", "Ab"],
  noteChoices: [
    "a",
    "a#",
    "Bb",
    "b",
    "c",
    "c#",
    "Db",
    "d",
    "d#",
    "Eb",
    "e",
    "f",
    "f#",
    "Gb",
    "g",
    "g#",
    "Ab",
  ],
  modes: [
    {
      name: "Ionian",
    },
    {
      name: "Dorian",
    },
    {
      name: "Phrygian",
    },
    {
      name: "Lydian",
    },
    {
      name: "Mixolydian",
    },
    {
      name: "Aeolian",
    },
    {
      name: "Locrian",
    },
  ],
  modesFromIonian: [2, 2, 1, 2, 2, 2, 1],
  tuningPresets: [
    {
      instrument: "Guitar",
      name: "Standard Tuning",
      strings: ["e", "b", "g", "d", "a", "e"],
    },
    {
      instrument: "Guitar",
      name: "Open D",
      strings: ["d", "a", "f#", "d", "a", "d"],
    },
    {
      instrument: "Guitar",
      name: "Open G",
      strings: ["d", "b", "g", "d", "g", "d"],
    },
    {
      instrument: "Guitar",
      name: "DAD GAD",
      strings: ["d", "a", "g", "d", "a", "d"],
    },
  ],
});

export const mutations = {
  // creates new preset tuning
  addPresetTuning(state, sub) {
    const newTuning = {
      instrument: sub.instrument,
      name: sub.name,
      strings: sub.strings,
    };
    state.tuningPresets.push(newTuning);
  },
  deletePresetTuning(state) {
    state.tuningPresets.forEach((tuning, index) => {
      if (tuning.strings === state.strings) {
        state.tuningPresets.splice(index, 1);
        state.strings = [];
      }
    });
  },
  addString(state, stringNote) {
    state.strings.unshift(stringNote);
  },
  deleteString(state, index) {
    state.strings.splice(index, 1);
  },
  // Changes chosen preset to the currently displayed preset.
  addTuningPreset(state, tuningPreset) {
    state.strings = tuningPreset.strings;
    state.instrument = tuningPreset.instrument;
  },
  addKey(state, key) {
    state.key = key;
  },
  addChord(state, chord) {
    state.chord = chord;
  },
  updateInstrumentView(state, view) {
    state.instrumentView = view;
  },
  updateScalesBoolean(state) {
    state.scales = !state.scales;
  },
};

export const getters = {
  //creates new array of 11 notes, starting from specified note (key).
  createNewChromaticArray:
    (state) =>
    (key, flat = false) => {
      let newChromaticArray = [];
      if (
        key == "f" ||
        key == "Bb" ||
        key == "Db" ||
        key == "Eb" ||
        key == "Gb" ||
        key == "Ab" ||
        flat
      ) {
        const keyIndex = state.flatNotes.indexOf(key);

        state.flatNotes.forEach((note, index) => {
          if (index + keyIndex > 11) {
            newChromaticArray.push(state.flatNotes[index + keyIndex - 12]);
          } else {
            newChromaticArray.push(state.flatNotes[index + keyIndex]);
          }
        });
      } else {
        const keyIndex = state.sharpNotes.indexOf(key);

        state.sharpNotes.forEach((note, index) => {
          if (index + keyIndex > 11) {
            newChromaticArray.push(state.sharpNotes[index + keyIndex - 12]);
          } else {
            newChromaticArray.push(state.sharpNotes[index + keyIndex]);
          }
        });
      }

      return newChromaticArray;
    },
  createNewReverseChromaticArray:
    (state) =>
    (key, flat = false) => {
      let newChromaticArray = [];
      if (
        key == "f" ||
        key == "Bb" ||
        key == "Db" ||
        key == "Eb" ||
        key == "Gb" ||
        key == "Ab" ||
        flat
      ) {
        const keyIndex = state.flatNotes.indexOf(key);

        state.flatNotes.forEach((note, index) => {
          if (index + keyIndex > 11) {
            newChromaticArray.unshift(state.flatNotes[index + keyIndex - 12]);
          } else {
            newChromaticArray.unshift(state.flatNotes[index + keyIndex]);
          }
        });
      } else {
        const keyIndex = state.sharpNotes.indexOf(key);

        state.sharpNotes.forEach((note, index) => {
          if (index + keyIndex > 11) {
            newChromaticArray.unshift(state.sharpNotes[index + keyIndex - 12]);
          } else {
            newChromaticArray.unshift(state.sharpNotes[index + keyIndex]);
          }
        });
      }
      const root = newChromaticArray[11];
      newChromaticArray.unshift(root);
      newChromaticArray.splice(12, 1);
      console.log(newChromaticArray);
      return newChromaticArray;
    },
  //   creates a new mode array/scale formulas.  Computes Major, Minor, and remaining modes.
  createNewModeArray: (state) => (modeIndex) => {
    let newModeArray = [];

    state.modesFromIonian.forEach((step, index) => {
      if (index + modeIndex > 6) {
        newModeArray.push(state.modesFromIonian[index + modeIndex - 7]);
      } else {
        newModeArray.push(state.modesFromIonian[index + modeIndex]);
      }
    });
    return newModeArray;
  },
  //   creates new scale based on createNewChromaticArray and createNewModeArray
  createNewScale: (state, getters) => (key, modeIndex) => {
    let newScale = [key];
    let scaleStep = 0;
    const newChromaticArray = getters.createNewChromaticArray(key);
    const newModeArray = getters.createNewModeArray(modeIndex);
    newModeArray.forEach((step) => {
      scaleStep = scaleStep + step;
      if (scaleStep == 12) {
        newScale.push(key);
      } else {
        newScale.push(newChromaticArray[scaleStep]);
      }
    });
    return newScale;
  },
  // Creates new chord based on createNewChromaticArray
  createNewChord:
    (state, getters) =>
    (key, third, fifth, seventh = 0) => {
      const newChromaticArray = getters.createNewChromaticArray(key);
      let chord = [key, newChromaticArray[third], newChromaticArray[fifth]];
      if (seventh > 0) {
        chord.push(newChromaticArray[seventh]);
      }
      return chord;
    },
  //   checks if a note on a specific fret is contained in the current scale/mode
  isNoteInScale: () => (note, scale) => {
    let noteInScale = false;
    scale.forEach((scaleNote) => {
      if (scaleNote == note) {
        noteInScale = true;
      }
    });
    // console.log(note, scale, noteInScale);
    return noteInScale;
  },
  // Converts sharp nots to flat notes
  convertSharpToFlat: () => (note) => {
    let convertedNote = note;
    switch (note) {
      case "a#":
        convertedNote = "Bb";
        break;
      case "c#":
        convertedNote = "Db";
        break;
      case "d#":
        convertedNote = "Eb";
        break;
      case "f#":
        convertedNote = "Gb";
        break;
      case "g#":
        convertedNote = "Ab";
        break;
      default:
        break;
    }
    return convertedNote;
  },
};
