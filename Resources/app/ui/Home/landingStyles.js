/**
 * Landing screen styles
 * @type {Object}
 */
var Styles = {
    wrapper: {
        backgroundColor: '#fff',
        layout: 'vertical'
    },
    mergerView:{
        height:265,
        width:1290,
        layout:'horizontal',
        left:-1,
        top:6       
    },
    view:{
        height:215,        
        width:1290,
        layout:'horizontal',
        left:-2,
        top:6       
    },
    mergerTab:{
        height:Ti.UI.SIZE,
        width:Ti.UI.SIZE,
        layout:'horizontal',
        left: 0,
        top:0
    },
    tab:{
        height:Ti.UI.SIZE,
        width: 980,
        contentWidth:'auto',       
        layout:'horizontal',
        scrollType:'horizontal',
        left: -60,
        top:0        
    },
    label:{
        height:'90%',
        width:170,
        left:-60,
        color:'#ffffff',
        font:{
            fontWeight:'bold',
            fontFamily:'Arial',
            fontSize:24
        },
        textAlign:'center'       
    }
};

module.exports = Styles;