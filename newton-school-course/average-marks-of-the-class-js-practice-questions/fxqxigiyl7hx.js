let users=[]; // Add all the students with average value >35 in this array.


function filterStudents(studentList) {
    studentList.filter((student)=>{
        let sum=student.marks.reduce((acc,mark)=> acc+mark,0)
        let avg = sum/student.marks.length
        if(avg>=35){
            user.push(student.name)

        }
    })
    return users
   
}