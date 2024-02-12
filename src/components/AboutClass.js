import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

class AboutClass extends React.Component {
    constructor(props) {
        console.log('Parent constructor');
        super(props);
        this.state = {
            name: 'React',
            count: 0,
            userInfo: {}
        }
    }
    async componentDidMount() {
        const githubData = await fetch('https://api.github.com/users/celestioushawk');
        const data = await githubData.json();
        this.setState({
            userInfo: data
        })
        console.log(data);
    }
    render() {
        return (
            <div>
                <img src={this.state.userInfo.avatar_url} alt="" className='w-20 h-20 rounded-full' />
                <h1>{this.state.userInfo.name}</h1>
                <p>{this.state.userInfo.location}</p>
                <small>{this.state.userInfo.login}</small>
                <p>Count: {this.state.count}</p>
                <button onClick={
                    () => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }
                } >Update</button>
                <ChildOne />
                <ChildTwo />
            </div>
        )
    }
}
export default AboutClass;
