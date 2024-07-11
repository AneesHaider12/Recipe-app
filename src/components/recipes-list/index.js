import {
    Card,
    CardContent,

  } from "@/components/ui/card"
import Link from "next/link";
  

export default function Recipelist({recipelist}){
        console.log(recipelist);

    return(
        <div>
            <h2 className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
                Recipes below
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
                {
               recipelist && recipelist.length >0 ?
               recipelist.map((recipe)=>
               <Link href={`/recipe-list/${recipe.id}`}>
                 <Card >
                    <CardContent className="bg-white rounded-md overflow-hidden hover:scale[1.2]">
                        <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                            <img src={recipe.image} alt="" className="h-full w-full object-cover "/>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">
                                {recipe.name}
                            </h3>
                        </div>
                        <div className="flex flex-row space-x-40">
                            <h4 className="color-gray ">
                               Rating: {recipe.rating}
                            </h4>
                             
                            <div>
                            <h4 className="color-gray ml-auto font-bold ">
                                    {recipe.cuisine}
                            </h4>
                            </div>
                            </div>
                            <div>
                                 
                                </div> 
                      </CardContent>
                 </Card>
               </Link>) :null
                }
              
            </div>
             
        </div>
    )
}