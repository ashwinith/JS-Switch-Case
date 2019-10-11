// Switch case for Month values

//let monthNumber=prompt("Please enter a month number",""); // Value entered in the prompt box is always a string
                                                          // if we enter number then also it gets converted to string

let monthNumber= 9;

let strMessage = undefined;

switch (monthNumber)
{
    case "1": // here 1 is written inside "" coz value entered in the prompt box is always a string
            strMessage="January";
        break;

        case 2:
            strMessage="February";
        break;
        case 3:
            strMessage="March";
        break;
        case 4:
            strMessage="April";
        break;
        case 5:
            strMessage="May";
        break;
        case 6:
            strMessage="June";
        break;
        case 7:
            strMessage="July";
        break;
        case 8:
            strMessage="August";
        break;
        case 9:
            strMessage="September"; // if we write same value for two cases then the case that is written
        break;                      // first will be executed first and then program will break
        case 9:
            strMessage="October";
        break;
        case 11:
            strMessage="November";
        break;
        case 12:
            strMessage="December";
        break;

        default:
        strMessage = "Please Enter a valid month number between 1-12";
        break;

        
}

document.write(strMessage);

//console.log(strMessage);

