class MyDiv extends React.Component {
    constructor(props) {
        super(props);
        this.enable = props.enable;
    }

    render() {
        if (this.enable) {
            return <div>Welcome</div>;
        } else {
            return <div>Sorry</div>
        }
    }
}

ReactDOM.render(
    <MyDiv enable={true} />,
    document.getElementById('root')
);