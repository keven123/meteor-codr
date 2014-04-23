
Template.main.rendered = function () {
    $('#lmain').layout({ applyDefaultStyles: true , west:{minSize:300 }});
    $('#lcenter').layout({applyDefaultStyles: true,
        south:{size:200, resizable:true},
        onresize: function(name, elm, state, options, layout){
            if(name == "center"){
                resizeEditorsToFit(state.innerWidth, state.innerHeight);
            }
    }});
};