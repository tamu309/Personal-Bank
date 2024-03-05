document.getElementById('DepositBtn').addEventListener('click',function(){
    let depositField=document.getElementById('depositField')
    let depositValue=parseInt(depositField.value);
    
    let totaldepositid=document.getElementById('totaldepositid')
    let totaldepositidtext=totaldepositid.innerText
    let totaldepositidinteger=parseInt(totaldepositidtext)
    totaldepositid.innerText=depositValue+totaldepositidinteger
})

document.getElementById('DepositBtn').addEventListener('click',function(){
    let depositField=document.getElementById('depositField')
    let depositValue=parseInt(depositField.value);
    
    let Totalbalanceid=document.getElementById('Totalbalanceid')
    let TotalbalanceidText=Totalbalanceid.innerText
    let Totalbalanceidinteger=parseInt(TotalbalanceidText)
    Totalbalanceid.innerText=depositValue+Totalbalanceidinteger
})

// Withdraw button:

document.getElementById('withdrawBtn').addEventListener('click',function(){
    let withdrawinputfield=document.getElementById('withdrawinputfield')
    let withdrawValue=parseInt(withdrawinputfield.value);
    
    let Totalwithdrawid=document.getElementById('Totalwithdrawid')
    let TotalwithdrawidText=Totalwithdrawid.innerText
    let Totalwithdrawidinteger=parseInt(TotalwithdrawidText)
    Totalwithdrawid.innerText=withdrawValue-Totalwithdrawidinteger
})



document.getElementById('withdrawBtn').addEventListener('click',function(){
    let withdrawinputfield=document.getElementById('withdrawinputfield')
    let withdrawValue=parseInt(withdrawinputfield.value);
    
    let Totalbalanceid=document.getElementById('Totalbalanceid')
    let TotalbalanceidText=Totalbalanceid.innerText
    let Totalbalanceidinteger=parseInt(TotalbalanceidText)
    Totalbalanceid.innerText=Totalbalanceidinteger-withdrawValue
})