<template>
<div>
    <guitar :flat="flat" v-show="instrument == 'Guitar'"/>
    <bass :flat="flat" v-show="instrument == 'Bass'" />
    <p v-if="instrument !== 'Guitar' && instrument !== 'Bass'">Other instruments coming soon..</p>
</div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import guitar from './guitar.vue'
import bass from './bass.vue'
    export default {
        props:{
            flat:{
                type: Boolean,
                required: false
            },
        },
        components: {guitar, bass},
        computed: mapState(['instrument'])
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