const posts = [
    {title:"Post 1", description:"Description 1", author:"author 1"},
    {title:"Post 2", description:"Description 2", author:"author 2"},
    {title:"Post 3", description:"Description 3", author:"author 3"},
    {title:"Post 4", description:"Description 4", author:"author 4"},
    {title:"Post 5", description:"Description 5", author:"author 5"},
    {title:"Post 6", description:"Description 6", author:"author 6"}
];

const listPosts = () => {
    posts.map(post => {
        console.log(post.title);
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        let state = posts.push(newPost);
        if(state){
            resolve(posts);
        }else{
            reject('Post does not added');
        }
    });
}

const showPosts = async() => {
    try{
        await addPost({title:"Post 11", description:"Description 11", author:"author 11"});
        listPosts();
    }catch(error){
        console.log(error);
    }
}

showPosts();