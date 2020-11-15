import Icon from '../components/Icon.js';

function Footer() {
    return (
        <div className="footer">
            <div className="flex-row justify-content-center">
                <div className="column">
                    <h3>Contact Me</h3>

                    <div className="flex-row">
                        <a href="https://github.com/chanmj96"
                            rel="noreferrer noopener"
                            target="_blank">
                            <Icon
                                iconName="github"
                                fill="white"
                                height="2rem"
                                width="2rem" />
                        </a>
                        <a href="https://www.linkedin.com/in/matthew-chan-0a7b345a/"
                            rel="noreferrer noopener"
                            target="_blank">
                            <Icon
                                iconName="linkedin"
                                fill="white"
                                height="2rem"
                                width="2rem" />
                        </a>
                        <a href="mailto:chanmj96@gmail.com"
                            rel="noreferrer noopener"
                            target="_blank">
                            <Icon
                                iconName="gmail"
                                fill="white"
                                height="2rem"
                                width="2rem" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;