import './App.css'
import data from './data/shoes.json'

function App() {
    console.log(data)
    return (
        <div className="App">
            <div className="container">
                <div className="content">
                    <div className="product">
                        <div className="product-content">
                            <img src="./img/nike.png" alt="..." />
                            <p>Our Product</p>
                            <div className="list-item">
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />
                                    </div>
                                    <p>Nike Air</p>
                                    <span>
                                        The Nike Air Zoom Pegasus 36 Shield gets updated to conquer
                                        wet routes. A water-repellent upper combines with an outsole
                                        that helps create grip on wet surfaces, letting you run in
                                        confidence despite the weather.
                                    </span>
                                </div>
                                <div className="item">
                                    <div className="item-image">
                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />
                                    </div>
                                    <p>Nike Air</p>
                                    <span>
                                        The Nike Air Zoom Pegasus 36 Shield gets updated to conquer
                                        wet routes. A water-repellent upper combines with an outsole
                                        that helps create grip on wet surfaces, letting you run in
                                        confidence despite the weather.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="deco"></div>
                    </div>
                    <div className="cart">
                        <div className="deco"></div>
                    </div>
                </div>
                <div className="curve"> </div>
            </div>
        </div>
    )
}

export default App
