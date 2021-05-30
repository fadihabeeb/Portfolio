import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className= "portfolio" id="portfolio">
                <h1>Portfolio </h1>
                <ul>
                    <li>Semantic Similarity</li>
                    <li>Image Recognition App</li>
                    <li>OBL</li>
       
                </ul>

                <div className="container">
                <div className = "item">
                    <img src="https://picsum.photos/200/300" alt="" />
                    <h3>Task Management App</h3>
                </div>

                </div>
                
        </div>
    )
}
