import React, {Component} from "react";

import twitterLogo from "../assets/twitter.svg";
import twitchLogo from "../assets/twitch.svg";

const axios = require('axios').default;
const reactStringReplace = require('react-string-replace');

const prodId = process.env.PROD_ID
const riotApiURL = process.env.API_URL

class ProdRank extends Component {
    state = {
        riotId: '',
        prodRank: {
            tier: 'Plat 3',
            rr: 50,
        }
    }
    style = {
        top: {
            marginTop: '5%',
        },
        riotId: {
            color: '#7f8679',
        },
        riotIdInput: {
            width: 200,
            display: 'inline-block'
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
            width: 50,
            height: 50,
            resizeMode: 'contain',
            paddingRight: 10,
            paddingLeft: 10,
            marginTop: 15,
        }
    }
    classes = {
        center: "text-center align-middle justify-content-center",
    }

    render() {
        return (
            <div style={this.style.top} className={this.classes.center}>
                <h1 style={this.style.header}>
                    Are you a higher rank than PROD?
                </h1>
                <h2 style={this.style.probably}>
                    Yeah, probably, but just in case, enter your Riot Tag below
                </h2>
                <div className='form-group' style={this.style.riotId}>
                    <div>
                        <p/>
                        <input style={this.style.riotIdInput} value={this.state.riotId}
                               className='form-control text-center align-middle justify-content-center'
                               id="riotTagInput" aria-describedby="riotHelp" placeholder="Example#1234"
                               onInputCapture={evt => this.getRank()}/>
                        <p/>
                        <small id="riotHelp" className="form-text text-muted">Your Riot ID (name#tag).</small>
                    </div>
                </div>
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

    getProdRank() {
        let local = this
        let getURL = riotApiURL + prodId
        axios.get(getURL)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("failed to get prods rank")
                    return ''
                }
                let rank = response.data.rank_tier
                let rr = response.data.rank_rating
                if (rank !== '') {
                    local.state.prodRank.tier = rank
                }
                if (rr > -1) {
                    local.state.prodRank.rr = rr
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    getRank() {
        let local = this
        let getURL = riotApiURL + prodId
        axios.get(getURL)
            .then(function (response) {
                if (response.status !== 200) {
                    console.log("failed to get prods rank")
                    return ''
                }
                let rank = response.data.rank_tier
                let rr = response.data.rank_rating
                if (rank !== '') {
                    local.state.prodRank.tier = rank
                }
                if (rr > -1) {
                    local.state.prodRank.rr = rr
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }
}

export default ProdRank