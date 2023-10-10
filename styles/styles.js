
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  profileLogo: {
    width: 30,
    height: 30,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileLogoimg: {
    width: 30,
    height: 30,
    borderRadius: 9999,
    marginBottom: 12,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
  },
placeholder:{
  color: '#707070',
  fontSize:13
},
placevalue:{
color:'#03285F',
fontSize:12,
fontFamily: 'Soramid',
},
  centercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  bluecontainer:{
    backgroundColor: '#FFF',
    padding: 2,
    borderRadius: 5,
    marginBottom: 30,
  },
  containercenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  containercenter2: {
    
    backgroundColor: '#FFF',
  },
  mt2:{
paddingTop: 90
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
  paymentdetail:{
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 14,
    backgroundColor:'#E6F0FD',
    borderRadius: 6,
    marginBottom: 5
  },
  textcenter:{
    color: '#121212',
    textAlign:'center',
    fontFamily: 'SoraBold'
  },
  myviews: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',

  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  otpBox: {
    borderRadius: 5,
    borderColor: '#4B4E52',
    borderWidth: 0.5,
  },
  otpText: {
    fontSize: 25,
    color: 'black',
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  bg: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    flex: 1, // Make the image take the full space of the container
    resizeMode: 'cover', // Adjust the resizeMode as needed

  },
  title: {
    fontFamily: 'SoraBold',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: -8,
    color: '#185ADB'
  },

  bgw: {
    borderTopLeftRadius: 20, // Top left corner radius
    borderTopRightRadius: 20, // Top right corner radius
    width: '100%',
    backgroundColor: 'white',

  },
  whitebg:{
backgroundColor: 'white',
padding: 10,
borderRadius: 5,

  },
  loader: {
    marginTop: 38
  },
  myviewstwo: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',

  },
  icn: {
    fontWeight: '100'
  },
  splashimage: {
    height: 'auto',


    width: '100%',

  },

  myimput: {
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
  inputhidden: {
    width: '100%',
    display: 'none',
    borderColor: '#CFCFCF',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  splashbutton: {
    padding: 13,
    marginTop: 40,
    backgroundColor: '#d7c49e',
    borderRadius: 4,
    minWidth: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashbuttontext: {

    fontSize: 13,
    fontWeight: '200',
    color: 'white'
  },
  backgroundImage: {

    flex: 1, // Make the background image take up the entire screen
    resizeMode: 'contain', // Resize the image to cover the entire background
  },
  gold: {
    color: "#185ADB"
  },
  link: {
    color: '#3D70FF'
  },
  butons: {
    marginTop: -20,
    gap: 20,
    width: '100%',
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  butonthree: {
    padding: 15,
  },
  button: {
    width: '100%',
    display: 'flex',
    padding: 18,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#185ADB',
    width: '100%',
    borderColor: '#185ADB',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },

  buttonorange: {
    width: '100%',
    display: 'flex',
    padding: 18,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#db7018',
    width: '100%',
    borderColor: '#db7018',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  buttonzz: {
    padding: 18,
    borderRadius: 5,
    backgroundColor: '#185ADB',
    width: '78%',
    borderColor: '#185ADB',
    borderWidth: 1,
  },
  smallbutton: {
    padding: 18,
    borderRadius: 5,
    backgroundColor: '#185ADB',
    width: '20%',
    borderColor: '#e5ebed',
    borderWidth: 1,

 
    padding: 9,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5ebed',

  },
  buttonText: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',

  },

  buttons: {
    padding: 18,
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#CFCFCF',
    borderWidth: 1,
  },

  buttonTexts: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0A1931',
    textAlign: 'center',      // Center horizontally
    textAlignVertical: 'center', // Center vertically (for Android)
  },
  myloginimg: {
    flex: 1,
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',

  },
  pad: {
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
  mediumtext: {
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
    borderRadius: 20,
    width: 120, // Set the width of the image
    height: 120, // Set the height of the image
    resizeMode: 'contain', // Resize mode (cover, contain, stretch, etc.)
  },
  myimage:{
    width: 220, // Set the width of the image
    height: 220, // Set the height of the image
    resizeMode: 'contain', // Resize mode (cover, contain, stretch, etc.)
  },
  h2:{
    fontFamily: 'Soramid',
    color: '#191F33',
    fontSize: 14,
  },
  mydashboard: {
    padding: 13,
    gap: 24,
    width: '100%',
  },
  fits: {
    padding: 10,
    color: 'black',
    fontSize: 15,
    width: 80,
    alignItems: 'center'
  },
  fitz: {
    padding: 5,
    marginTop:5,
    color: 'black',
    fontSize: 15,
    width: 75,
    alignItems: 'center',
    borderRadius: 5
  },
  dashboardhead: {
    padding: 13,
    borderRadius: 8,
    backgroundColor: '#E6F0FD'
  },

  fit: {
    width: '20%',
    padding: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dashboardwhiteheadflex: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    borderRadius: 5,
  },

  mydebit:{
    borderRadius: 5,
    width: '49%',
    backgroundColor: '#FFE5E5',
    padding: 16,
    flexDirection: 'column',
    gap: 5,
  },
  mycredit:{
    borderRadius: 5,
    width: '49%',
backgroundColor: '#E4F9E0',
padding: 16,
flexDirection: 'column',
gap: 5,
  },

  mycreditcolor:{
    color: '#27C200',
    gap: 9,
    fontSize: 15,
  },
  icnv:{
marginLeft: 10,
color: '#27C200',
  },
  icnd:{
    marginLeft: 10,
    color: '#FF4F4F',
      },
  mydebitcolor:{
    color: '#FF4F4F',
gap: 9,
    fontSize: 16,
  },
  dashboardwhitehead: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff'
  },
  dashboardsplash: {
    borderRadius: 5,
    padding: 2,
    backgroundColor: '#fff'
  },
  mydashboarddata: {
    gap: 4,
    padding: 4,
  },
  mydashboarddataflex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dashbutton: {
    padding: 5,
    backgroundColor: '#0864ED',


    borderRadius: 7,
  },

  txtwhite: {
    fontSize: 12,
    color: 'white',
    paddingLeft: 7,
    paddingRight: 7
  },
  available: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  availables: {
    fontFamily: 'Soramid',
    fontSize: 12,
    color: '#525452'
  },

  amount: {
    fontSize: 14,
    fontFamily: 'SoraBold',
    color: '#1e1e1e',
  },
  iconbox: {
    width: '75%',
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#f3f6e1',
    marginBottom: 2
  },
  theicon: {
    color: '#78990c'
  },

  iconboxs: {
    padding: 10,
    width: '100%',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5ebed',
    marginBottom: 10
  },

  iconboxtwo: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#b8841c',
    marginBottom: 5
  },
  spacebetween: {
    width: '100%',
    justifyContent: 'space-between',
    flex: 1, flexDirection: 'row'
  },
  spacebet: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  iconboxthree: {
    padding: 9,
    borderRadius: 5,
    backgroundColor: '#34119c',
    marginBottom: 5
  },
  bnk: {
    width: 26, // Set the width of the image
    height: 26, // Set the height of the image
    resizeMode: 'contain', // Resize mode (cover, contain, stretch, etc.)
  },
  availablelight: {
    color: '#8d9096',
    fontSize: 13,
    fontWeight: '100'
  },
  spacebetweens: {
    width: '100%',
    justifyContent: 'space-between',
    flex: 1, flexDirection: 'row',
    marginTop: 5,
  },
  availablebold: {
    fontSize: 13,
    fontFamily: 'Soramid',

    color: '#27C200'
  },

  availablebolderror: {
    fontSize: 13,
    fontFamily: 'Soramid',

    color: '#FF4F4F'
  },
  smalltext: {
    color: '#868287',
    fontSize: 12,
    marginTop: 4,
  },
  splashstyle: {
    width: '100%',
    padding: 10,
    gap: 5
  },
  adverttext: {
    color: '#7443FF',
    fontSize: 18,
    padding: 5,
    fontWeight: 'bold'
  },
  advertsubtext: {
    color: '#2b2a2a',
    fontSize: 14,
    padding: 5,
    lineHeight: 18,

  },
  fdr: {
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
  bartext: {
    fontSize: 12,

  },
  activeitem: {
    borderRadius: 8,
    backgroundColor: '#ebe9ff'
  },
  fitn: {
    width: '20%',
    padding: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconboxn: {
    width: '75%',
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#F7E6FD',
    marginBottom: 2
  },
  theiconz: {
    color: '#B61EEC'
  },
  bodycontainer:{
    padding: 15,
  },
  bgcard:{
    flexDirection: 'row',
    padding: 10,
    borderRadius: 6,
    gap: 5,
    width: '100%',
    backgroundColor: '#E6F0FD',
justifyContent: 'center'
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#8c8888'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 45,
    fontSize: 16,
  },
  dropdown: {
    height: 55,
    borderColor: '#CFCFCF',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  selectedStyle: {
    backgroundColor: 'red',
  },
  transactionlogo:{
    width: '5%'
  },
  debit:{
    backgroundColor: '#FF4F4F',
    color: '#fff', // Not applicable to React Native
    borderRadius: 50,
    width: 28,
    height: 28,
    textAlign: 'center', // Not applicable to React Native
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  credit:{
    backgroundColor: '#27C200',
    color: '#fff', // Not applicable to React Native
    borderRadius: 50,
    width: 28,
    height: 28,
    textAlign: 'center', // Not applicable to React Native
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  pending:{
    backgroundColor: '#03285F',
    color: '#fff', // Not applicable to React Native
    borderRadius: 50,
    width: 28,
    height: 28,
    textAlign: 'center', // Not applicable to React Native
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  trxdate:{
color: '#8b91a2',
fontSize: 13
  },
  trxref:{
    color: '#373737',
    fontSize: 14
      },

  transactioncard:{
    padding: 15,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 5, // Gap is not a direct equivalent, you can achieve it using marginBottom on child elements.
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#3737591a',
  },
  sides:{
flexDirection: 'row',
gap: 10,
justifyContent: 'center',
alignItems: 'center',
  },
  historycard:{
    display: 'flex',
    width: '100%',
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 6,
    shadowColor: 'hsla(0, 0%, 0%, 0.04)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    flexDirection: 'column',

  },
    centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background color
    opacity: 1, // Opacity for the entire container
  },
  modaloverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background color
    opacity: 1, // Opacity for the entire container
  },
  roundsection:{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '60',
    backgroundColor: 'white',
  },
  modalView: {
    margin: 20,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 6,
    padding: 35,
    alignItems: 'center',

  },
  greenlogo:{
padding: 19,
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center'
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Add space between buttons
    gap: 10,
    bottom: 0, // Position the button at the bottom
    width: '100%', // Make the button span the entire width
    paddingHorizontal: 20, // Add some horizontal padding
    paddingBottom: 20, // Add some padding at the bottom
  },

  green:{

    backgroundColor: '#23A26D',
    padding: 5,
    borderRadius: 50,
  },
  otpInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 5,
    padding: 12,
    borderWidth: 1,
    gap: 5,
    borderColor: '#Fff',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1, // Android shadow
  },
  myactiveCard:{
    flex: 1,
    margin: 5,
    padding: 12,
    borderWidth: 1,
    gap: 5,
    borderColor: '#E4F9E0',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E4F9E0',
  },
  gridText: {
    fontSize: 16,
    textAlign: 'center',
color: '#191F33',
fontFamily: 'Soramid',
  },
  gridTextday:{
    color: '#8b91a2',
    fontSize: 13,
    textAlign: 'center',
  },
  gridTextdayactive:{
color:'#27C200'
  },
  gridTexttitle:{
    fontFamily: 'Soramid',
    fontSize: 12,
    color: '#525452',
    textAlign: 'center',
  },
  allservices:{
gap:20,
width: '100%',
padding: 15,
backgroundColor: 'white',
  },
  servicestext:{
    color: '#373737',
    textAlign: 'center',
    fontFamily: 'Soramid',
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicebox:{
    padding: 20,
    gap: 6,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(62, 75, 148, 0.1)',
    marginBottom: 20
  },
  trxheader:{
    textTransform: 'capitalize',
    marginTop: 0,
    color: '#23325f',
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '600',
    textAlign: 'center'
  },
  txtcontent:{
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(76, 85, 102, 0.8)',
  },
  imgbx:{
paddingHorizontal:40,
alignItems: 'center',
justifyContent: 'center'
  },
  exploreservice:{
    textAlign: 'center',
    color: '#546fff',
    marginTop: 6
  },
  bluebg:{
    backgroundColor: '#6a9ff7',
    padding:45,
    borderRadius: 4,
  },
  bluebgsmall:{
    backgroundColor: '#6a9ff7',
    padding:15,
    borderRadius: 4,
    flexDirection:'row',
    justifyContent:'space-between'
  }
,
mylabel:{
    textTransform: 'capitalize',
    color: '#23325f',
    fontSize: 14,
    lineHeight: 23,
    fontWeight: '600',

  },
  bbigtext:{
    textTransform: 'capitalize',
    color: '#23325f',
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '600',
    textAlign:'center',
    marginTop: 20,
    marginBottom: 10
  }
  ,
  mywordings:{
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(76, 85, 102, 0.8)',
  }
});
