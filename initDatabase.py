import csv
import requests
from requests.exceptions import HTTPError

# Ensure that the courses.csv file present
# By default all the courses will be posted into the database for testing purposes
# Change the session wanted number to limit the number of created sessions
sessions_wanted = 56
courseResponseIds = []
postHeaders={
}

if(sessions_wanted > 56):
    print('Too many sessions wanted, exitting...')
    exit()

print('Loading all courses from courses.csv.....')

try:
    requests = requests.get('http://localhost:8080/users/', timeout=5)
    print('The API is running, proceeding to populating API')

except (requests.ConnectionError, requests.Timeout) as exception:
    print('The API is not up, ensure that the make run command has finished executing.')
    print('Exitting...')
    exit()

# Add all courses to the database
line_count=0
math_count=0
with open('courses.csv', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
            math_count += 1

        if(row['code'].startswith('MATH')):
            json_data_currentcourse = {
                'title': row['title'],
                'department':1, 
                'code': row['code'],
            }
            math_count += 1
        else:
            json_data_currentcourse = {
                'title': row['title'],
                'department':0, 
                'code': row['code'],
            }
            line_count+=1
        postCourse = requests.post('http://localhost:8080/courses/', json=json_data_currentcourse, headers=postHeaders)
        courseResponseIds.append(postCourse.json()['id'])

print(f"{line_count-1} CSCD courses loaded....")
print(f"{math_count-1} MATH courses loaded....\n")

print("Creating sessions.....")
session_count = 0
for id in courseResponseIds:
    if(session_count == sessions_wanted):
        break

    try:
        session_count += 1
        json_data_currenttutor = {
            'name': 'Tutor ' + str(session_count),
            'email': 'tutor' + str(session_count) + '@tutor.edu',
            'role':2, 
        }

        json_data_currentstudent = {
            'name': 'student ' + str(session_count),
            'email': 'student' + str(session_count) + '@student.edu',
            'role':1, 
        }

        postTutor = requests.post('http://localhost:8080/users/', json=json_data_currenttutor, headers=postHeaders)
        postStudent = requests.post('http://localhost:8080/users/', json=json_data_currentstudent, headers=postHeaders)

        json_data_currentsession = {
            'course': id,
            'topic': 'topic ' + str(session_count),
            'tutor': postTutor.json()['id'],
            'student': postStudent.json()['id'],
            'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            'retrospective': '',
        }

        postSession = requests.post('http://localhost:8080/sessions/', json=json_data_currentsession, headers=postHeaders)

    except HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
    except Exception as err:
        print(f'Other error occurred: {err}')

print(f'Processed {session_count} sessions')
