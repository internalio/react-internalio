import React from "react";
import "./App.css";
import Space from "./components/Space";
import logo from "./logo.svg";

let paramCounter = 0;

function App() {
  const [url, setUrl] = React.useState("");
  const [width, setWidth] = React.useState("100%");
  const [height, setHeight] = React.useState("100%");
  const [params, setParams] = React.useState<Record<string, string>>({});
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" src={logo} alt="internal.io logo" />
        <p className="App-sub-head">
          Embed internal.io spaces in your React app.
        </p>
        <div className="App-fields">
          <div>
            <input
              name="url"
              className="App-url-input"
              value={url}
              onChange={evt => setUrl(evt.target.value)}
              placeholder="https://secure.internal.io/spaces/…"
            />
          </div>
          <div className="App-dimension-fields App-small-fields App-small-fields-row">
            <label htmlFor="width">width</label>
            <input
              name="width"
              value={width}
              onChange={evt => setWidth(evt.target.value)}
            />
            <label>height</label>
            <input
              name="height"
              value={height}
              onChange={evt => setHeight(evt.target.value)}
            />
          </div>
          <div className="App-params-fields App-small-fields">
            <div className="App-params-fields-list">
              {Object.entries(params).map(([key, val]) => (
                <div className="App-param-field App-small-fields-row">
                  <label>key</label>
                  <input
                    name="key"
                    value={key}
                    onChange={evt => {
                      const newParams = { ...params };
                      delete newParams[key];
                      newParams[evt.target.value] = val;
                      setParams(newParams);
                    }}
                  />
                  <label>value</label>
                  <input
                    name="value"
                    value={val}
                    onChange={evt => {
                      const newParams = { ...params };
                      newParams[key] = evt.target.value;
                      setParams(newParams);
                    }}
                  />
                  <button
                    className="App-param-field-remove link-button"
                    onClick={() => {
                      const newParams = { ...params };
                      delete newParams[key];
                      setParams(newParams);
                    }}
                  >
                    remove
                  </button>
                </div>
              ))}
            </div>
            <button
              className="App-params-fields-add link-button"
              onClick={() => {
                const newParams = { ...params };
                const paramName = `param${++paramCounter}`;
                newParams[paramName] = "";
                setParams(newParams);
              }}
            >
              add param
            </button>
          </div>
        </div>
      </div>
      <div className="App-body">
        <div className="App-preview-container">
          {url ? (
            <Space url={url} width={width} height={height} params={params} />
          ) : (
            <p style={{ width, height }} className="App-preview-empty-state">
              Enter a url above to embed your space.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
