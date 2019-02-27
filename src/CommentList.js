import React, { Component } from 'react';
import Comment from './Comment';


class CommentList extends Component{
    static defaultProps = {
        comments : []
    }

    render() {

        return(
            <div>
                {this.props.comments.map((comment,i) => {
                    return (
                        <div>
                            <Comment comment={comment} key={i}/>
                        </div>
                    )}
                 )}

            </div>
        )
    }

}

export default CommentList