class TodoInput extends React.Component {
    state = {
        myTodo: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]:  e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.myTodo === '' || this.state.myTodo.trim() === '') {
            document.getElementById('myTodo').focus();
        } else {
            this.props.addTodo(this.state.myTodo);
            this.setState({ myTodo: '' });
        }

    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    id="myTodo"
                    type="text"
                    name="myTodo"
                    placeholder="Add Todo..."
                    value={this.state.myTodo}
                    onChange={this.onChange}
                    autoFocus
                />
                <input 
                    type="submit" 
                    value="Add"
                    className="btn"
                />
                <br/>
                <style jsx>{`
                    input {
                        padding: 10px;
                        margin: auto;
                        border-radius: 5px;
                    }
                    .btn {
                        display: inline-block;
                    }
                `}</style>
            </form>
        );
    }
}

export default TodoInput;