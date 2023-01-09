<template>
    <div>
      <div class="w-full flex mt-8 mb-12">
        <div class="w-1/2 flex justify-center items-center">
            <select name="note" id="" v-model="tuningPreset" class="rounded bg-gray-100 border border-black p-2">
              <option :value="[]" selected disabled hidden>Choose tuning preset</option>
              <option v-for="tuning in tuningPresets" :value="tuning">{{tuning.name}}</option>
            </select>
        </div>
        <div class="w-1/2 flex justify-center items-center">
            <select name="key" id="" v-model="keyNote" class="rounded bg-gray-100 border border-black p-2 mr-2 w-1/6">
              <option value="" selected disabled hidden>Key</option>
              <option v-for="note in noteChoices" :value="note">{{note}}</option>
            </select>
            <select name="mode" id="" v-model="mode" class="rounded bg-gray-100 border border-black p-2 w-1/6">
              <option value="" selected disabled hidden>Mode</option>
              <option v-for="mode, index in modes" :value="index">{{mode.name}}</option>
            </select>
        </div>
      </div>
      <div class="border-2 border-black drop-shadow-lg" v-show="strings.length > 0 && !instrumentView">
        <div class="flex relative bg-gradient-to-r from-orange-200 to-amber-100 " v-for="string, index in strings">
          <div class="w-1/12 text-center pt-3 pb-3 relative " :class="(string === note)? 'border-r-8 border-white' : 'border-r-4 border-gray-400'" v-for="note, i in createNewChromaticArray(string)">
            <p :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? 'bg-gray-100': (key.name === note)? 'bg-green-300' : 'bg-green-100'" class="border-t border-b border-gray-600 z-20 absolute inset-x-0">{{flat? convertSharpToFlat(note) : note}}</p>
            <div class="rounded-full p-2 bg-white border border-black z-10 absolute dot" v-show="index === (Math.floor((strings.length / 2) - 1)) && (i === 3 || i === 5 || i === 7 || i === 9)"></div>
          </div>

          <div class="w-1/12 border-r-4 border-gray-400 relative text-center pt-3 pb-3" >
            <p :class="!isNoteInScale(flat? convertSharpToFlat(createNewChromaticArray(string)[0]) : createNewChromaticArray(string)[0], createNewScale(key.name, key.mode))? 'bg-gray-100': (key.name === createNewChromaticArray(string, flat)[0])? 'bg-green-300' : 'bg-green-100'" class="border-t border-b border-gray-600 z-20">{{ flat? convertSharpToFlat(createNewChromaticArray(string)[0]) : createNewChromaticArray(string)[0] }}</p>
            <div class="rounded-full p-2 bg-white border border-black z-10 absolute w-2 h-2  left-1/4" style="bottom: -9px;" v-show="index === (Math.floor((strings.length / 2) - 1))"></div>
            <div class="rounded-full p-2 bg-white border border-black z-10 absolute w-2 h-2 right-1/4" style="bottom: -9px;" v-show="index === (Math.floor((strings.length / 2) - 1))"></div>
          </div>
        </div>
      </div>

      <div v-show="strings.length > 0 && instrumentView" class="text-center">
        <Instrument :flat="flat"/>
      </div>

      <div v-show="strings.length === 0" class="w-full text-center">
        <p>Please choose a tuning...</p>
      </div>
      <div class="w-full flex">
        <div class="w-1/2 flex mt-3">
          <div class="mt-1 p-3 mr-3">
            <input type="checkbox" id="checkbox" v-model="flat" />
            <label for="checkbox" class="italic font-bold font-mono text-lg">b</label>
          </div>
          <button v-show="strings.length > 0" class="bg-red-500 rounded text-white border border-black drop-shadow-lg px-2" @click="deletePresetTuning">Delete tuning</button>
        </div>
      </div>
    </div>
    
  
  </template>
  
  <script>
  import {mapState, mapGetters, mapMutations} from 'vuex'
  import Instrument from '@/components/instrument.vue'
  export default {
    name: 'Scales',
    comments:{Instrument},
    data(){
      return{
        flat: false,
        stringNote: '',
        keyNote: '',
        mode: '',
        tuningPreset: []
      }
    },
    mounted(){
      this.keyNote = this.key.name
      this.mode = this.key.mode
    },
    watch:{
      tuningPreset(){
        this.addTuningPreset(this.tuningPreset)
      },
      mode(){
        this.addKey({
          name: this.keyNote,
          mode: this.mode
        })
      },
      keyNote(){
        this.addKey({
          name: this.keyNote,
          mode: this.mode
        })
      }
    },
    computed: {
      ...mapState(['sharpNotes', 'flatNotes', 'modes', 'noteChoices', 'tuningPresets', 'strings', 'key', 'instrumentView']),
      ...mapGetters(['createNewChromaticArray', 'createNewModeArray', 'createNewScale', 'isNoteInScale', 'createNewChord', 'convertSharpToFlat'])
    },
    methods:{
      ...mapMutations(['addPresetTuning', 'deletePresetTuning', 'addString', 'deleteString', 'addTuningPreset', 'addKey']),
      saveTuningPreset(){
        this.newPresetTuning.strings = [...this.strings]
        this.addPresetTuning(this.newPresetTuning)
        this.newPresetTuning = {
          intrument: '',
          name: '',
          strings: []
        }
      }
    }
  }
  </script>
  <style scoped>
    .dot{
      bottom: -9px;
      left: 41%;
    }
  </style>
  