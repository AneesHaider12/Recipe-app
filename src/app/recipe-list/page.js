import Recipelist from "@/components/recipes-list";
async function RecipelistApi(){
    try{
       const apiresponse =  fetch('https://dummyjson.com/recipes');
       const data = await (await apiresponse).json();
       return data?.recipes;
    }catch(e){
       throw new Error(e)
    }
}
export default async function Recipes(){
    const recipelist = await RecipelistApi();
return  (   
    <Recipelist recipelist={recipelist}/>
)
}