import { isAbsolute } from "path";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        //ocupar a tela inteira
        flex: 1,
        backgroundColor: "#b5b5b5"
    },

    header: {
        padding: 16
    },

    headerImage: {
        width: "85%",
        height: 200,
        borderRadius: 8,
        margin: 30
        
    },

    restaurantName:{
        fontSize: 27,
        // fontWeight: "bold",
        marginTop: 16, 
       
      

    },
    subtitle: {
        fontSize: 15,
        color: "black",
        marginTop: 4,
        
        
      
    },
    tabs: {
      flexDirection: "row",
      padding: 16,
      borderBottomColor: "#eee",
      borderBottomWidth: 1,
      gap: 16,
     
    },

    tabsName: {
      color: "#666"
    },

    menuList:{
        padding: 16,
        flex: 1
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#eee",
        borderBottomWidth: 16
    },
    menuContent: {
        flex: 1,
        marginRight: 16
    },
    menuImage: {
        width: 80,
        height: 80,
        borderRadius: 8 
    },
    itemName: {
        fontSize: 16,
        fontWeight: "bold"
    },
    itemDescription: {
        color: "#666",
        marginTop: 4
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8
    }
})