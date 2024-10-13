from flask import Flask
from flask_cors import CORS
from controllers.question_controller import question_bp  # Blueprint para preguntas
from db import mysql  # Importar la instancia MySQL

app = Flask(__name__)
CORS(app)

# Configuración de la conexión MySQL en Railway
app.config['MYSQL_HOST'] = 'autorack.proxy.rlwy.net'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'KEGNQbtxmMSxvECbpRWDcYteAAqlXKrT'
app.config['MYSQL_DB'] = 'railway'
app.config['MYSQL_PORT'] = 12469  # Puerto de Railway

app.secret_key = 'tu_clave_secreta'

# Inicializar MySQL con la app Flask
mysql.init_app(app)

# Registrar los blueprints
app.register_blueprint(question_bp)

# Verificación básica de la conexión con la base de datos
@app.route('/test_db')
def test_db():
    try:
        cur = mysql.connection.cursor()
        cur.execute('SELECT 1')
        result = cur.fetchone()
        cur.close()
        return {"status": "success", "result": result}, 200
    except Exception as e:
        return {"status": "error", "message": str(e)}, 500

if __name__ == '__main__':
    app.run(debug=True)
