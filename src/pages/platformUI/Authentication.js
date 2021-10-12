import React, {useState} from 'react'

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
                <div className="addCard">
                    <div>
                        <svg viewBox="0 0 131 100" alt="Zapling" width="84px"><g fill="none" fill-rule="evenodd"><path fill="#F1F4F5" fill-rule="nonzero" d="M0 99h131v1H0z"></path><path stroke="#969EA2" stroke-width="2" d="M40.406 72.76V100m53.18-27.23V100m10.533-61.079c13.19 0 23.881 10.706 23.881 23.912M6 15c.015 13.203 10.714 23.895 23.9 23.885"></path><rect width="78" height="78" x="28" rx="5.09"></rect><g transform="translate(28)"><rect width="78" height="78" fill="#FF4A00" fill-rule="nonzero" rx="4"></rect><path fill="#FFF" d="M45.031 38.266c0 2.014-.37 3.942-1.04 5.723a16.204 16.204 0 01-5.725 1.042h-.024c-2.015 0-3.943-.37-5.724-1.04a16.227 16.227 0 01-1.042-5.725v-.023c.002-2.016.37-3.944 1.04-5.724a16.217 16.217 0 015.726-1.044h.024c2.015.002 3.945.372 5.724 1.044a16.2 16.2 0 011.041 5.724v.023zm19.957-4.531H49.163l11.19-11.19a27.231 27.231 0 00-6.39-6.39l-11.19 11.19V11.519a27.3 27.3 0 00-4.505-.376h-.029c-1.534 0-3.04.13-4.503.376v15.826l-11.19-11.19a27.134 27.134 0 00-3.462 2.928l-.004.004a27.279 27.279 0 00-2.925 3.458l11.19 11.19H11.52s-.377 2.972-.377 4.51v.018c0 1.537.131 3.043.377 4.509h15.826l-11.19 11.19a27.265 27.265 0 006.39 6.39l11.19-11.19v15.826a27.31 27.31 0 004.498.377h.04a27.33 27.33 0 004.499-.377V49.163l11.19 11.19a27.315 27.315 0 003.46-2.927l.003-.003a27.367 27.367 0 002.926-3.46l-11.19-11.191h15.826c.245-1.463.376-2.966.377-4.499v-.039a27.33 27.33 0 00-.377-4.5z"></path></g></g></svg>
                    </div>
                    <div className="addCardText">
                        <h3 className="addCardTitle">Add Authentication</h3>
                        <p className="addCardPara">
                            Authentication lets users prove their identity to your app and authorize Zapier to access their data, using your API authentication scheme. Learn more.
                        </p>
                    </div>
                </div>
                <form>
                <div className="radioCard">
                    <input type="radio" value="radio1" checked={isRadioSelected('radio1')} onChange={handleRadioClick} />
                    <label className="radioLabel">API Key</label>
                    <p className="radioPara">
                        Use API Key authentication type if you simply need to collect some information from your users and then include that information, as it was entered by the user, when you make an API request. Learn more.
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio2" checked={isRadioSelected('radio2')} onChange={handleRadioClick} />
                        <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                        Use the OAuth 2 authentication type if your API supports OAuth 2 "Authorization Code" grant. When setting up a Zap, your user's browser will be redirected to your site where you can authenticate them. Your OAuth implementation will then return an access token that your Zapier integration will use to authorize requests to your API. If your API uses one of the other OAuth 2 grant types, Session auth or API Key authentication will be a better fit. Learn more.                    
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio3" checked={isRadioSelected('radio3')} onChange={handleRadioClick} />
                    <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                    Use the session authentication type if you need to collect some information from your users, for example a user name and password, and then make a request to your API to exchange that information for a token or session key, which you will use to authorize subsequent API requests. The Zapier platform will handle refreshing this token automatically each time it expires. Learn more.
                    </p>
                </div>
                <div className="radioCard">
                    <input type="radio" value="radio4" checked={isRadioSelected('radio4')} onChange={handleRadioClick} />
                    <label className="radioLabel">OAuth v2</label>
                    <p className="radioPara">
                    Use the basic authentication type if your API relies on the HTTP “Basic” Authentication standard. When your user sets up a new Zap, Zapier will prompt them for a username and password, then automatically add the appropriate encoded authorization headers to your API requests for you. Learn more.
                    </p>
                </div>
                </form>
            </div>
            <button className="saveBtn">Save</button>
        </div>
    )
}

export default Authentication
