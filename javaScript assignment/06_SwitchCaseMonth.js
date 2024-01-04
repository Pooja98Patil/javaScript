console.log(`======================Assignmenet 01=================`);
function monthOfYear(month){
    switch (month) {
        case 1:
            console.log(`The Month No: ${month}==> January`);
            break;
            case 2:
            console.log(`The Month No: ${month}==> February`);
            break;
            case 3:
            console.log(`The Month No: ${month}==> March`);
            break;
            case 4:
                console.log(`The Month No: ${month}==> April`);
                break;
            case 5:
                console.log(`The Month No: ${month}==> May`);
                break
                case 6:
            console.log(`The Month No: ${month}==> June`);
            break;
            case 7:
                console.log(`The Month No: ${month}==> July`);
                break;    
                case 8:
            console.log(`The Month No: ${month}==> August`);
            break;
            case 9:
            console.log(`The Month No: ${month}==> September`);
            break;
            case 10:
            console.log(`The Month No: ${month}==> Octomber`);
            break;
            case 11:
            console.log(`The Month No: ${month}==> November`);
            break;
            case 12:
            console.log(`The Month No: ${month}==> December`);
            break;
        default:
            console.log(`Invalid Input ==> Month Number is ${month}`);

          break;
    }

};
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);
