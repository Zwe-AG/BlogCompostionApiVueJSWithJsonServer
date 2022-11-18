import { ref } from "vue";
let getPost = (id)=>{
    let post = ref(null);
    let error = ref("");
    let load = async()=>{
        try{

            // Local Json server 
            await new Promise((resolve,reject)=>{
                setTimeout(resolve,2000)
            })
            let response = await fetch('http://localhost:3000/posts/'+id);
            if(response.status===404){
                throw new Error('not found url');
            }
            let data = await response.json();
            post.value = data;

            // let doc=await db.collection("posts").doc(id).get()
            // post.value={id:doc.id,...doc.data()}

        }catch(err){
            console.log(err.message);
        }
    }
    return {post,error,load};
};
export default getPost;