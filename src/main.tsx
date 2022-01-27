import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import Router from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";

interface AppState {
  hasError: boolean;
}

interface AppProps {
  nothing?: boolean;
}

class AppContainer extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-main">
          <p>Just Error!</p>
          <button className="error-button" onClick={() => console.log("This is error")} type="button">
            Show error in console
          </button>
        </div>
      );
    }
    return (
      <>
        <StrictMode>
          <Provider store={store}>
            <Router />
          </Provider>
        </StrictMode>
      </>
    );
  }
}

ReactDom.render(<AppContainer />, document.getElementById("app"));
