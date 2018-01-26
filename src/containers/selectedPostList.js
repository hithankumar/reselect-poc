import React ,{Component} from 'react';
import {connect} from 'react-redux';
import SelectedPostsSelector from '../selectors/selected_posts';


const SelectedPosts = (props) => {
    if(!props.posts || !props.posts.length>0){
        return (
            <ul>
                <li>Select a post</li>
            </ul>
        )
    }
    return(
    <ul>
        {props.posts.map((post,index) => {
            return(
                <li key={index}>
                    {post}
                </li>
            )
        })
        }
    </ul>)
  

}
const mapStateToProps = state => {
    return {
        posts: SelectedPostsSelector(state)
    }
}
export default connect(mapStateToProps)(SelectedPosts);