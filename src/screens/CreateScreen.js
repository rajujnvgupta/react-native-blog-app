import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../component/BlogPostForm";

const CreateScreen = ({ navigation }) => {

    const {addBlogPost}= useContext(Context);
    return (<BlogPostForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
            navigation.navigate('Index');
        })
    }}/>);
};

const styles = StyleSheet.create({

});

export default CreateScreen;
