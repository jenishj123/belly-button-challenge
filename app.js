function dropdown(){
    d3.json("samples.json").then(function(data){
        var dropdownid = data.names
    })

}





function buildtable(id){

     d3.json("samples.json).then(function(data){
        var metadata= data.metadata
    })


}





function buildcharts(id){
 d3.json("samples.json).then(function(data){
        var samples = data.samples
    })

}





function optionChanged(id){
    buildtable(id)
    buildcharts(id)
}

dropdown()