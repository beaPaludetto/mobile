import {  Image,  ScrollView,  Text, TouchableOpacity, View} from "react-native"
import {styles} from "./style"

// Importou o scroll view errado
export default function Index(){
     const MENU = [
        {
            id: 1,
            name: "Gelato Vanilla Tradicional Pequeno",
            description: "Receita básica do Gelato Vanilla Tradicional Paludetto’s, contendo: Leite integral, Açúcar, gemas de ovo, creme de leite fresco e fava de baunilha.",
            price: 15.00,
            image: require("@/assets/images/vanilla.jpg")
        },
        {
            id: 2,
            name: "Gelato Chocolate Tradicional Pequeno",
            description: "Receita básica do Gelato de Chocolate Tradicional Paludetto’s, contendo: Leite integral, Açúcar, gemas de ovo, creme de leite fresco, chocolate meio amargo derretido e cacau em pó.",
            price: 15.00,
            image: require("@/assets/images/chocolate.jpg")
        },
        {
            id: 3,
            name: "Gelato Morango Tradicional Pequeno",
            description: "Receita básica do Gelato de Morango Tradicional Paludetto’s, contendo: Leite integral, Açúcar, mel, gemas de ovo, creme de leite fresco, morangos frescos e meio limão.",
            price: 15.00,
            image: require("@/assets/images/morango.jpg") 

        }
     ]

    return(
        <View style= {styles.container}>
        <View style = {styles.header}>
        <Text style={styles.restaurantName}>Paludetto's</Text>
        <Text style= {styles.subtitle}>Gelateria</Text>
        <Image style={styles.headerImage}source={require("@/assets/images/gelato.jpeg")}/>
        </View>
        <View style = {styles.tabs}>
            {["Veja as recomendações do dia" ].map((item) => (
                <TouchableOpacity>
                    <Text style = {styles.tabsName}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
       <ScrollView style={styles.menuList}>
        {
            MENU.map((item) => (
                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuContent}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                    <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                    </View>
                    <Image style={styles.menuImage} source={item.image}/>
                </TouchableOpacity>
            ))
        }
        </ScrollView>
        </View>
    )
}

