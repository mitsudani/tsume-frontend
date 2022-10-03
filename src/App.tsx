import { useState } from "react";
import "./index.scss";
import Layout from "./components/Layout";

function App(): JSX.Element {
    const [isReady, setIsReady] = useState(false);
    (document as any).fonts.load("16px Mukta");
    (document as any).fonts.load("16px Ms Madi");
    (document as any).fonts.ready.then(() => setIsReady(true));

    return isReady ? (
        <div className="App">
            <Layout />
        </div>
    ) : (
        <div>TODO LOADER COMPONENT</div>
    );
}

export default App;
