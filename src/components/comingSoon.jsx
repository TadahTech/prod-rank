import React, {Component} from "react";
import twitterLogo from "../assets/twitter.svg";
import twitchLogo from "../assets/twitch.svg";

class ComingSoon extends Component {
    state = {
        twitchLink: "https://twitch.tv/mrfunhaver",
        twitterLink: "https://twitter.com/mrfunhaver"
    }

    classes = {
        header: "text-center align-middle justify-content-center",
        link: "text-center align-middle justify-content-center",
    }

    style = {
        comingSoon: {
            marginTop: '5%',
            color: '#950740',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            fontStyle: 'italic',
            fontSize: 100,
            paddingBottom: 25,
            fontFamily: 'Raleway, sans-serif'
        },
        header: {
            color: '#950740',
            fontFamily: 'Cormorant SC, serif',
            fontSize: 40,
        },
        probably: {
            padding: 20,
            color: '#7f8679'
        },
        image: {
            filter: 'invert(10%) sepia(100%) saturate(5968%) hue-rotate(330deg) brightness(63%) contrast(95%)',
            flex: 1,
            width: 100,
            height: 100,
            resizeMode: 'contain',
            paddingRight: 10,
            paddingLeft: 10,
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className={this.classes.header} style={this.style.comingSoon}>
                        COMING SOON
                    </h1>
                </div>
                <h1 style={this.style.header} className={this.classes.header}>
                    Are you a higher rank than PROD?
                </h1>
                <h2 style={this.style.probably} className={this.classes.header}>
                    Yeah, probably
                </h2>
                <div>
                    <h1 className={this.classes.header}>
                        <a className={this.classes.link} href={this.state.twitchLink} rel="noreferrer">
                            <img style={this.style.image} src={twitchLogo} alt="Follow my Twitch"/>
                        </a>
                        <a className={this.classes.link} href={this.state.twitterLink} rel="noreferrer">
                            <img style={this.style.image} src={twitterLogo} alt="Follow my Twitch"/>
                        </a>
                    </h1>
                </div>
            </div>
        )
    }
}

export default ComingSoon