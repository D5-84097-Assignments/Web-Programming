function add()
{
    var n1Ref = document.getElementById("num1");
    var n1 = n1Ref.value;
    var n1ErrorRef = document.getElementById("num1ErrorMessage");

    var n2Ref = document.getElementById("num2");
    var n2 = n2Ref.value;
    var n2ErrorRef = document.getElementById("num2ErrorMessage");

    var resRef = document.getElementById("result");
    
    isEmpty(n1,n1ErrorRef)
    isEmpty(n2,n2ErrorRef)

    if(isEmpty(n1,n1ErrorRef) == false && isEmpty(n2,n2ErrorRef) == false)
    {
        var re = parseInt(n1) + parseInt(n2);
        resRef.innerText = re;
    }
}

function sub()
{
    var n1Ref = document.getElementById("num1");
    var n1 = n1Ref.value;
    var n1ErrorRef = document.getElementById("num1ErrorMessage");

    var n2Ref = document.getElementById("num2");
    var n2 = n2Ref.value;
    var n2ErrorRef = document.getElementById("num2ErrorMessage");

    var resRef = document.getElementById("result");
    
    isEmpty(n1,n1ErrorRef)
    isEmpty(n2,n2ErrorRef)

    if(isEmpty(n1,n1ErrorRef) == false && isEmpty(n2,n2ErrorRef) == false)
    {
        var re = parseInt(n1) - parseInt(n2);
        resRef.innerText = re;
    }
}

function multi()
{
    var n1Ref = document.getElementById("num1");
    var n1 = n1Ref.value;
    var n1ErrorRef = document.getElementById("num1ErrorMessage");

    var n2Ref = document.getElementById("num2");
    var n2 = n2Ref.value;
    var n2ErrorRef = document.getElementById("num2ErrorMessage");

    var resRef = document.getElementById("result");
    
    isEmpty(n1,n1ErrorRef)
    isEmpty(n2,n2ErrorRef)

    if(isEmpty(n1,n1ErrorRef) == false && isEmpty(n2,n2ErrorRef) == false)
    {
        var re = parseInt(n1) * parseInt(n2);
        resRef.innerText = re;
    }
}

function divi()
{
    var n1Ref = document.getElementById("num1");
    var n1 = n1Ref.value;
    var n1ErrorRef = document.getElementById("num1ErrorMessage");

    var n2Ref = document.getElementById("num2");
    var n2 = n2Ref.value;
    var n2ErrorRef = document.getElementById("num2ErrorMessage");

    var resRef = document.getElementById("result");
    
    isEmpty(n1,n1ErrorRef)
    isEmpty(n2,n2ErrorRef)

    if(isEmpty(n1,n1ErrorRef) == false && isEmpty(n2,n2ErrorRef) == false)
    {
        var re = parseInt(n1) / parseInt(n2);
        resRef.innerText = re;
    }
}