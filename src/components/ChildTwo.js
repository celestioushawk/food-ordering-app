import React from 'react';

class ChildTwo extends React.Component {
    constructor(props) {
        console.log('ChildTwo constructor');
        super(props);
        this.state = {
            name: 'React',
            count: 0
        }
    }
    componentDidMount() {
        console.log('ChildTwo componentDidMount');
    }
    render() {
        return (
            <div>
                {console.log('ChildTwo render')}
                <h1>About</h1>
                <p>This is the about {this.state.name}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                } >Update</button>
            </div>
        )
    }
}
export default ChildTwo;
