    export default function RecipeDetailsC({getapiresponse}){
    return(
        <div className="flex">
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="w-full lg:sticky sm:flex gap:2">
                            <img src={getapiresponse.image}
                                    alt=""
                                            />        
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold">
                                {getapiresponse.name}
                            </h2>
                            <div className=" flex space-x-8 justify-between font-bold mt-8">

                            <p className="  text-2xl ">
                                {getapiresponse.cuisine}
                            </p>
                            <p>
                                Rating: <span className="text-red-600">{getapiresponse.rating} </span>
                                </p> 
                            </div>
                            <h3 className="mt-8 text-3xl font-bold text-red-600">Ingredients</h3>
                            <ul className="space-y-3 mt-4 pl-4">
                                {getapiresponse.ingredients.map(items=>
                                    <li>{items}</li>
                                )}
                            </ul>
                        </div>

                    </div>
            </div>
        </div>
    )
    }