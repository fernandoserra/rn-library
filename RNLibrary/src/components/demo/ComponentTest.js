import React , {Component} from "react";
import { View, Text,StyleSheet} from "react-native";

class Test extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Test Library interno</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:30
    }
})


export default Test;