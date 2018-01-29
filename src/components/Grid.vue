<template>
	<div>
		<table cellspacing="0">
      <tr>
        <td>
          <div class="cell" :class="gameGrid.c00" @click="clicked([0,0])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c01" @click="clicked([0,1])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c02" @click="clicked([0,2])"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="cell" :class="gameGrid.c10" @click="clicked([1,0])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c11" @click="clicked([1,1])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c12" @click="clicked([1,2])"></div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="cell" :class="gameGrid.c20" @click="clicked([2,0])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c21" @click="clicked([2,1])"></div>
        </td>
        <td>
          <div class="cell" :class="gameGrid.c22" @click="clicked([2,2])"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  props:["gameGrid"],
  methods:{
    clicked: function(xy){
      eventBus.$emit("caseClicked", xy)
    }
  }
}
</script>

<style scoped>
table{
  margin-left: auto;
  margin-right: auto;
}
.cell{
  width: 150px;
  height: 150px;
  text-align: center;
  font-size: 2rem;
  position: relative;
  top: 13px;
  left: 23px;
  cursor: pointer;
  background-size: 75% !important;

  -webkit-touch-callout: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  -moz-user-select: none; 
  -ms-user-select: none; 
  user-select: none; 

}
.cell.X {
    background: url("../assets/x.png") no-repeat;
}
.cell.O {
    background: url("../assets/o.png") no-repeat;
}

td {
  border: 1px solid #222;
}
td:first-of-type {
  border-left-color: transparent;
  border-top-color: transparent;
}
td:nth-of-type(2) {
  border-top-color: transparent;
}
td:nth-of-type(3) {
  border-right-color: transparent;
  border-top-color: transparent;
}
tr:nth-of-type(3) td {
  border-bottom-color: transparent;
}
</style>