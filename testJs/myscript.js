function convertCtoF(n)
{
 return n*1.8+32;
}
function max2(arr)
{
    var max=arr[0];
    var max2=arr[0];
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }    
    }
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i]<max && arr[i]>max2) 
        {
            max2=arr[i];
        } 
    }
    return max2;  
    
}
function lengthmax(arr)
{
    var max=0;
    var newarry=[];
    for (let i = 0; i < arr.length; i++) 
    {
        if(arr[i].length>max)
        {
            max=arr[i].length;
            newarry=arr[i];
        } 
    }
    return newarry;
}

function Check(arr)
{
    var check=0;
    for (let i = 0; i <arr.length; i++) 
    {
        for (let j = i+1; j < arr.length; j++)
        {
            if(arr[i]===arr[j])
            {
                check++;
            }   
        }
    }
    if(check>0)
    {
        return true;
    }
    else
        return false;
}
function checkTarget(str,target)
{
    var check=str.endsWith(target);
    return check;
}

