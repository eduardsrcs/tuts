function tick() {
  const element = (
    <div>
      <p>Here is a <a href="https://reactjs.org/docs/rendering-elements.html#updating-the-rendered-element">lesson</a>. It is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('tick'));
}

setInterval(tick, 1000);

// Components and Props

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// Is the same... almost

class Welcome extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

function WelcApp() {
  return (
    <div>
      <Welcome name="Varius" />
      <Welcome name="Edite" />
    </div>
  );
}

const welcElement = <WelcApp name="Varius" />

// ReactDOM.render(welcElement, document.getElementById('welc'));
ReactDOM.render(<WelcApp />, document.getElementById('welc'));

// https://reactjs.org/docs/state-and-lifecycle.html

class Clock extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {date: new Date()};
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  normalize(a) {
    return a < 10 ? '0' + a : a
  }

  tick() {
    const t = new Date()
    const h = this.normalize(t.getHours())
    const m = this.normalize(t.getMinutes())
    const s = this.normalize(t.getSeconds())
    this.setState({
      hours: h,
      minutes: m,
      seconds: s
    });
  }

  render() {
    return (
      <span>
        <span>It is {this.state.hours}:{this.state.minutes}:{this.state.seconds}.</span>
      </span>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);

