count = 3

def is_shout(txt):
    return txt == 'caw caw'

def convert_eyes_in_binary(txt):
    binary = ''
    for i in txt:
        binary += '1' if i == '*' else '0'
    return binary
    
number = 0    
answers = []
while count > 0:
    answer = input()
    if not is_shout(answer):
        number += int(convert_eyes_in_binary(answer),2)
    else:
        answers.append(number)
        number = 0
        count-=1

for i in answers:
    print(i)