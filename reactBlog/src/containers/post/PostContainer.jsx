import React, { Component } from 'react'
import Faker from 'faker'
import PostViewer from '../../components/common/PostView';

class PostContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentWillMount() {
        for (let i = 0; i < 20; i++) {
            const user = {
                id: i,
                key: Faker.random.uuid(),
                name: Faker.internet.userName(),
                email: Faker.internet.email(),
                avatar: Faker.internet.avatar(),
            }
            this.setState(prevState => ({
                users: [...prevState.users, user],
            }))
        }
    }


    render() {
        return (
            <div>
                <PostViewer post={this.state.users}/>
            </div>

        )
    }
}
export default PostContainer;