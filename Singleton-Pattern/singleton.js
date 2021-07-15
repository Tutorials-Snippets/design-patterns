/*
    Singleton Design Pattern -> https://www.youtube.com/watch?v=JKNjfDCNPa4
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
    Date: 31 May 2021
*/
function Process(state) {
    this.state = state
}

const Singleton = (function() {
    let pManager

    function ProcessManager() {
       /*.... */
    }

    

    function createProcessManager() {
        pManager = new ProcessManager()
        return pManager
    }
    return {
        getProcessManager: () => {
            if(!pManager) 
                pManager = createProcessManager()
             return pManager
            
        }
    }
})()

const ProcessManager = Singleton.getProcessManager()
const ProcessManager2 = Singleton.getProcessManager()

console.log(ProcessManager === ProcessManager2) // true