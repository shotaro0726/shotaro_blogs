import React, { Componet } from 'react';
import Axios from 'axios';

class Blog extends Componet {

    componentDidMount() {
        Axios.get('http://localhost:8000/blog/' + this.props.match.params.id)
            .then(data => {
                this.setState({
                blogData: data.data
            })
        })
    }

    render() {
        return (
            <div className="blog">
                <div className="blogTitle">
                    投稿
                </div>
                {this.state.blogData ? (
                    <>
                    <p id="pb">{this.state.blogData.title}</p>
                    <hr className="H" width="59%" />
                    <div className="data">
                        {this.state.blogData.content}
                        </div>
                    </>
                ) : (<p>よみこみちゅー</p>)}
            </div>
        );
    }
}

export default Blog;