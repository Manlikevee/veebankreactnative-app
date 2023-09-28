// styles.js
import { StyleSheet, Platform, } from 'react-native';


export const shadowStyles = Platform.select({
  ios: {
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 40,
    backgroundColor: 'red'
  },
  android: {
    elevation: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,


  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    alignItems: 'center',
    backgroundColor: '#FFF',
  },

  centercontainer:{
    flex: 1,
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  containercenter: {
    flex: 1,
  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
  splashscreen: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    paddingHorizontal: 16,
    backgroundColor: '#00203f',
    // backgroundColor: '#1c2835',
    // backgroundColor: '#4a2a6b',
    // backgroundColor: '#004461',
  },
  flexcolumn: {
gap: 10,
justifyContent: 'center',
alignItems: 'center',
  },
  myviews:{
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
 width: '100%',
   
  },

  bg:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    flex: 1, // Make the image take the full space of the container
    resizeMode: 'cover', // Adjust the resizeMode as needed

  },
  title:{
    fontFamily: 'SoraBold',
    textAlign: 'center',
    fontSize: 25,
    marginTop:10,
    marginBottom: -8,
    color: '#185ADB'
  },

  bgw: {
    borderTopLeftRadius: 20, // Top left corner radius
    borderTopRightRadius: 20, // Top right corner radius
    width: '100%',
backgroundColor: 'white',

  },
  loader:{
marginTop: -38
  },
  myviewstwo:{
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
 width: '100%',
   
  },
  splashimage:{
height: 'auto',


 width: '100%',

  },

  myimput:{
    padding: 16,
    gap: 30
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center', // Apply alignItems here
  },
  input: {
    width: '100%',

    borderColor: '#CFCFCF',
    borderWidth: 1,
borderRadius: 4,
    padding: 10,
  },
  splashbutton: {
padding: 13,
marginTop: -40,
backgroundColor: '#d7c49e',
borderRadius: 4,
minWidth: '30%',
justifyContent: 'center',
alignItems: 'center',
  },
  splashbuttontext:{
fontSize: 13,
fontWeight: '200',
color: 'white'
  },
  backgroundImage: {
  
    flex: 1, // Make the background image take up the entire screen
    resizeMode: 'contain', // Resize the image to cover the entire background
  },
  gold: {
    color:"#185ADB"
  },
  link:{
color: '#3D70FF'
  },
  butons:{
    marginTop: -20,
gap: 20,
width: '100%',
padding: 35,
justifyContent: 'center',
alignItems: 'center',
  },
  butonthree:{
    padding: 15,
  },
  button: {
    padding: 18,
    borderRadius: 5,
    backgroundColor:'#185ADB',
    width: '100%',
    borderColor: '#185ADB',
    borderWidth: 1,
  },

  buttonText:{

textAlign: 'center',
fontWeight: 'bold',
textAlign: 'center',
color: '#fff',
  },

  buttons: {
    padding: 18,
    borderRadius: 5,
    backgroundColor:'#fff',
    width: '100%',
    borderColor: '#CFCFCF',
    borderWidth: 1,
  },

  buttonTexts:{
color: 'black',
textAlign: 'center',
fontWeight: 'bold',
textAlign: 'center',
color: '#0A1931',
  },
  myloginimg: {
    flex: 1,
    marginTop: 90,
  justifyContent: 'center',
    alignItems: 'center',

  },
pad:{
  padding: 15,
},
  veetitle: {
    fontFamily: 'Soraxxl', 
    fontSize: 35,
    padding: 10,
    marginTop: 95,
    textAlign: 'center',
    color: '#0A1931',
    lineHeight: 43,
  },
  mediumtext:{
color: '#666',
padding: 12,
marginTop: 0,
fontSize: 16,
lineHeight: 25,
textAlign: 'center',
  },
  progressBar: {
    height: 10,
    backgroundColor: 'red', // Customize the loading bar color
  },
  image: {
    width: 150, // Set the width of the image
    height: 150, // Set the height of the image
    resizeMode: 'contain', // Resize mode (cover, contain, stretch, etc.)
  },
  mydashboard: {
    padding: 13,
    gap: 24,
  },
  fits:{
padding: 10,
color: 'black',
fontSize: 15,
width: 80,
alignItems: 'center'
  },
  fitz:{
    padding: 7,
    color: 'black',
    fontSize: 15,
    width: 80,
    alignItems: 'center',
    borderRadius: 5
  },
  dashboardhead: {
    padding: 13,
    borderRadius: 8,
    backgroundColor: '#ebe9ff'
  },

  fit:{
width: '30%',
padding: 10,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
  },


  dashboardwhitehead:{
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  dashboardsplash:{
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#fff'
  },
  mydashboarddata:{
    gap: 4,
    padding: 4,
  },
  mydashboarddataflex:{
    flex: 1, 
    flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center'
  },
  dashbutton:{
    padding: 7,
    backgroundColor: '#6A35FF',


    borderRadius: 7,
  },

  txtwhite:{
    fontSize: 13,
color: 'white',
paddingLeft: 7,
paddingRight: 7
  },
  available:{
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  availables:{
    fontFamily: 'Soramid',
    fontSize: 13,
color: '#525452'
  },

  amount:{
    fontSize: 16,
    fontFamily: 'SoraBold', 
    color: '#1e1e1e'
  },
  iconbox:{
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#0a1e52',
    marginBottom: 5
      },
      iconboxtwo:{
        padding: 10,
        borderRadius: 7,
        backgroundColor: '#b8841c',
        marginBottom: 5
          },
          spacebetween:{
width: '100%',
justifyContent: 'space-between',
flex: 1, flexDirection: 'row'
              },
          iconboxthree:{
            padding: 9,
            borderRadius: 5,
            backgroundColor: '#34119c',
            marginBottom: 5
              },
  bnk:{
    width: 26, // Set the width of the image
    height: 26, // Set the height of the image
    resizeMode: 'contain', // Resize mode (cover, contain, stretch, etc.)
  },
  availablelight:{
color: '#8d9096',
fontSize: 13,
fontWeight: '100'
  },
  spacebetweens:{
    width: '100%',
    justifyContent: 'space-between',
    flex: 1, flexDirection: 'row',
    marginTop: 5,
                  },
        availablebold:{
         fontSize: 15,
         fontFamily: 'Soramid',

          color: '#1d8f26'
              },
              smalltext: {
                color: '#868287',
                fontSize: 12,
              },
              splashstyle:{
                width: '100%',
                padding: 10,
                gap: 5
              },
              adverttext:{
                color:'#7443FF',
                fontSize: 18,
                padding: 5,
                fontWeight: 'bold'
              },
              advertsubtext:{
                color:'#2b2a2a',
                fontSize: 14,
                padding: 5,
                lineHeight: 18,

              },
              fdr:{
                flexDirection: 'row', // Horizontal layout
                justifyContent: 'space-between', // Space evenly between cards
                paddingHorizontal: 16, // Adjust padding as needed
              },
              card: {
                padding: 4,
                width: '23%', // Adjust width as needed, 4 cards should fit in 100%
             alignItems: 'center',// Example background color
                borderRadius: 8, // Add borderRadius for card corners
marginBottom: 2,
justifyContent: 'center'
              },
              bartext:{
                fontSize: 12,

              },
              activeitem:{
                borderRadius: 8,
                backgroundColor: '#ebe9ff' 
              },

});
