<template>
    <div v-if="open">
        <div @click="$emit('close')" class="w-full flex justify-center items-center h-screen bg-gray-100 opacity-70 z-20 absolute top-0"></div>
        <div class="p-3 bg-white opacity-100 absolute inset-0 z-30 w-1/2 h-1/2 top-1/4 left-1/4 rounded border-2 border-black drop-shadow-lg">
            <h1 class="text-xl text-center font-bold mt-5">Add tuning</h1>
            <div class="flex items-center justify-center p-2">
                <div v-for="string, index in displayStrings" class="relative mr-3">
                    <p class="text-lg font-bold">{{string}}</p>
                </div>
                <div v-show="displayStrings.length > 0" class="rounded-full bg-red-500 delete border border-black cursor-pointer text-white" @click="displayStrings = []">x</div>
            </div>
            <p v-show="error" class="text-red-600 text-center">Please use correct number of strings for instrument..</p>
          <form v-on:submit.prevent="saveTuningPreset" class="w-full m-auto mt-24 p-3">
            <div class="w-full flex items-center justify-center">
                <select name="note" id="" v-model="stringNote" required class="bg-gray-100 rounded p-2 border border-black mr-3 w-1/3">
                    <option :value="''" selected disabled hidden class="text-gray-200">Choose note</option>
                    <option v-for="note in noteChoices" :value="note">{{note}}</option>
                </select>
                <select name="" id="" v-model="newPresetTuning.instrument" required class="bg-gray-100 rounded p-2 border border-black mr-3 w-1/3">
                  <option value="Guitar" selected >Guitar</option>
                  <option value="Bass" selected >Bass</option>
                  <option :value="''" disabled class="text-gray-200">Choose instrument (more coming soon)</option>
                </select>
                <input type="text" id="name"  v-model="newPresetTuning.name" required placeholder="Tuning name.." class="bg-gray-100 rounded p-2 border border-black w-1/3">
            </div>
            <div class="w-full flex items-center justify-center mt-5">
                <button type="submit" class="p-3 bg-green-500 rounded text-center border-2 border-black text-white mr-3 w-1/3">Save Preset Tuning</button>
                <button @click="$emit('close')" class="p-3 bg-red-500 rounded text-center border-2 border-black text-white w-1/3">Cancel</button>
            </div>
          </form>
        </div>
    </div>
    
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
    export default {
        props: {
            open: {
                type: Boolean,
                default: false
            }
        },
      data(){
        return{
            stringNote: '',
            displayStrings: [],
            strings: [],
            newPresetTuning:{
                instrument: 'Guitar',
                name: '',
                strings: []
            },
            tuningPreset: [],
            error: false
        }
      },
    watch:{
        stringNote(){
            this.displayStrings.push(this.stringNote)
            this.strings.unshift(this.stringNote)
        }
    },
    computed: {
      ...mapState(['noteChoices'])
    },
    methods:{
      ...mapMutations(['addPresetTuning', 'addString', 'deleteString']),
      saveTuningPreset(){
        this.newPresetTuning.strings = [...this.strings]
        if(this.newPresetTuning.instrument === 'Bass' && this.newPresetTuning.strings.length == 4){
          this.addPresetTuning(this.newPresetTuning)
          this.resetForm();
        }else if(this.newPresetTuning.instrument === 'Guitar' && this.newPresetTuning.strings.length == 6){
          this.addPresetTuning(this.newPresetTuning)
          this.resetForm();
        }else{
          this.error = true
        }
      },
      resetForm(){
        this.error = false
        this.newPresetTuning = {
          intrument: '',
          name: '',
          strings: []
        }
        this.strings = []
        this.displayStrings = []
        this.$emit('close')
      }
    }
    }
</script>

<style scoped>
 .delete{
    font-size: 12px;
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2px;
    right: -9px;
    top: -3px;
 }
</style>