# Student View
*Documentation by Austin Lidey*
<br></br>
### **What is it?**
The student view is a tailored front end designed solely for students to interact with when requesting tutor assistance.
<br></br>

### **Installation**
As this is apart of the project as a whole, see main installation guide for TLQS.
<br></br>

### **Usage**
After creating an account or logging into an existing account, the student is brought to the main form screen.  The user may then select their
department: ‘Computer Science’ or ‘Mathematic’ 

Upon choosing a department, a list of classes is dynamically rendered based on your decision. A user may select a class or search the list of classes for their
desired choice.

Upon choosing a department and class, the user must enter a relevant topic from that class to help narrow down what they need help with. This is good for both the
student and tutor; the student must reflect on their problem which can help in many ways, and the tutor will be able to focus their efforts on that specific area.

Once all prerequisite fields have been completed, the user will finally describe their problem in a text field that supports markdown formatting. The support for
formatting will aid students and tutors when describing their problems/solutions.

After all fields have been completely filled out, the student may submit their ticket into the queue. Since our queue is a FIFO, it will be helped in the order it was
received.

Optionally, students have the choice to dequeue themselves if they feel they no longer need help.

<br></br>

### **User Input**
- **Department selection**
 
    - ‘Computer Science’
    - ‘Mathematics’
<br></br>

- **Class selection**
    - Many choices, based on department.
<br></br>

- **Topic description**
    - This is a text field the user to describe the genre of the issue.
<br></br>

- **Problem description**
    - This is a larger text field for the user to go into depth about their issue(s).
<br></br>

### **Future Fixes**
- Fix overflow on mobile versions.
- Create more robust mobile views.


### **Future Features**
- Create more robust markdown features (color, formatting, etc).
- Add numeric indicator for queue position.