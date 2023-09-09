import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import StoryCard from "./StoryCard";


import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

let stories = require("./temp_stories.json");
renderItem=({item:stories})=>{
  return <StoryCard story={story}/>
}
keyExtractor=(item,index)=>
index.toString();
export default class Feed extends Component {
  constructor(props){
    super(props);
    this.state={
      fontsLoaded:false
    }
  }

  async _loadFontAsync(){
    await Font.loadAsync(customFonts)
    this.setState({fontsLoaded:true})
  }
  componentDidMount(){
    this._loadFontAsync
  }
  

  render() {
   
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
          <View style={styles.appIcon}>
          <Image source={require("../assets/logo.png")}
          style={{width:60,height:60,marginLeft:10}}>
          </Image>
          </View>
          <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>
          Story Telling App
          </Text>
          </View>           
          </View>
          <View style={styles.cardContainer}>
          <FlatList
          data={stories}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
          />
          </View>
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.93
  }
});
