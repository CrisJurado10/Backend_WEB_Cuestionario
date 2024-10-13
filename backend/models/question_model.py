# models/question_model.py

class QuestionModel:
    def __init__(self, mysql):
        self.mysql = mysql

    def get_questions(self):
        cursor = self.mysql.connection.cursor()
        cursor.execute("SELECT id, question_text, option_1, option_2, option_3, option_4, correct_option FROM questions")
        questions = cursor.fetchall()
        cursor.close()

        # Transformar el resultado en una lista de diccionarios
        return [
            {
                "id": question[0],
                "question_text": question[1],
                "option_1": question[2],
                "option_2": question[3],
                "option_3": question[4],
                "option_4": question[5],
                "correct_option": question[6]
            }
            for question in questions
        ]

    def create_question(self, question_data):
        cursor = self.mysql.connection.cursor()
        query = """INSERT INTO questions (question_text, option_1, option_2, option_3, option_4, correct_option)
                   VALUES (%s, %s, %s, %s, %s, %s)"""
        cursor.execute(query, (
            question_data['question_text'], 
            question_data['option_1'], 
            question_data['option_2'], 
            question_data['option_3'], 
            question_data['option_4'], 
            question_data['correct_option']
        ))
        self.mysql.connection.commit()
        cursor.close()
