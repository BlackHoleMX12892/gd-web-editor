import SideArt from "./assets/GJ_GameSheet03-uhd/GJ_sideArt_001.png";

const App = () => {
    return (
        <div id="container" className="bg-linear-to-b from-[rgb(42,100,243)] to-[rgb(16,45,113)] w-full h-full grid grid-rows-[100px,1fr,100px]">
            <div>
                <img src={SideArt} />
            </div>
        </div>
    );
};

export default App;