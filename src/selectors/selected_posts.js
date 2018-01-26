import { createSelector } from 'reselect';
import _ from 'lodash';

const postSelector = state => state.posts;
const selectedPost = state => state.selectedPosts;

const getPosts = (posts, selectedPost) => {
   let selectedPostSet;
    if(selectedPost.length > 0 ){
        selectedPostSet = _.filter(
            posts,
            (post, index) => _.contains(selectedPost[0], index)
        );
    }
   // console.log(selectedPostSet);
    return selectedPostSet;
}

export  default createSelector(
    postSelector, //pick off a piece of state
    selectedPost, //pick off a piece of state
    getPosts //function that has select logic
)