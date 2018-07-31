button.addEventListener('click', ()=>{
    let script = document.createElement('script')
    let functionName = 'frank' + parseInt(Math.random()*10000, 10)
    window[functionName] = function(result){
        if(result==='success'){
            amount.innerText -= 1
            alert("打钱成功")
        }else{
            
        }
    }
    script.src = '/pay?callback='+functionName
    document.body.appendChild(script)
    script.onload = function(e){
        e.currentTarget.remove()
        delete window[functionName]
    }
})