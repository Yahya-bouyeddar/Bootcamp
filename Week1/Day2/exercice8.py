data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quizz():
    incorrect_answer = []
    correct_answer = []
    for i in data:
        question = i["question"]
        reponse = i["answer"]
        reponse_user= input(f'donner moi la reponse de cette question : {question}')
        if reponse_user == reponse :
            print('votre reponse est correcte')
            correct_answer.append(reponse_user)
        else:
            print('reponse fausse !')
            incorrect_answer.append(reponse_user)
    
    print(incorrect_answer)
    false = len(incorrect_answer)
    true = len(correct_answer)
    return true,false


def resultat(true,false):
    print(f'votre nombre de reponse correcte est {true}')
    print(f'votre nombre de reponse fausse est {false}')
    
            

true , false = quizz()
resultat(true,false)



            


    



