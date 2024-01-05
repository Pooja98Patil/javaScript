console.log(`================Assignment 03=============`);


 var InterviewEligiblity = function(gradScore , hscScore, sscScore, candidateName){
    console.log(`Candidate Name:${candidateName}, Garduation Score: ${gradScore}, HSC Score: ${hscScore}, SSC Score: ${sscScore}.`)
    if (gradScore>=70 || hscScore>=80 ||sscScore>=90 || gradScore==undefined || isNaN(gradScore) || hscScore==undefined || isNaN(hscScore)|| sscScore==undefined || isNaN(sscScore)) {

        console.log(`Congrates! ${candidateName} You are Eligible for TCS Interview.`)
           
       }else{
        console.log(`Unfortunately, ${candidateName} you are not eligible for Interview.`)
     };
};

InterviewEligiblity(80,86,90,"Pooja");
InterviewEligiblity(70,65,55,"Lina");
InterviewEligiblity(60,79,88,"Sonali");

