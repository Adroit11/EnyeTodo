import Head from 'next/head';
import Layout from '../components/Layout';
import Todo from '../components/Todo';
import TodoInput from '../components/TodoInput';

class Index extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: [
                
            ]
        }
    }

    // Delete Todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
    }

    // AddTodo
    addTodo = (myTodo) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            myTodo,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render () {
        return (
            <Layout>
                <Head>
                    <title>Enye Challenge Todo App</title>
                </Head>
                <section>
                    <TodoInput addTodo={this.addTodo} />
                    <Todo 
                        todos={this.state.todos}  
                        delTodo={this.delTodo} 
                    />
                </section>
            </Layout>
        );
    }
}

export default Index;