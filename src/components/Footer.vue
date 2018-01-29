<template>
	<div class="footer">
		<button @click="startNewGame">New game</button>
	</div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  data () {
    return {
    }
  },
  methods:{
  	startNewGame:function(){
  		eventBus.$emit("startNewGame")
  	}
  }
}
</script>

<style>
.footer{
	text-align: center;
	position: relative;
    top: 15px;
}
</style>