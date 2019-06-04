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
        for (let i = 0; i < 5; i++) {
            const user = {
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
                {this.state.users.map(users => <PostViewer post={users} />)}
            </div>

        )
    }
}
export default PostContainer;