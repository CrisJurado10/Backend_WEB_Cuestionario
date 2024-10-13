
from flask import Blueprint, request, jsonify
from models.question_model import QuestionModel
from db import mysql

question_bp = Blueprint('questions', __name__)

@question_bp.route('/questions', methods=['GET'])
def get_questions():
    model = QuestionModel(mysql)
    questions = model.get_questions()
    return jsonify(questions)

@question_bp.route('/questions', methods=['POST'])
def create_question():
    question_data = request.get_json()
    model = QuestionModel(mysql)
    model.create_question(question_data)
    return jsonify({"message": "Pregunta creada correctamente"})
