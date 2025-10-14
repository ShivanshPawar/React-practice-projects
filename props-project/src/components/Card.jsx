import { Bookmark, BookmarkCheck } from "lucide-react"

const Card = (props) => {

    return (
        <div>
            
            <div className="card">

                <div className="top">
                    <div className="logo"><img src={props.logo} alt="" /></div>
                    <button>{props.isSaved ? "Saved" : "Save"} {props.isSaved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />}</button>
                </div>

                <div className="center">
                    <h3>{props.company} <span>{props.posted}</span></h3>
                    <h2>{props.role}</h2>
                    <div>
                        <h4>{props.type}</h4>
                        <h4>{props.level}</h4>
                    </div>
                </div>

                <div className="bottom">
                    <div>
                        <h3>{props.salary}</h3>
                        <p>{props.location}</p>
                    </div>
                    <button>Apply Now</button>
                </div>

            </div>
        </div>
    )
}

export default Card