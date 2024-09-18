/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
AbortSignal.timeout ??= async function timeout(ms) {
    const ctrl = new AbortController()
    setTimeout(() => ctrl.abort(), ms)
    return ctrl.signal
}

let fetchCapstone = async (s = '') => {
    console.log('b')
    try{
        let c = await fetch(s, {
            signal:AbortSignal.timeout(2000)
        })
        if(c.ok) return 1
        else return 0
    }catch(e){
        console.log(e)
        return -1
    }


}
