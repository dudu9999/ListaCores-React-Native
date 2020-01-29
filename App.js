import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { render } from 'react-dom';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cores: [
        {id:'1', corLetra:'white',  nome: 'Black' , hexadecimal: '#000000', RGB: '(0,0,0)' },
        {id:'2', corLetra:'white',   nome: 'grey11'    , hexadecimal: '#1C1C1C', RGB: '(28,28,28)' },
        {id:'3', corLetra:'white',   nome: 'grey21', hexadecimal: '#363636', RGB: '(54,54,54)' },
        {id:'4',corLetra:'white',   nome: 'grey31'   , hexadecimal: '#4F4F4F', RGB: '(79,79,79)' },
        {id:'5',corLetra:'white',   nome: 'DimGray'     , hexadecimal: '#696969', RGB: '(105,105,105)' },
        {id:'6',corLetra:'black',   nome: 'Gray', hexadecimal: '#808080', RGB: '(128,128,128)' },
        {id:'7',corLetra:'black',   nome: 'DarkGray', hexadecimal: '#A9A9A9', RGB: '(169,169,169)' },
        {id:'8', corLetra:'black',  nome: 'Silver', hexadecimal: '#C0C0C0', RGB: '(192,192,192)' },
        {id:'9', corLetra:'black',  nome: 'LightGrey', hexadecimal: '#D3D3D3', RGB: '(211,211,211)' },
        {id:'10',corLetra:'black',  nome: 'Gainsboro', hexadecimal: '#DCDCDC', RGB: '(220,220,220)' },
        {id:'11',corLetra:'black',  nome: 'SlateBlue', hexadecimal: '#6A5ACD', RGB: '(106,90,205)' },
        {id:'12',corLetra:'black',  nome: 'SlateBlue1', hexadecimal: '#836FFF', RGB: '(131,111,255)' },
        {id:'13',corLetra:'black',  nome: 'SlateBlue3', hexadecimal: '#6959CD', RGB: '(105,89,205)' },
        {id:'14',corLetra:'black',  nome: 'DarkSlateBlue', hexadecimal: '#483D8B', RGB: '(72,61,139)' },
        {id:'15',corLetra:'white',  nome: 'MidnightBlue', hexadecimal: '#191970', RGB: '(25,25,112)' },
        {id:'16',corLetra:'white',  nome: 'Navy', hexadecimal: '#000080', RGB: '(0,0,128)' },
        {id:'17',corLetra:'white',  nome: 'DarkBlue', hexadecimal: '#00008B', RGB: '(0,0,139)' },
        {id:'18',corLetra:'black',  nome: 'MediumBlue', hexadecimal: '#0000CD', RGB: '(0,0,205)' },
        {id:'19',corLetra:'black',  nome: 'Blue', hexadecimal: '#0000FF', RGB: '(0,0,255)' },
        {id:'20',corLetra:'black',  nome: 'CornflowerBlue', hexadecimal: '#6495ED', RGB: '(100,149,237)' },
        {id:'21',corLetra:'black',  nome: 'RoyalBlue', hexadecimal: '#4169E1', RGB: '(65,105,225)' },
        {id:'22',corLetra:'black',  nome: 'DodgerBlue', hexadecimal: '#1E90FF', RGB: '(30,144,255)' },
        {id:'23',corLetra:'black',  nome: 'DeepSkyBlue', hexadecimal: '#00BFFF', RGB: '(0,191,255)' },
        {id:'24',corLetra:'black',  nome: 'LightSkyBlue', hexadecimal: '#87CEFA', RGB: '(135,206,250)' },
        {id:'25',corLetra:'black',  nome: 'SkyBlue', hexadecimal: '#87CEEB', RGB: '(135,206,235)' },
        {id:'26',corLetra:'black',  nome: 'LightBlue', hexadecimal: '#ADD8E6', RGB: '(173,216,230)' },
        {id:'27',corLetra:'black',  nome: 'SteelBlue', hexadecimal: '#4682B4', RGB: '(70,130,180)' },
        {id:'28',corLetra:'black',  nome: 'LightSteelBlue', hexadecimal: '#B0C4DE', RGB: '(176,196,222)' },
        {id:'29',corLetra:'black',  nome: 'SlateGray', hexadecimal: '#708090', RGB: '(112,128,144)' },
        {id:'30',corLetra:'black',  nome: 'LightSlateGray', hexadecimal: '#778899', RGB: '(119,136,153)' },
        {id:'31',corLetra:'black',  nome: 'Aqua / Cyan', hexadecimal: '#00FFFF', RGB: '(0,255,255)' },
        {id:'32',corLetra:'black',  nome: 'DarkTurquoise', hexadecimal: '#00CED1', RGB: '(0,206,209)' },
        {id:'33',corLetra:'black',  nome: 'Turquoise', hexadecimal: '#40E0D0', RGB: '(64,224,208)' },
        {id:'34',corLetra:'black',  nome: 'MediumTurquoise', hexadecimal: '#48D1CC', RGB: '(72,209,204)' },
        {id:'35',corLetra:'black',  nome: 'LightSeaGreen', hexadecimal: '#20B2AA', RGB: '(32,178,170)' },
        {id:'36',corLetra:'black',  nome: 'DarkCyan', hexadecimal: '#008B8B', RGB: '(0,139,139)' },
        {id:'37',corLetra:'black',  nome: 'Teal', hexadecimal: '#008080', RGB: '(0,128,128)' },
        {id:'38',corLetra:'black',  nome: 'Aquamarine', hexadecimal: '#7FFFD4', RGB: '(127,255,212)' },
        {id:'39',corLetra:'black',  nome: 'MediumAquamarine', hexadecimal: '#66CDAA', RGB: '(102,205,170)' },
        {id:'40',corLetra:'black',  nome: 'CadetBlue', hexadecimal: '#5F9EA0', RGB: '(95,158,160)' },
        {id:'41',corLetra:'white',  nome: 'DarkSlateGray', hexadecimal: '#2F4F4F', RGB: '(47,79,79)' },
        {id:'42',corLetra:'black',  nome: 'MediumSpringGreen', hexadecimal: '#00FA9A', RGB: '(0,250,154)' },
        {id:'43',corLetra:'black',  nome: 'SpringGreen', hexadecimal: '#00FF7F', RGB: '(0,255,127)' },
        {id:'44',corLetra:'black',  nome: 'PaleGreen', hexadecimal: '#98FB98', RGB: '(152,251,152)' },
        {id:'45',corLetra:'black',  nome: 'LightGreen', hexadecimal: '#90EE90', RGB: '(144,238,144)' },
        {id:'46',corLetra:'black',  nome: 'DarkSeaGreen', hexadecimal: '#8FBC8F', RGB: '(143,188,143)' },
        {id:'47',corLetra:'black',  nome: 'MediumSeaGreen', hexadecimal: '#3CB371', RGB: '(60,179,113)' },
        {id:'48',corLetra:'black',  nome: 'SeaGreen', hexadecimal: '#2E8B57', RGB: '(46,139,87)' },
        {id:'49',corLetra:'white',  nome: 'DarkGreen', hexadecimal: '#006400', RGB: '(0,100,0)' },
        {id:'50',corLetra:'black',  nome: 'Green', hexadecimal: '#008000', RGB: '(0,128,0)' },
        {id:'51',corLetra:'black',  nome: 'ForestGreen', hexadecimal: '#228B22', RGB: '(34,139,34)' },
        {id:'52',corLetra:'black',  nome: 'LimeGreen', hexadecimal: '#32CD32', RGB: '(50,205,50)' },
        {id:'53',corLetra:'black',  nome: 'Lime', hexadecimal: '#00FF00', RGB: '(0,255,0)' },
        {id:'54',corLetra:'black',  nome: 'LawnGreen', hexadecimal: '#7CFC00', RGB: '(124,252,0)' },
        {id:'55',corLetra:'black',  nome: 'Chartreuse', hexadecimal: '#7FFF00', RGB: '(127,255,0)' },
        {id:'56',corLetra:'black',  nome: 'GreenYellow', hexadecimal: '#ADFF2F', RGB: '(173,255,47)' },
        {id:'57',corLetra:'black',  nome: 'YellowGreen', hexadecimal: '#9ACD32', RGB: '(154,205,50)' },
        {id:'58',corLetra:'black',  nome: 'OliveDrab',  hexadecimal: '6B8E23', RGB: '(107,142,35)' },
        {id:'59',corLetra:'white',  nome: 'DarkOliveGreen', hexadecimal: '#556B2F', RGB: '(85,107,47)' },
        {id:'60',corLetra:'white',  nome: 'Olive', hexadecimal: '#808000', RGB: '(128,128,0)' },
        {id:'61',corLetra:'black',  nome: 'DarkKhaki', hexadecimal: '#BDB76B', RGB: '(189,83,107)' },
        {id:'62',corLetra:'black',  nome: 'Goldenrod', hexadecimal: '#DAA520', RGB: '(218,165,32)' },
        {id:'63',corLetra:'black',  nome: 'DarkGoldenrod', hexadecimal: '#B8860B', RGB: '(184,134,11)' },
        {id:'64',corLetra:'white',  nome: 'SaddleBrown', hexadecimal: '#8B4513', RGB: '(139,69,19)' },
        {id:'65',corLetra:'black',  nome: 'Sienna', hexadecimal: '#A0522D', RGB: '(160,82,45)' },
        {id:'66',corLetra:'black',  nome: 'RosyBrown', hexadecimal: '#BC8F8F', RGB: '(188,143,143)' },
        {id:'67',corLetra:'black',  nome: 'Peru', hexadecimal: '#CD853F', RGB: '(205,133,63)' },
        {id:'68',corLetra:'black',  nome: 'Chocolate', hexadecimal: '#D2691E', RGB: '(210,105,30)' },
        {id:'69',corLetra:'black',  nome: 'SandyBrown', hexadecimal: '#F4A460', RGB: '(244,164,96)' },
        {id:'70',corLetra:'black',  nome: 'NavajoWhite', hexadecimal: '#FFDEAD', RGB: '(255,222,173)' },
        {id:'71',corLetra:'black',  nome: 'Wheat', hexadecimal: '#F5DEB3', RGB: '(245,222,179)' },
        {id:'72',corLetra:'black',  nome: 'BurlyWood', hexadecimal: '#DEB887', RGB: '(222,184,135)' },
        {id:'73',corLetra:'black',  nome: 'Tan', hexadecimal: '#D2B48C', RGB: '(210,180,140)' },
        {id:'74',corLetra:'black',  nome: 'MediumSlateBlue', hexadecimal: '#7B68EE', RGB: '(123,104,238)' },
        {id:'75',corLetra:'black',  nome: 'MediumPurple', hexadecimal: '#9370DB', RGB: '(147,112,219)' },
        {id:'76',corLetra:'black',  nome: 'BlueViolet', hexadecimal: '#8A2BE2', RGB: '(138,43,226)' },
        {id:'77',corLetra:'white',  nome: 'Indigo', hexadecimal: '#4B0082', RGB: '(75,0,130)' },
        {id:'78',corLetra:'black',  nome: 'DarkViolet', hexadecimal: '#9400D3', RGB: '(148,0,211)' },
        {id:'79',corLetra:'black',  nome: 'DarkOrchid', hexadecimal: '#9932CC', RGB: '(153,50,204)' },
        {id:'80',corLetra:'black',  nome: 'MediumOrchid', hexadecimal: '#BA55D3', RGB: '(186,85,211)' },
        {id:'81',corLetra:'black',  nome: 'Purple', hexadecimal: '#A020F0', RGB: '(128,0,128)' },
        {id:'82',corLetra:'white',  nome: 'DarkMagenta', hexadecimal: '#8B008B', RGB: '(139,0,139)' },
        {id:'83',corLetra:'black',  nome: 'Fuchsia / Magenta', hexadecimal: '#FF00FF', RGB: '(255,0,255)' },
        {id:'84',corLetra:'black',  nome: 'Violet', hexadecimal: '#EE82EE', RGB: '(238,130,238)' },
        {id:'85',corLetra:'black',  nome: 'Orchid', hexadecimal: '#DA70D6', RGB: '(218,112,214)' },
        {id:'86',corLetra:'black',  nome: 'Plum', hexadecimal: '#DDA0DD', RGB: '(221,160,221)' },
        {id:'87',corLetra:'black',  nome: 'MediumVioletRed', hexadecimal: '#C71585', RGB: '(199,21,133)' },
        {id:'88',corLetra:'black',  nome: 'DeepPink', hexadecimal: '#FF1493', RGB: '(255,20,147)' },
        {id:'89',corLetra:'black',  nome: 'HotPink', hexadecimal: '#FF69B4', RGB: '(255,105,180)' },
        {id:'90',corLetra:'black',  nome: 'PaleVioletRed', hexadecimal: '#DB7093', RGB: '(219,112,147)' },
        {id:'91',corLetra:'black',  nome: 'LightPink', hexadecimal: '#FFB6C1', RGB: '(255,182,193)' },
        {id:'92',corLetra:'black',  nome: 'Pink', hexadecimal: '#FFC0CB', RGB: '(255,192,203)' },
        {id:'93',corLetra:'black',  nome: 'LightCoral', hexadecimal: '#F08080', RGB: '(240,128,128)' },
        {id:'94',corLetra:'black',  nome: 'IndianRed', hexadecimal: '#CD5C5C', RGB: '(205,92,92)' },
        {id:'95',corLetra:'black',  nome: 'Crimson', hexadecimal: '#DC143C', RGB: '(220,20,60)' },
        {id:'96',corLetra:'white',  nome: 'Maroon', hexadecimal: '#800000', RGB: '(128,0,0)' },
        {id:'97',corLetra:'white',  nome: 'DarkRed', hexadecimal: '#8B0000', RGB: '(139,0,0)' },
        {id:'98',corLetra:'black',  nome: 'FireBrick', hexadecimal: '#B22222', RGB: '(178,34,34)' },
        {id:'99',corLetra:'black',  nome: 'Brown', hexadecimal: '#A52A2A', RGB: '(165,42,42)' },
        {id:'100',corLetra:'black',  nome: 'Salmon', hexadecimal: '#FA8072', RGB: '(250,128,114)' },
        {id:'101',corLetra:'black',  nome: 'DarkSalmon', hexadecimal: '#E9967A', RGB: '(233,150,122)' },
        {id:'102',corLetra:'black',  nome: 'LightSalmon', hexadecimal: '#FFA07A', RGB: '(255,160,122)' },
        {id:'103',corLetra:'black',  nome: 'Coral', hexadecimal: '#FF7F50', RGB: '(255,127,80)' },
        {id:'104',corLetra:'black',  nome: 'Tomato', hexadecimal: '#FF6347', RGB: '(255,99,71)' },
        {id:'105',corLetra:'black',  nome: 'Red', hexadecimal: '#FF0000', RGB: '(255,0,0)' },
        {id:'106',corLetra:'black',  nome: 'OrangeRed', hexadecimal: '#FF4500', RGB: '(255,69,0)' },
        {id:'107',corLetra:'black',  nome: 'DarkOrange', hexadecimal: '#FF8C00', RGB: '(255,140,0)' },
        {id:'108',corLetra:'black',  nome: 'Orange', hexadecimal: '#FFA500', RGB: '(255,165,0)' },
        {id:'121',corLetra:'black',  nome: 'Gold', hexadecimal: '#FFD700', RGB: '(255,215,0)' },
        {id:'122',corLetra:'black',  nome: 'Yellow', hexadecimal: '#FFFF00', RGB: '(255,255,0)' },
        {id:'123',corLetra:'black',  nome: 'Khaki', hexadecimal: '#F0E68C', RGB: '(240,230,140)' },
        {id:'124',corLetra:'black',  nome: 'AliceBlue', hexadecimal: '#F0F8FF', RGB: '(240,248,255)' },
        {id:'125',corLetra:'black',  nome: 'GhostWhite', hexadecimal: '#F8F8FF', RGB: '(248,248,255)' },
        {id:'126',corLetra:'black',  nome: 'Snow', hexadecimal: '#FFFAFA', RGB: '(255,250,250)' },
        {id:'127',corLetra:'black',  nome: 'Seashell', hexadecimal: '#FFF5EE', RGB: '(255,245,238)' },
        {id:'128',corLetra:'black',  nome: 'FloralWhite', hexadecimal: '#FFFAF0', RGB: '(255,250,240)' },
        {id:'129',corLetra:'black',  nome: 'WhiteSmoke', hexadecimal: '#F5F5F5', RGB: '(245,245,245)' },
        {id:'130',corLetra:'black',  nome: 'Beige', hexadecimal: '#F5F5DC', RGB: '(245,245,220)' },
        {id:'131',corLetra:'black',  nome: 'OldLace', hexadecimal: '#FDF5E6', RGB: '(253,245,230)' },
        {id:'132',corLetra:'black',  nome: 'Ivory', hexadecimal: '#FFFFF0', RGB: '(255,255,240)' },
        {id:'133',corLetra:'black',  nome: 'Linen', hexadecimal: '#FAF0E6', RGB: '(250,240,230)' },
        {id:'134',corLetra:'black',  nome: 'Cornsilk', hexadecimal: '#FFF8DC', RGB: '(255,248,220)' },
        {id:'135',corLetra:'black',  nome: 'AntiqueWhite', hexadecimal: '#FAEBD7', RGB: '(250,235,215)' },
        {id:'136',corLetra:'black',  nome: 'BlanchedAlmond', hexadecimal: '#FFEBCD', RGB: '(255,235,205)' },
        {id:'137',corLetra:'black',  nome: 'Bisque', hexadecimal: '#FFE4C4', RGB: '(255,228,196)' },
        {id:'138',corLetra:'black',  nome: 'LightYellow', hexadecimal: '#FFFFE0', RGB: '(255,255,224)' },
        {id:'139',corLetra:'black',  nome: 'LemonChiffon', hexadecimal: '#FFFACD', RGB: '(255,250,205)' },
        {id:'140',corLetra:'black',  nome: 'LightGoldenrodYellow', hexadecimal: '#FAFAD2', RGB: '(250,250,210)' },
        {id:'141',corLetra:'black',  nome: 'PapayaWhip', hexadecimal: '#FFEFD5', RGB: '(255,239,213)' },
        {id:'142',corLetra:'black',  nome: 'PeachPuff', hexadecimal: '#FFDAB9', RGB: '(255,218,185)' },
        {id:'143',corLetra:'black',  nome: 'Moccasin', hexadecimal: '#FFE4B5', RGB: '(255,228,181)' },
        {id:'144',corLetra:'black',  nome: 'PaleGoldenrod', hexadecimal: '#EEE8AA', RGB: '(238,232,170)' },
        {id:'145',corLetra:'black',  nome: 'MistyRose', hexadecimal: '#FFE4E1', RGB: '(255,228,225)' },
        {id:'146',corLetra:'black',  nome: 'LavenderBlush', hexadecimal: '#FFF0F5', RGB: '(255,240,245)' },
        {id:'147',corLetra:'black',  nome: 'Lavender', hexadecimal: '#E6E6FA', RGB: '(230,230,250)' },
        {id:'148',corLetra:'black',  nome: 'Thistle', hexadecimal: '#D8BFD8', RGB: '(216,191,216)' },
        {id:'149',corLetra:'black',  nome: 'Azure', hexadecimal: '#F0FFFF', RGB: '(240,255,255)' },
        {id:'150',corLetra:'black',  nome: 'LightCyan', hexadecimal: '#E0FFFF', RGB: '(224,255,255)' },
        {id:'151',corLetra:'black',  nome: 'PowderBlue', hexadecimal: '#B0E0E6', RGB: '(176,224,230)' },
        {id:'152',corLetra:'black',  nome: 'PaleTurquoise', hexadecimal: '#E0FFFF', RGB: '(175,238,238)' },
        {id:'153',corLetra:'black',  nome: 'Honeydew', hexadecimal: '#F0FFF0', RGB: '(240,255,240)' },
        {id:'154',corLetra:'black',  nome: 'MintCream', hexadecimal: '#F5FFFA', RGB: '(245,255250)' },
      ]
    };
  }

  render(){
    return (
      <View style={styles.container}>

          <FlatList 
            data={this.state.cores}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Pessoa data={item}/>}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
     container:{
      flex:1,
      paddingTop:24,
     },
     areaPessoa:{
        flexDirection:'row',
        paddingTop:35,
        height:100,
     },
     textoPessoa:{
        color:'#000',
        fontSize:20,
        paddingLeft:24,
        alignItems:'center',
        fontWeight: 'bold',
        borderColor:'white'
     }
});

export default App;


class Pessoa extends Component {
  render(){
    return (
      <View style={[styles.areaPessoa, {backgroundColor:this.props.data.hexadecimal}]}>
        <Text style={[styles.textoPessoa, {color:this.props.data.corLetra}]}>{this.props.data.id}</Text>
        <Text style={[styles.textoPessoa, {color:this.props.data.corLetra}]}>{this.props.data.nome}</Text>
        <Text style={[styles.textoPessoa, {color:this.props.data.corLetra}]}>{this.props.data.hexadecimal}</Text>
        <Text style={[styles.textoPessoa, {color:this.props.data.corLetra}]}>{this.props.data.RGB}</Text>
      </View>
    );
  }
}
 