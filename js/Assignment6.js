    // SECTION 1
function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/CreateCustomer";
    
    //Collect Customer data from web page
    
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;
    var customercity = document.getElementById("custcity").value;
    
    //Create the parameter string
    
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername +'","City":"' + customercity +'"}';
    
    //Checking for Ajax operation return
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        OperationResult(result);
    }
}
    //Start AJAX request
    
    objRequest.open("POST", url, true);
    
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    objRequest.send(newcustomer);
    
    }
    function OperationResult(output)
    {
        if (output.WasSuccessful == 1)
        {
            document.getElementById("result").innerHTML = "The operation was successful!"
        }
        else
        {
            document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
        }
    }
    
   // END OF SECTION 1 
    
    
    // START OF SECTION 2
function UpdateOrderAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";
    
    //Update customer address
    
    var orderid = document.getElementById("orderid").value;
    var shippingaddress = document.getElementById("shipaddress").value;
    var shippingcity = document.getElementById("shipcity").value;
    var shippingname = document.getElementById("shipname").value;
    var postalcode = document.getElementById("shippostcode").value;
    
    
    var updateorder = '{"OrderID":"'+orderid+'","ShipAddress":"'+shippingaddress+'","ShipCity":"'+shippingcity+'","ShipName":"'+shippingname+'","ShipPostcode":"'+postalcode+'"}';
    
    
        //Checking for Ajax operation return
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        OperationResult2(result);
    }
    }
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    objRequest.send(updateorder);
    }
    
    function OperationResult2(output)
    {
        if (output == 1)
        {
            document.getElementById("result2").innerHTML = "The operation was successful!"
        }
        else if (output == 0)
        {
            document.getElementById("result2").innerHTML = "The operation was unsuccessful!"
        }
        else if (output == -2)
        {
            document.getElementById("result2").innerHTML = "The operation failed because the data string supplied could not be deserialized into the service object"
        }
        else if (output== -3)
        {
           document.getElementById("result2").innerHTML = "The operation failed because a record with the supplied Order ID could not be found"
        }
        else
        {
        document.getElementById("result2").innerHTML = "error" + "<br>" + output.Exception;
        }
    }
    
    //END OF SECTION 2
    
    
    // START OF SECTION 3
    
    function DeleteCustomerID()
    {
    var good = confirm("are you sure?")
    if (good==true)
    {
    var objRequest = new XMLHttpRequest();
    var url = "https://student.business.uab.edu/jsonwebservice/service1.svc/deleteCustomer/customerID";
    
    //Get data from webpage
    
    var deleteid = document.getElementById("deleteid").value;
    
    var deletecustomer = '{"deleteCustomer":"'+deleteid+'"}';
    
    
            //Checking for Ajax operation return
    
    objRequest.onreadystatechange = function()
    {if (objRequest.readyState == 4 && objRequest.status == 200)
    {
        var result = JSON.parse(objRequest.responseText);
        
        DeleteCustomerResult(result);
    }
    }
    objRequest.open("GET",url,true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    objRequest.send(deletecustomer);
    
    }
    
    function DeleteCustomerResult(output)
    {
        if (output ==1)
        {
            document.getElementById("result3").innerHTML= "The operation was successful"
        }
        else(output == 0)
        {
            document.getElementById("result3").innerHTML= "The operation was not successful";
        }
    }
    }
    
    
    
    
            //End Section 3
    
            //Start of Drop down box
            
    function MenuChoice()
    
    {
        if (document.getElementById("option1").value == "Adding Customers")
        {
            document.getElementById("section1").style.visibility = "visible";
            document.getElementById("section2").style.visibility = "hidden";
            document.getElementById("section3").style.visibility = "hidden";
        }
        else if (document.getElementById("option2").value =="Updating Order Address")
        {
            document.getElementById("section1").style.visibility = "hidden";
            document.getElementById("section2").style.visibility = "visible";
            document.getElementById("section3").style.visibility = "hidden";
        }
        else
        {
            document.getElementById("section1").style.visibility = "hidden";
            document.getElementById("section2").style.visibility = "hidden";
            document.getElementById("section3").style.visibility = "visible";
        }
    }
    
    
    
    