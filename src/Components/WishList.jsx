export const WishList = () => {
    return( 
        <div className="bg-[#1e2a47] rounded-xl p-10 shadow-xl flex flex-col gap-10 h-full">
            <h1 className="text-white text-left text-4xl font-mono">
                Your WishList
            </h1>
            <div className="h-full flex justify-center items-center">
                <h3 className="text-white text-center text-2xl">
                    Your WishList is Empty
                </h3>
            </div>   
        </div>
    )
}