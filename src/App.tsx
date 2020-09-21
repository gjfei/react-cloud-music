import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { changeAppName } from './store/reducer/app/actionCreators';
function App(props:any) {
  const {appName,changeAppNameStateDispatch} = props;
  return (
    <div className="App">
      <header className="App-header">
        {appName}
        <img src={logo} className="App-logo" alt="logo"/>
        <button onClick={changeAppNameStateDispatch}>修改名字</button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state:any) => ({
  appName: state.appReducer.appName,
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch:any) => {
  return {
    changeAppNameStateDispatch() {
      dispatch(changeAppName('lalal'));
    }
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
