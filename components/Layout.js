import Header from './Header';

const Layout = (props) => (
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            body {
                background: #f3f3f3;
            }
            div {
                border: 1px solid #eeeeee;
                width: 25%;
                padding: 30px;
                height: auto;
                margin: auto;
                border-radius: 30px;
            }
        `}</style>
    </div>
);

export default Layout