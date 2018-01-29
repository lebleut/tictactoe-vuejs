<template>
  <div id="app">
    <t-grid  :gameGrid="gameGrid" />
    <t-footer />
  </div>
</template>

<script>
import { eventBus } from './main.js'

import tools from './tools.js'

import Grid from './components/Grid.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
    data: function(){
    return {
      turnOf:1,
      gameGrid:{
        "c00":"",
        "c01":"",
        "c02":"",

        "c10":"",
        "c11":"",
        "c12":"",

        "c20":"",
        "c21":"",
        "c22":"",
      },
      gameOver: false,
      currentPlayer: "X",
      nextPlayer:""
    }
  },
  methods:{
    newGame:function(){
      this.gameOver = false
      this.currentPlayer = "X"
      this.nextPlayer = ""
      this.turnOf = 1
      this.gameGrid = {
        "c00":"",
        "c01":"",
        "c02":"",

        "c10":"",
        "c11":"",
        "c12":"",

        "c20":"",
        "c21":"",
        "c22":"",
      }
    },
    endGame:function(){
      this.gameOver = true
    },
    changeState:function(i,j){
      var coordinate = "c"+i+""+j

      if( this.gameGrid[coordinate] == "" && !this.gameOver ){
        this.currentPlayer = (this.turnOf == 1 ? "X" : "O")
        this.gameGrid[coordinate] = this.currentPlayer
        
        if( this.ticTacToe( this.currentPlayer ) ){
          this.endGame()
        }else{
          this.turnOf *=  -1          
        }

      }
    },
    ticTacToe: function(){
      var arrX = this.tttToArray( "X" )
      var arrO = this.tttToArray( "O" )

      return tools.validMatrix( arrX ) || tools.validMatrix( arrO )
    },
    tttToArray:function(XorO){
      var self = this
      var ret = [
        [0,0,0],
        [0,0,0],
        [0,0,0],
      ]
      ret.forEach(function(vect, i){
        vect.forEach(function(el, j){
          var coord = "c"+i+""+j
          if( self.gameGrid[coord] == XorO ){
            ret[i][j] = 1
          }
        })

      })

      return ret
    }
  },

  components:{
    "t-grid": Grid,
    "t-footer": Footer,
  },

  created: function(){
    self = this

    eventBus.$on("caseClicked",function(xy){
      self.changeState(xy[0],xy[1])
    })
    eventBus.$on("startNewGame",function(){
      self.newGame()
    })
  },
  watch:{
    currentPlayer:function(){
      this.nextPlayer = this.currentPlayer == "X" ? "O" : "X"
    }
  }


}
</script>

<style>
</style>
