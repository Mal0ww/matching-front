import "./Styles/SlideButton.modules.css"

const SlideButton = ({evento, nome}) => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
        </label>
    );
}

export default SlideButton;
