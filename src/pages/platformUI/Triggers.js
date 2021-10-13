import React from 'react'
import Card from './Card'
import '../../style.css'

function Triggers() {
    return (
        <div id="trigger">
            <Card
                title="Add Your First Trigger"
                description="Triggers GET or read data from your API to start workflows. Add triggers for new and updated items in your app so users can use the data in other apps."
                link=""
            />
            <a href="" className="btn triggerBtn">Add Trigger</a>
        </div>
    )
}

export default Triggers
