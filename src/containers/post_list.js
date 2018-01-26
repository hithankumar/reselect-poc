import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts, selectPost} from '../actions';
import SelectedPosts from './selectedPostList';

let selectedPostList =[];
class PostsList extends Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    inputSelected(index){     
        if( this.refs[index].checked){
            selectedPostList.push(index)
        }else{
            selectedPostList.filter((num,ind) => {
                if(num === index)
                    selectedPostList.splice(ind,1);
            });          
        }
        this.props.selectPost(selectedPostList);
    }
    renderPosts(){       
        return this.props.posts.map((post,index)=>{
            return (
                <li key={index}>
                    <input type="checkbox" onChange={()=>this.inputSelected(index)} ref={index} />
                    {post}
                </li>
            )
        });
    }
    renderSelectedPosts(){
        let filteredSelectedPosts =[] ;
        if(!this.props.selectedPosts.length>0){
            return (
                <div>Select a post</div>
            )
        }

        this.props.selectedPosts[0].map((selectedPostIndex) => {
            filteredSelectedPosts.push(this.props.posts.filter((post, index) => {
                return selectedPostIndex === index;
            }));
        })
        
        return filteredSelectedPosts.map((post,index) => {
            return(
                <li key={index}>
                    {post}
                </li>
            )
        })
    }
    render(){
        return(
            <div>
                <div>
                    Posts list
                    <ul>
                        {this.renderPosts()}
                    </ul>
                </div>
                <div>
                    Selected posts
                    <SelectedPosts /> 
                    {/* <ul>
                        {this.renderSelectedPosts()}                      
                    </ul> */}
                </div>
            </div>
            
        )
    }
}
function mapStateToProps(state){
    return{
        posts: state.posts,
       // selectedPosts: state.selectedPosts
    }
}
export default connect(mapStateToProps, {fetchPosts, selectPost})(PostsList);