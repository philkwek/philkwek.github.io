const options = {
    bottom: '32px', // default: '32px'
    right: '40px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
const darkmode = new Darkmode();

$('#toggle_darkMode').click(function(){
    darkmode.toggle()
    console.log(darkmode.isActivated())
})







