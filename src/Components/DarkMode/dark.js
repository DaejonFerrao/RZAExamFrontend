import "./dark.css";

const dark = () => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
        </label>
    );
};

export default dark;