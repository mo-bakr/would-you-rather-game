import React from "react"
import { Component } from "react"
import { Link } from "react-router-dom"

class notfound extends Component {
    render() {
        return (
            <div>
                <p className="oops">OOPS, looks like there is nothing to see here.</p>
                <p className="oops">Please go back to <Link className="oops" to="/" exact> Homepage</Link></p>
                <p className="oops">Or look at this cat instead :3</p>
                <img className="cat404" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg" alt="cat404"></img>
            </div>
        )
    }
}

export default notfound