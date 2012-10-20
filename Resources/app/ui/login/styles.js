/**
 * Login screen styles
 * @type {Object}
 */
var Styles = {
    wrapper : {
        top:50,
        layout : 'vertical',
        width:310,
        backgroundColor:'white',
        bottom:10
    },
    logo : {
        image : 'app/assets/deloitteLogo.png',
        height : 83,
        top : 98
    },
    welcome : {
        height : 40,
        top : 15,
        text : 'Welcome, please login.',
        color:'#666666',
        font:{
            fontSize:18
        }
    },
    textField : {
        backgroundImage:'app/assets/loginFields.png',
        width : '46%',
        height : 42,
        top : 10,
        textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
        autocorrect : false,
        autocapitalization: false
    },
    pwdField : {
        backgroundImage:'app/assets/loginFields.png',
        width : '46%',
        height : 42,
        top : 10,
        textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
        autocorrect : false,
        autocapitalization: false,
        passwordMask: true
    },
    submit : {
        title : 'login',
        backgroundImage:'app/assets/loginButtonN.png',
        backgroundSelectedImage:'app/assets/loginButtonP.png',
        width : '17%',
        height : 42,
        top : 28,
        font:{
            fontSize:18
        }
    }
};

module.exports = Styles; 