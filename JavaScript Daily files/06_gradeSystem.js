var gradeSystem  = function(marks) {

    if (marks<0 || marks >100 || marks==undefined || isNaN(marks)) { // Invalid Input

        console.log(` ${marks} ==> Invalid Input...`);

    } else { // Fail or Pass 

       if (marks<35) { // Fail

        console.log(` ${marks} Unfortunately you are Failed...`); 

       } else { // Pass

            if (marks>=35 && marks <50) {

                console.log(` ${marks} You are Pass. Grade ==> C`);

            } else if (marks>=50 && marks <75) {

                console.log(` ${marks} You are Pass. Grade ==> B`);

            } else {

                console.log(` ${marks} You are Pass. Grade ==> A`);

            }

       }

    }

 }

 gradeSystem(68);

 gradeSystem(100);

 gradeSystem(89);

 gradeSystem(-10);

 gradeSystem(110);

 gradeSystem(undefined);

 gradeSystem(null);

 gradeSystem(NaN);





/////////////////////Switch Case////////////////////////////











 //1  -- Monday

//2  -- Tuesday

 

//7 -- Sunday

function dayOfTheWeek(dayNum){

    switch (dayNum) {

        case 1:

          console.log(` Day Number ${dayNum} ==> Monday`);

          break;

        case 2:

          console.log(` Day Number ${dayNum} ==> Tuesday`);

          break;

        case 3:

          console.log(` Day Number ${dayNum} ==> Wed`);

          break;

        case 4:

          console.log(` Day Number ${dayNum} ==> Thur`);

          break;

        case 5:

          console.log(` Day Number ${dayNum} ==> Friday`);

          break;

        case 6:

          console.log(` Day Number ${dayNum} ==> Saturday`);

          break;

        case 7:

          console.log(` Day Number ${dayNum} ==> Sunday`);

          break;

        default:

          console.log(` Invalid Input --> Day Number ${dayNum}`);

          break;

      }

}

dayOfTheWeek(2);

dayOfTheWeek(7);

dayOfTheWeek(9);

dayOfTheWeek(null);

dayOfTheWeek(NaN);

dayOfTheWeek(-2);

dayOfTheWeek(0);