import React from "react"
import { articlesURL } from "./utils/constant"

class NewPost extends React.Component {
    state = {
        title: '',
        description: '',
        body: '',
        tagList: '',
        errors: {
            title: '',
            description: '',
            body: '',
            tagList: ''
        }
    }

    handleChange = (event) => {
        let { name, value } = event.target
        let errors = { ...this.state.errors }
        this.setState({ [name]: value, errors })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { title, description, body, tagList } = this.state
        fetch(articlesURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Token ${this.props.user.token}`
            },
            body: JSON.stringify({
                article: {
                    title,
                    description,
                    body,
                    tagList: tagList.split(',').map((tag) => tag.trim())
                }
            })
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(({errors}) => {
                        return Promise.reject(errors)
                        })
                    // throw new Error('Can not create new article!')
                }
                return res.json()
            })
            .then(({ article }) => {
                console.log(article)
                this.setState({
                    title: "",
                    description: '',
                    tagList: '',
                    body: ''
                })
                this.props.history.push('/')
            })
            .catch((errors) => this.setState({ errors }))

    }

    render() {
        let {
            title,
            description,
            body,
            tagList,
            errors,
        } = this.state;

        return (
            <div class="editor-page">
                <div class="container page">
                    <div class="row">
                        <div class="col-md-10 offset-md-1 col-xs-12">
                            <form className="text-center">

                            <span className="error">{errors.title}</span>
                                <input
                                    class="form-control "
                                    type="text"
                                    placeholder="Article Title"
                                    name="title"
                                    onChange={this.handleChange}
                                    value={title} />
                               
                               <span className="error">{errors.description}</span>
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="What's this article about?"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={description} />

                                <span className="error">{errors.body}</span>
                                <textarea class="form-control"
                                    rows="8"
                                    placeholder="Write your article (in markdown)"
                                    name="body"
                                    onChange={this.handleChange}
                                    value={body}
                                >
                                </textarea>

                                <span className="error">{errors.tagList}</span>
                                <input class="form-control"
                                    type="text"
                                    placeholder="Enter tags"
                                    name="tagList"
                                    value={tagList}
                                    onChange={this.handleChange}
                                />

                                <input class="btn btn-lg btn-primary"
                                    type="submit"
                                    name="tags"
                                    value='Publish Article'
                                    onClick={this.handleSubmit}
                                />


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewPost