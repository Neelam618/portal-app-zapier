import React, { useState } from 'react'
import Card from './Card'

function Authentication() {

    const [selectedRadioBtn, setSelectedRadioBtn] = useState('radio2')

    function isRadioSelected(value) {
        return selectedRadioBtn === value
    }

    function handleRadioClick(e) {
        return (
            setSelectedRadioBtn(e.target.value)
        )
    }

    return (
        <div id="auth">
            <h3 className="title">Authentication</h3>
            <div className="cards">
                <Card title="Add Authentication"
                    description="Authentication lets users prove their identity to your app and authorize Zapier to access their data, using your API authentication scheme."
                    link=""
                />
                <div className="radioCard">
                    <input type="radio" value="radio1" checked={isRadioSelected('radio1')} onChange={handleRadioClick} />
                    <label className="radioLabel">API Key</label>
                    <p className="radioPara">
                        Use API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. <a href="">Learn more</a>.
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio2" checked={isRadioSelected('radio2')} onChange={handleRadioClick} />
                    <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                        Use the OAuth 2 authentication type if your API supports OAuth 2 "Authorization Code" grant. When setting up a Zap, your user's browser will be redirected to your site where you can authenticate them. Your OAuth implementation will then return an access token that your Zapier integration will use to authorize requests to your API. If your API uses one of the other OAuth 2 grant types, Session auth or API Key authentication will be a better fit. <a href="">Learn more</a>.
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio3" checked={isRadioSelected('radio3')} onChange={handleRadioClick} />
                    <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                        Use the session authentication type if you need to collect some information from your users, for example a user name and password, and then make a request to your API to exchange that information for a token or session key, which you will use to authorize subsequent API requests. The Zapier platform will handle refreshing this token automatically each time it expires. <a href="">Learn more</a>.
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio4" checked={isRadioSelected('radio4')} onChange={handleRadioClick} />
                    <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                        Use the basic authentication type if your API relies on the HTTP “Basic” Authentication standard. When your user sets up a new Zap, Zapier will prompt them for a username and password, then automatically add the appropriate encoded authorization headers to your API requests for you. <a href="">Learn more</a>.
                    </p>
                </div>
            </div>
            <button className="saveBtn">Save</button>
        </div>
    )
}

export default Authentication
