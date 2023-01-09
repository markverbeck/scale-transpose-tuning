<template>
    <div>
        <div class="text-center" style="width: 75%; margin: auto; position: relative;" v-show="scales">
            <img src="/guitar.svg" alt="guitar" >
            <div class="neckView">
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(1deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[5])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(.5deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[4])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(.4deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[3])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%;" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[2])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(-0.3deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[1])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(-0.6deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[0])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewScale(key.name, key.mode))? '': (key.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
            </div>
            <div class="openStrings">
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(1deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[5]) : strings[5], createNewScale(key.name, key.mode))? '': (key.name === strings[5])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.8%; transform: skewY(.5deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[4]) : strings[4], createNewScale(key.name, key.mode))? '': (key.name === strings[4])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.9%; transform: skewY(.4deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[3]) : strings[3], createNewScale(key.name, key.mode))? '': (key.name === strings[3])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.7%;" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[2]) : strings[2], createNewScale(key.name, key.mode))? '': (key.name === strings[2])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(-0.3deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[1]) : strings[1], createNewScale(key.name, key.mode))? '': (key.name === strings[1])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(-0.6deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[0]) : strings[0], createNewScale(key.name, key.mode))? '': (key.name === strings[0])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="text-center" style="width: 75%; margin: auto; position: relative;" v-show="!scales">
            <img src="/guitar.svg" alt="guitar" >
            <div class="neckView">
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(1deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[5])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(.5deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[4])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(.4deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[3])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%;" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[2])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(-0.3deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[1])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(-0.6deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" v-for="note, i in createNewReverseChromaticArray(strings[0])" :style="`width:${fretWidths[i]}%; height: 2px;`">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(note) : note, createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === note)? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
            </div>
            <div class="openStrings">
                <div  style="width: 100%; height: 2px; margin-top: 2%; transform: skewY(1deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[5]) : strings[5], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[5])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.8%; transform: skewY(.5deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[4]) : strings[4], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[4])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.9%; transform: skewY(.4deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[3]) : strings[3], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[3])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.7%;" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[2]) : strings[2], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[2])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(-0.3deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[1]) : strings[1], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[1])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
                <div  style="width: 100%; height: 2px; margin-top: 1.6%; transform: skewY(-0.6deg);" class="flex">
                    <div class="border-r-1 border-black flex items-center justify-center" style="width:100%; height: 2px;">
                        <div class="rounded-full h-2 w-2"  :class="!isNoteInScale(flat? convertSharpToFlat(strings[0]) : strings[0], createNewChord(chord.name, chord.chord[1], chord.chord[2], chord.chord[3]))? '': (chord.name === strings[0])? 'bg-green-300' : 'bg-green-100'"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import {mapState, mapGetters, mapMutations} from 'vuex'
        export default {
            props:{
                flat:{
                    type: Boolean,
                    required: false
                }, 
            },
            data(){
                return{
                    stringNote: '',
                    keyNote: '',
                    mode: '',
                    tuningPreset: [],
                    fretWidths : [6,6.3, 6.6, 6.9, 7.4, 7.8, 8.3, 8.9, 9.3, 9.8, 10.6, 10.9 ]
                }
            },
            computed: {
                ...mapState(['sharpNotes', 'flatNotes', 'modes', 'noteChoices', 'tuningPresets', 'strings', 'key', 'instrumentView', 'scales', 'chord']),
                ...mapGetters(['createNewReverseChromaticArray', 'createNewModeArray', 'createNewScale', 'isNoteInScale', 'createNewChord', 'convertSharpToFlat'])
            },
        }
    </script>
    <style scoped>
        .dot{
          bottom: -9px;
          left: 41%;
        }
        .neckView{
            width: 33%;
            position: absolute;
            right: 17.8%;
            top: 42.5%;
        }
        .openStrings{
            width: 33%;
            position: absolute;
            right: -0.2%;
            top: 42.5%;
        }
      </style>