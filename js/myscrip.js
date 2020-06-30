function pow(x,y)
{
    return Math.pow(x,y)
}
//mũ y của x
function theky(n)
{ 
    var a;
    // a=(n+99)/100;
    if (n%100==0)
    {
        a=n/100;
    }
    else
    {
        a=n/100+1;
    }
    return Math.floor(a)
    
}
//gia thua de quy
function Giaithua(n)
{
    if (n<2)
        return 1;
    else
        return n* Giaithua(n-1)
}
// tinh the ky
function XlChuoi(text)
{
    var text = ""
}
function reversestring(str)
{
    return str.split(" ").reverses().join(" ");
}
function tthc(r)
{
    var v=4/3*Math.PI*Math.pow(r,3)
    return Math.ceil(v);
}
function Tong(x,y)
{
    var s=0
    if (x<y)
    {
        for (let i = x+1; i < y; i++)
        {
            s+=i;    
        }
        return s;
    }
    else
    {
        for (let i= y+1; i< x; i++)
        {
            s+=i
        }
        return s;
    }
}
function snt(n)
{
    if(n<2)
    {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) 
    {
        if (n%i==0)
        {
            return 0;
        }    
        
    }
    return 1;
}
function Tongsnt(n)
{
    var s=0;
    for (let i = 2; i < n; i++)
    {
        if (snt(i)==1)
        {
            s+=i;
        } 
    }
    return s; 
}
function TongUoc(n)
{
    var s=0;
    for (let i = 0; i < n; i++) 
    {
        if (n%i==0)
        {
            s+=i;
        }  
    }
    return s;
}
function fibonaci(n)
{
   let arr=[1,1];
   
   for (let i = 2; i < n; i++)
    {
      if (arr[i-2]+arr[i-1]<=n)
      {
          arr.push(arr[i-2]+arr[i-1])
      }
       
   }
   return arr;
} 
function Tongfibo(n)
{
    
    return fibonaci(n).filter((value => value%2==0)).reduce((sum,value) => sum + value);
}
function sosanh(x,y)
{
    if (typeof(x)=="number" && typeof(y)=="number")
    {
       return (x>y?x:y)
    }
    return "nhap vao so"
}
function sosanh2(x,y)
{
    return (typeof(x)=="number" && typeof(y)=="number") ?((x>y)?x:y):"khong phai la so"
}
function giaithua2(n)
{
//    if (Number.isInteger(n) && n>=0)
//         return (n>1)?n*giaithua2(n-1):1;
//     return "chua tinh dc";




    return (Number.isInteger(n) && n>=0 )?((n>1)?n*giaithua2(n-1):1):"chua tinh duoc"
}
function SortArr(arr)
{
    let newarry = [];
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            newarry.push(arr[i]);
        }
    }
    return newarry.sort(function(a,b){return a-b});

}
function sortArry(arr)
{

    let newArry = arr.filter((item) => (item%2==0));
    return newArry.sort(function(a,b){return a-b});
}
function Check(obj)
{
    if(obj.userName != "" && obj.userName.length <=20 && obj.passWord.length <=32 && obj.passWord.length >=6 && obj.passWord == obj.conFirm)
    {
        console.log("Đăng nhập thành công");
        
    }
    else
    {
        if (obj.userName.length >=20)
        {
            console.log("tài khoản không được vượt quá 20 ký tự");
            console.log("nhập lại tài khoản");   
        }
        else if(obj.userName == "")
        {
            console.log("tài khoản không được để chống");
            console.log("nhập lại tài khoản");   
        }
        else if (obj.passWord.length <=6 )
        {
            console.log("mật khẩu quá ngắn");
            console.log("nhập lại mật khẩu"); 
        }
        else if (obj.passWord.length >= 32 )
        {
            console.log("mật khẩu quá dài");
            console.log("nhập lại mật khẩu"); 
        }
        else
        {
            console.log("đăng nhập không thành công");
            
        }
        
    }
}
function upCase(str)
{
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
}
function UpToCase(str)
{
   let newArry= str.split(" ");
   let arr =[];
   for (let i=0;i<newArry.length;i++)
   {
       arr.push(upCase(newArry[i]));
   }
   return arr.join(" ");
    
}
function spinalCase(str)
{
    return str.toLowerCase().split(" ").join("-");
}
function sison()
{
    var now = new Date();
    var date = now.getDate();
    var month = now.getMonth()+1;
    var year =now.getFullYear();
    console.log(date+"/"+month+"/"+year);
      
}
function Point(x)
{
    if(x<=10 && x>=8.5)
    {
        console.log("Điểm A");
    }
    if (x<8.5&&x>=7)
    {
        console.log("Điểm B");
    }
    if (x>=5.5 && x<7)
    {
        console.log("Điểm C");
    }
    else if(x>=4&&x<=5.5)
    {
        console.log("Điểm D");
    }
    else
    {
        console.log("Điểm F");
    }
}
function StrMax(arr)
{
    let newArry=arr.map((item)=>item.length);
    let max= Math.max.apply(null,newArry);
    let ArrStr=arr.filter((item)=>item.length==max)
    return ArrStr;
}
function StrMax2(arr)
{
    let newArry=[];
    let maxlength=arr[0].length;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].length>maxlength)
        {
            maxlength=arr[i].length;
        }
    }
    for (let j = 0; j < arr.length; j++)
    {
        if(arr[j].length==maxlength)
        {
            newArry.push(arr[j])
        }
        
    }
    return newArry;
}
function matrix( rows, cols)
{
    var arr = [];
    for(let i=0; i < rows; i++)
    {
        arr.push([]);
        for(let j=0; j < cols; j++)
        {
           arr[i][j]=null;
        }
        
    }
    for (let i = 0; i < rows; i++) 
    {
        for (let j = 0; j< cols; j++) 
        {
            arr[i][j]=cols*i+1+j;
        }
    }
    // for(let k=1;k<rows;k=k+2)
    // {
    //     arr[k]=arr[k].reverses();
    // }
    return arr;
}
