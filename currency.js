/*
===========================================================================
author:AmeyChavan99@gmail.com

============================================================================
*/




/*
===========================================================================
  Indian  SYSTEM
  currencytowordsIndian("2,112.15")
============================================================================
*/
function currencytowordsIndian(data) {

  var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN");
  var tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY","SEVENTY", "EIGHTY", "NINETY");


  if(validateCurrency(data) ==false){ return "INVAILD CURRENCY"}
    data = data.replace(/,/g, "");
    data = parseFloat(data).toFixed(2)

    var finalwords=""

    var majoramt  = parseInt(data) ;
    var tenss=majoramt%100
    if(tenss!=0){
      finalwords=finalwords+twodigi(tenss)

    }
    majoramt=parseInt(majoramt/100)

    var hundreds=majoramt%10
    if(hundreds!=0){
      finalwords=twodigi(hundreds)+" HUNDRED "+finalwords

    }
    majoramt=parseInt(majoramt/10)

    var thousands=majoramt%100
    if(thousands!=0){
      finalwords=twodigi(thousands)+" THOUSAND "+finalwords

    }
    majoramt=parseInt(majoramt/100)
    var lakh =majoramt%100
    if(lakh!=0){
      finalwords=twodigi(lakh)+" LAKH "+finalwords

    }
    majoramt=parseInt(majoramt/100)
    var Crore  =majoramt
    if(Crore!=0){

      finalwords=currencytowordsIndian(Crore+".00")+" CRORE "+finalwords
    }



    if(data.lastIndexOf(".")!= -1 && data.substring(data.lastIndexOf(".")+1 )!="00")
      {
        var minoramt  = parseInt(data.substring(data.lastIndexOf(".")+1 ));
        finalwords=finalwords+" RUPEES AND "+twodigi(minoramt)+" "+"PAISE"
      }

      return finalwords

      function validateCurrency(amount) {
        var regex = /(?:^\d{1,3}(?:\.?\d{2,3})*(?:,\d{2})?$)|(?:^\d{1,3}(?:,?\d{2,3})*(?:\.\d{1,2})?$)/
        return regex.test(amount);
      }



      function twodigi(amt){
        if(amt>19){          return(  tens[(amt/10 )  | 0]+ " "+ones[amt%10  ]  )        }
        else      {          return(" "+ ones[amt]  )        }
          }


        }




/*
===========================================================================
  US SYSEM
============================================================================
*/









        function currencytowordsUS(data) {




          var ones = Array("", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX","SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN", "TWELVE", "THIRTEEN","FOURTEEN", "FIFTEEN", "SIXTEEN", "SEVENTEEN", "EIGHTEEN","NINETEEN");
          var tens = Array("", "", "TWENTY", "THIRTY", "FOURTY", "FIFTY", "SIXTY","SEVENTY", "EIGHTY", "NINETY");
          var thousands = Array("THOUSANDS", "MILLIONS", "BILLIONS");


          if(validateCurrency(data) ==false){ return "INVAILD CURRENCY"}
            data = data.replace(/,/g, "");
            data = parseFloat(data).toFixed(2)

            var finalwords=""




            var majoramt  = parseInt(data) ;



            var tenss=majoramt%100
            if(tenss!=0){

              finalwords=finalwords+twodigi(tenss)
            }


            majoramt=parseInt(majoramt/100)

            var hundreds=majoramt%10
            if(hundreds!=0){

              finalwords=twodigi(hundreds)+" HUNDRED"+finalwords

            }
            majoramt=parseInt(majoramt/10)

            var thousands=majoramt%1000

            if(thousands!=0){



              finalwords=threedigi(thousands)+" THOUSAND"+finalwords
            }
            majoramt=parseInt(majoramt/1000)

            var million  =majoramt
            if(million!=0){

              finalwords=currencytowordsUS(million+".00")+" MILLIONS"+finalwords
            }



            if(data.lastIndexOf(".")!= -1 && data.substring(data.lastIndexOf(".")+1 )!="00")
              {
                var minoramt  = parseInt(data.substring(data.lastIndexOf(".")+1 ));
                finalwords=finalwords+" DOLLAR AND"+twodigi(minoramt)+" CENTS"
              }


              return finalwords





              function validateCurrency(amount) {
                var regex = /(?:^\d{1,3}(?:\.?\d{2,3})*(?:,\d{2})?$)|(?:^\d{1,3}(?:,?\d{2,3})*(?:\.\d{1,2})?$)/
                return regex.test(amount);
              }



              function twodigi(amt){
                if(amt>19){          return(  tens[(amt/10 )  | 0]+ " "+ones[amt%10  ]  )        }
                  else    {          return(" "+ ones[amt]  )        }
                  }

                  function threedigi(amt){
                    if(amt<99){
                                if(amt>19){          return(  tens[(amt/10 )  | 0]+ " "+ones[amt%10  ]  )        }
                                else      {          return(" "+ ones[amt]  )        }
                        }
                    else{
                          var amt2= amt/100 |0
                          amt=amt%100
                          if(amt>19){          return( " "+ones[amt2]+" HUNDRED "+ tens[(amt/10 )  | 0]+ " "+ones[amt%10  ]  )        }
                          else      {          return(" "+ones[amt2]+" HUNDRED "+ ones[amt]  )        }
                          }
                      }

          }
