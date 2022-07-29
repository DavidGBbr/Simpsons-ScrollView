import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow',
    },

    title:{
        fontSize:36,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:30,
    },

    card:{
        backgroundColor:'#fff',
        marginHorizontal:15,
        marginBottom:20,
        padding:20,
        borderColor:'#979797',
        borderWidth:1,
        borderRadius:5,
    },

    cardImage:{
        width:300,
        height:230,
    },

    cardTitle:{
        fontSize:21,
        fontWeight:'bold',
        marginVertical:10,
    },

    cardParagraph:{
        marginBottom:10
    }
})

export default styles;