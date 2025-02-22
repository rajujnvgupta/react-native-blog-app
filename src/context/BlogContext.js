// import React, {useState, useReducer} from "react";
import { act } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
// imort jsonServer
// const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    console.log('raju ', 19)

    switch(action.type){
        case 'get_blogposts':
            return action.payload
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        // case 'add_blogpost':
        //     return [
        //         ...state,
        //         {
        //             id: Math.floor(Math.random() * 99999),
        //             title: action.payload.title,
        //             content: action.payload.content,
        //         }
        //     ];
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        dispatch({type: 'get_blogposts', payload: response.data})
    }
}

/*
const addBlogPost = (dispatch) => {
    console.log('raju ', 21)

    return (title, content, callback) => {
        console.log('raju ', 22)
        dispatch({type: 'add_blogpost', payload: {title: title, content: content}});
        if (callback){
            callback();
        }
        console.log('raju ', 23)
    }
};
*/

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title: title, content: content});
        if(callback){
            callback();
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
    }
};

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {
            title, content
        })
        dispatch({type: 'edit_blogpost', payload: { id: id, title: title, content: content}});
        if(callback){
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);

/*
export const BlogProvider = ({children}) => {
    // const [blogPosts, setBlogPosts] = useState([]);
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
    // };
    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});
    };
    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>{children}</BlogContext.Provider>
    );
};


export default BlogContext;
*/


