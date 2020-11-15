import Icons from '../images/icons.json'

function Icon(props) {

    const { fill, height = "1.5rem", iconName, width = "1.5rem", wrapperClass = "icon-wrapper", ...otherProps } = props;

    return (
        <div className={wrapperClass}>
            <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24" {...otherProps}>
                <path fill={fill} d={Icons.find((icon) => icon.name == iconName)["path-d"]} />
            </svg>
        </div>
    );
}

export default Icon;