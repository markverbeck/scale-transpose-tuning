<template>
  <div>
    <div class="w-full p-5 bg-gray-400 drop-shadow-lg border-b-2 border-black relative flex items-center justify-between">
      <h1 class="text-white font-bold text-xl">EZ Tune</h1>
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="instrumentView? 'green' : 'white'" class="w-6 h-6 mr-2 cursor-pointer" @click="updateInstrumentView(true)">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="instrumentView? 'white' : 'green'" class="w-6 h-6 mr-2 cursor-pointer" @click="updateInstrumentView(false)">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" :stroke="scales? 'white' : 'green'" class="w-6 h-6 mr-2 cursor-pointer" @click="updateScalesBoolean">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 cursor-pointer" @click="open = true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      
    </div>
    <Scales v-if="scales" />
    <Chords v-else />
    <AddTuningModal :open="open" @close="open = false"/>
  </div>
  

</template>

<script>

import Scales from "@/components/scales.vue"
import Chords from "@/components/chords.vue"
import AddTuningModal from "@/components/addTuningModal.vue"
import { mapMutations, mapState } from "vuex"
export default {
    name: "IndexPage",
    components: {
        Scales,
        Chords,
        AddTuningModal
    },
    data(){
      return{
        open: false,
      }
    },
    methods:{
      ...mapMutations(['updateInstrumentView', 'updateScalesBoolean'])
    },
    computed:{
      ...mapState(['instrumentView','scales'])
    }
}
</script>
