import react from 'react'
function Home(){
    return(
        <div className='App'>
            <div className='image'>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/004/999/463/small_2x/shopping-cart-icon-illustration-free-vector.jpg" alt="" />
            </div>
            <h1>Home Component</h1>
            <div className='Container'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0praxNFT7dTQYuQlpiE9nl6gbXzpnY0kSRg&s" alt="" />
                <div className="text">
                    <span>
                        I Phone
                    </span>
                    <span>
                        $1000.00
                    </span>
                </div>
                <button className='Add'>Add To Cart</button>

            </div>
        </div>
    )
}

export default Home;