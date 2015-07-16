$(document).on('itemScanned',function(event,scanResult)
{
  if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/))
    {   
		if(networkstatus == 'disconnected')
		{
			$('.content-cont').empty();
			$('.content-cont').append('Disconnected. Please try again once online.');
			//can add "click here" with scanResult variable to retrieve once online.
			//by modifying ondeviceonline code, i can make it load automatically once online.
			
			scanResultWhenOffline = scanResult;
		}
		else
		{
              scanResultWhenOffline = scanResult;//because when the single page is already open. and it goes offline.. and this line isn't here.. It loads the last "scanResultwhenoffline" instead of the last scanned item which was already open in the single page.
			  renderOnlineSinglePage(scanResult);
             
               
            
            
              //ref = window.open('http://'+glogOrViveg+'/redirect.php?barcode='+scanResult, '_blank', 'location=no,toolbar=no');
              //eventListeners();
              //askExit();//because it was set to loading before scanner start scanning
            
                

            
		}

 

    }
});


function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function onConfirm(buttonIndex) {
    alert('You selected button ' + buttonIndex);
}