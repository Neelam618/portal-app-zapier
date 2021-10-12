import React from 'react'

function Card(props) {
    return (
        <div className="addCard">
            <div>
                <svg viewBox="0 0 131 100" alt="Zapling" width="84px"><g fill="none" fill-rule="evenodd"><path fill="#F1F4F5" fill-rule="nonzero" d="M0 99h131v1H0z"></path><path stroke="#969EA2" stroke-width="2" d="M40.406 72.76V100m53.18-27.23V100m10.533-61.079c13.19 0 23.881 10.706 23.881 23.912M6 15c.015 13.203 10.714 23.895 23.9 23.885"></path><rect width="78" height="78" x="28" rx="5.09"></rect><g transform="translate(28)"><rect width="78" height="78" fill="#FF4A00" fill-rule="nonzero" rx="4"></rect><path fill="#FFF" d="M45.031 38.266c0 2.014-.37 3.942-1.04 5.723a16.204 16.204 0 01-5.725 1.042h-.024c-2.015 0-3.943-.37-5.724-1.04a16.227 16.227 0 01-1.042-5.725v-.023c.002-2.016.37-3.944 1.04-5.724a16.217 16.217 0 015.726-1.044h.024c2.015.002 3.945.372 5.724 1.044a16.2 16.2 0 011.041 5.724v.023zm19.957-4.531H49.163l11.19-11.19a27.231 27.231 0 00-6.39-6.39l-11.19 11.19V11.519a27.3 27.3 0 00-4.505-.376h-.029c-1.534 0-3.04.13-4.503.376v15.826l-11.19-11.19a27.134 27.134 0 00-3.462 2.928l-.004.004a27.279 27.279 0 00-2.925 3.458l11.19 11.19H11.52s-.377 2.972-.377 4.51v.018c0 1.537.131 3.043.377 4.509h15.826l-11.19 11.19a27.265 27.265 0 006.39 6.39l11.19-11.19v15.826a27.31 27.31 0 004.498.377h.04a27.33 27.33 0 004.499-.377V49.163l11.19 11.19a27.315 27.315 0 003.46-2.927l.003-.003a27.367 27.367 0 002.926-3.46l-11.19-11.191h15.826c.245-1.463.376-2.966.377-4.499v-.039a27.33 27.33 0 00-.377-4.5z"></path></g></g></svg>
            </div>
            <div className="addCardText">
                <h3 className="addCardTitle">{props.title}</h3>
                <p className="addCardPara">
                    {props.description} <a href={props.link}>Learn more</a>.
                </p>
            </div>
        </div>
    )
}

export default Card
