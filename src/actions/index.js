let posts = [
    'this is a new post',
    'this is second post',
    'Regarding median of sum',
    'New Camoflauge rules',
    'Next generation troubleshooting',
    'Loren Ipsum',
    'New Proactive ways of dealing with workload',
    'How to cope with workplace stress',
    'Seeking infinite and bound situations'
];
export const FETCH_POSTS = 'FETCH_POSTS';
export const SELECT_POST = 'SELECT_POST';

export function fetchPosts(){
    return{
        type: FETCH_POSTS,
        payload: posts
    }
}
export function selectPost(selectedPost){

    return{
        type: SELECT_POST,
        payload: selectedPost
    }
}