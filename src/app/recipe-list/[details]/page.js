import RecipeDetailsC from "@/components/recipedetails";
async function fetchrecipedetails(currentrecipeId){
    try{
        const  apiResponse = await fetch(`https://dummyjson.com/recipes/${currentrecipeId}`);
        const data = await apiResponse.json();
        return data;

    }catch(e){
        throw new Error (e);
    }
    
}

export  default async function Recipedetails({params}){
const getapiresponse = await fetchrecipedetails(params?.details);

    return(
        <div>
          <RecipeDetailsC getapiresponse={getapiresponse}/>
        </div>
    )
} 