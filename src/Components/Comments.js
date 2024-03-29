import React, {Component} from "react";

export class Comments extends Component{
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let comment = event.target.elements.comment.value;
        this.props.startAddingComment(comment, this.props.id);
    }

    render(){
        return (
            <div className="comment">
                {
                    this.props.comments.map((comment, index) => {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="comment" name="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
}