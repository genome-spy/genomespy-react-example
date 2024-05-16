import "./App.css";
import GenomeSpy from "@genome-spy/react-component";

/**
 * @type {import("@genome-spy/core/spec/root.js").RootSpec}
 */
const spec = {
  data: {
    name: "dynamicData",
  },
  hconcat: [
    {
      height: 250,
      width: 500,
      mark: "rect",
      encoding: {
        x: {
          field: "id",
          type: "nominal",
          scale: {
            padding: 0.1,
          },
        },
        y: {
          field: "y",
          type: "quantitative",
          scale: { domain: [0, 1] },
        },
      },
    },
  ],
};

const data = [
  { id: 1, x: 1, y: 0.2 },
  { id: 2, x: 2, y: 0.5 },
  { id: 3, x: 3, y: 1 },
];

/** @type {(api: import("@genome-spy/core/types/embedApi.js").EmbedResult) => void} */
const updateData = (api) => {
  api.updateNamedData("dynamicData", data);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using GenomeSpy in a React App</h1>
      </header>
      <GenomeSpy spec={spec} onEmbed={updateData} />
    </div>
  );
}

export default App;
