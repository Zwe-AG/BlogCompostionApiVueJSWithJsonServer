import { ref } from '@vue/reactivity'
let getPosts = ()=>{
            let posts = ref([]);
            let error = ref("");
            let load = async()=>{
                try{
                    // Local Json Database
                    await new Promise((resolve,reject)=>{
                        setTimeout(resolve,2000)
                    })
                    let response = await fetch("http://localhost:3000/posts");
                    if(response.status === 404){
                        throw new Error('not Found Url')
                    }
                    let data = await response.json();
                    // console.log(data);
                    posts.value = data;
                    // import {db} from "../firebase/config"
                    // import {  collection, getDocs } from 'firebase/firestore';
                    // let response = collection(db, 'posts');
                    // let responseDocument = await getDocs(response);
                    // posts.value = responseDocument.docs.map((doc) => {
                    //     return {id:doc.id,...doc.data()}
                    // })
                }catch(err){
                    // console.log(error.message);
                    error.value = err.message;
                }
            };
            return {posts,error,load};
}
export default getPosts;


