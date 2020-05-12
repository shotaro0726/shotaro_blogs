import React, { Componet } from 'react';
import axios from 'axios';

class List extends Componet {

    blogHandler = (item) => {
        this.props.history.push({
            pathname: '/blog/' + item.id
        });
    }

    componetDidMount() {
        axios.get('http://localhost:8000/blog')
            .then(data => {
                console.log(data.data);
                this.setState({
                    loader: false,
                    listData: data.data
                })
        })
    }

    render() {
        const list = this.state.listData ? this.state.listData.map((item, index) => {
            return (
                <div className="list" onClick={() => this.blogHandler(item)} key={item.id}>
                    <p>{item.title}</p>
                    <p>></p>
                </div>
            )
        }) : (
                <p>よみこみちゅー</p>
            );
        return (
            <div className="listCon">
                <div className="heading">Shotaro Ooki</div>
                {list}
            </div>
        );
    }
}

export default List;