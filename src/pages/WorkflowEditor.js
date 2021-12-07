import React, { useState } from 'react'
import { Switch } from 'antd';
import CreateAction from '../components/CreateAction'
import Gmail from '../components/WorkflowEditorApps/Gmail';

function WorkflowEditor() {
   const [toggleInputField, setToggleInputField] = useState(false)
   const [data, setData] = useState('Name your workflow')
   const [inputVal, setInputVal] = useState(data)
   const [showActionPopup, setShowActionPopup] = useState(false)

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
                        <svg height="24" viewBox="0 0 512 512" width="24"><path d="M318 256c0 19-4 36-10 52-16 7-34 10-52 10-19 0-36-3-52-9-7-17-10-34-10-53 0-18 3-36 10-52 16-6 33-10 52-10 18 0 36 4 52 10 6 16 10 34 10 52zm182-41H355l102-102c-8-11-17-22-26-32-10-9-21-18-32-26L297 157V12c-13-2-27-3-41-3s-28 1-41 3v145L113 55c-12 8-22 17-32 26-10 10-19 21-27 32l102 102H12s-3 27-3 41 1 28 3 41h144L54 399c16 23 36 43 59 59l102-102v144c13 2 27 3 41 3s28-1 41-3V356l102 102c11-8 22-17 32-27 9-10 18-20 26-32L355 297h145c2-13 3-27 3-41s-1-28-3-41z" fill="#ff4a00"></path></svg>
                     </a>
                  </div>
                  <div className="nameWorkflowField">
                     <span>
                        <span className="editIconWrapper">
                           <svg aria-labelledby="edit-icon-1634539957205.949" height="20" viewBox="0 0 24 24" width="20"><title id="edit-icon-1634539957205.949"></title><path fill="#999999" d="M20.71 5.63006C21.1 6.02006 21.1 6.65006 20.71 7.04006L18.88 8.87006L15.13 5.12006L16.96 3.29006C17.35 2.90006 17.98 2.90006 18.37 3.29006L20.71 5.63006ZM3 21.0001V17.2501L14.06 6.19006L17.81 9.94006L6.75 21.0001H3Z"></path></svg>
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
         <div className="mainContainer">
            <div className="mainContent">
               <Gmail />
               <div className="topLine"></div>
               {
                  showActionPopup ?
                     <CreateAction setShowActionPopup={setShowActionPopup} /> :
                     <div>
                        <div style={{ position: 'relative' }}>
                           <div style={{ height: '26px' }}>
                              <div className="plusBtn" onClick={() => setShowActionPopup(true)}>
                                 <svg style={{ display: 'block' }} width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#136bf5"></path></svg>
                              </div>
                           </div>
                        </div>
                     </div>
               }
               <div className="bottomLine"></div>
               <div className="arrowHead">▼</div>
            </div>
         </div>
      </div>
   )
}

export default WorkflowEditor
