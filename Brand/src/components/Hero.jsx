function Hero() {
    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE  TO HELP YOU WITH OUR SHOES. <br />YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="btn">
                <button>Shop Now</button>
                <button className="btn-sec">Category</button>
            </div>
            <div className="shop">
                <p>Also Available On</p>
                <div className="brand-icon">
                    <img src="./images/flipkart.png" alt="flipkart" />
                    <img src="./images/amazon.png" alt="amazon" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="./images/shoe_image.png" alt="" />
        </div>
    </main>
}

export default Hero
