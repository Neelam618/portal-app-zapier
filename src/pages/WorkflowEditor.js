import React, { useState } from 'react'
import { Switch } from 'antd';

function WorkflowEditor() {
   const [toggleInputField, setToggleInputField] = useState(false)
   const [data, setData] = useState('Name your workflow')
   const [inputVal, setInputVal] = useState(data)
   const [isVisible, setIsVisible] = useState(false)
   const [isCollapsed, setIsCollapsed] = useState(false)

   function showInputField() {
      setToggleInputField(true)
   }

   function getInputData(val) {
      setData(val.target.value)
      console.log(data)
   }
   function showWorkflowName(workflowName) {
      setInputVal(workflowName)
      setToggleInputField(false)
   }

   const handleFocus = (event) => event.target.select();         //for selecting input value by default

   function showAccordion() {
      setIsVisible(true)
   }
   function showListContent() {

   }

   return (
      <div id="editor">
         <div className="header">
            <div className="heading">
               <div className="leftHeading">
                  <div>
                     <a href="" className="backToWorkflowLink">
                        <span>
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z" fill="#666666"></path></svg>
                        </span>
                        <svg height="24" viewBox="0 0 512 512" width="24" class="css-1sbyvf0"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z" fill="#ff4a00"></path></svg>
                     </a>
                  </div>
                  <div className="nameWorkflowField">
                     <span>
                        <span className="editIconWrapper">
                           <svg aria-labelledby="edit-icon-1634539957205.949" class="edit-icon-animated css-voy20m" height="20" viewBox="0 0 24 24" width="20"><title id="edit-icon-1634539957205.949"></title><path fill="#999999" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"></path></svg>
                        </span>
                        {
                           toggleInputField ? <input className="inputBox" type="text" value={data} onBlur={() => showWorkflowName(data)} onChange={getInputData} autoFocus onFocus={handleFocus} />
                              : <span className="workflowName" onClick={showInputField} >{inputVal}</span>
                        }
                     </span>
                  </div>
               </div>
               <div>
                  <Switch checkedChildren="ON" unCheckedChildren="OFF" />
               </div>
            </div>
         </div>
         <div className="main">
            <div className="listItem" onClick={showAccordion}>
               <div className="listItemheader">
                  <div className="listContent">
                     <div className="iconSet">
                        <div className="appIcon">
                           <img className="appIconImg" src="https://zapier-images.imgix.net/storage/services/54f0bd6f9c31b757ab20d4c7058dc7c0.128x128.png?auto=format%2Ccompress&ixlib=python-3.0.0&q=50" alt="" />
                        </div>
                        <div className="statusIcon">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V15H13V17H11ZM11 7V13H13V7H11Z" fill="#666666"></path></svg>
                        </div>
                     </div>
                     <div className="listHeading">
                        <span className="listSubHeading">Trigger</span>
                        <div className="title">
                           1
                           .
                           Trigger title
                        </div>
                     </div>
                  </div>
                  <div>
                     <button className="editBtn">Edit</button>
                  </div>
               </div>
               {
                  isVisible ?
                     <div className="subListItemExtended">
                        <div className="subListItem">
                           <div className="subListItemTitle" onClick={showListContent}>
                              <span className="arrow">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>                           
                              </span>
                              Choose app & event
                           </div>
                           <div>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                           </div>
                        </div>
                        <div className="subListItem">
                           <div className="subListItemTitle" onClick={showListContent}>
                              <span className="arrow">
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 8.59009L12 13.1701L16.59 8.59009L18 10.0001L12 16.0001L6 10.0001L7.41 8.59009Z" fill="#666666"></path></svg>                           
                              </span>
                              Choose app & event
                           </div>
                           <div>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM5 12L10 17L19 8L17.59 6.58L10 14.17L6.41 10.59L5 12Z" fill="#666666"></path></svg>
                           </div>
                        </div>
                     </div> : null
               }

            </div>
         </div>
      </div>
   )
}

export default WorkflowEditor
