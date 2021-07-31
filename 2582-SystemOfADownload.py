map = {
    '0': 'PROXYCITY',
    '1': 'P.Y.N.G.',
    '2': 'DNSUEY!',
    '3': 'SERVERS',
    '4': 'HOST!',
    '5': 'CRIPTONIZE',
    '6': 'OFFLINE DAY',
    '7': 'SALT',
    '8': 'ANSWER!',
    '9': 'RAR?',
    '10': 'WIFI ANTENNAS'
}

result = []

def show_map(loop):
    for i in range(loop):
        music = input()
        music = music.split(' ')
        result.append(int(music[0]) + int(music[1]))
        


answer = int(input())

show_map(answer)

for x in result:
    print(map[str(x)])