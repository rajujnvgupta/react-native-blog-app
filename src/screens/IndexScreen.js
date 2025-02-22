import React, {useContext, useEffect} from "react";
import { View, StyleSheet, Text, FlatList, Button, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons"

const IndexScreen = ({navigation}) => {
    const { state, addBlogPost, deleteBlogPost, getBlogPosts } = useContext(Context);
    console.log('raju ', 4)
// const {state, addBlogPost} = useContext(Context);
    console.log('raju ', 5);
    useEffect(() => {
        getBlogPosts();
        const listner = navigation.addListener('didFocus', () => {
            getBlogPosts();
        });
        return () => {
            listner.remove();
        };
    }, []);
return (
        <View>
            {                console.log('raju ', 6)}
            <Text>IndexScreen</Text>
            {/* <Button title="Add Postsdf" onPress={() => addBlogPost()}/> */}
            {                console.log('raju ', 7)}

            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} -{item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                        // <style={styles.row}>
                            // <Text>{item.title}</Text>
                            // <Feather name="trash" />

                }}
            />
            {  console.log('raju sdf', 8)  }

        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30}/>
            </TouchableOpacity>
        ),
    };
};

const styles =  StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;





// return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };