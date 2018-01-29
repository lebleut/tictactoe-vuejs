export default {
    getDiagVector : function(arr){
        var ret = []
        arr.forEach(function(vec, i){
            var index = i
            ret.push(vec[index])
        })

        return ret
    },
    getInvertDiagVector : function(arr){
        var ret = []
        arr.forEach(function(vec, i){
            var index = vec.length - i -1
            ret.push(vec[index])
        })

        return ret
    },
    multiplyVertor : function(vec){
        /* multiplies all the array vector elements */
        return vec.reduce(function(acc,el){
            return acc * el
        },1)
    },
    sumMultipliedVectors : function(arr){
        var ret = 0
        var self = this

        ret += arr.reduce(function(acc, vec){
            return acc + self.multiplyVertor( vec )
        }, 0)

        ret += self.multiplyVertor( self.getDiagVector(arr) )
        ret += self.multiplyVertor( self.getInvertDiagVector(arr) )

        return ret
    },
    rotMatrix : function(arr){
        /* rotate a 2 dimentional matrix*/
        var ret = []
        arr.forEach(function(vec, i){
            var newVec = []
            vec.forEach(function(elem, j){
                newVec.push( arr[j][i] )
            })
            ret.push(newVec)
        })

        return ret
    },
    validMatrix : function(arr){
        var ret = false
        var rotArr = this.rotMatrix(arr)

        var arrValid = this.sumMultipliedVectors( arr )
        var rotValid = this.sumMultipliedVectors( rotArr )

        if( arrValid > 0 || rotValid > 0 ){
            ret = true
        }

        return ret
    }
}