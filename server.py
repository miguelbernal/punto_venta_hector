from flask import Flask, render_template, request, jsonify
import json
import psycopg2

app = Flask(__name__)

# Rutas Clientes
@app.route('/', methods=['GET']) # anotaciones o decoradores
def index():
    return render_template('index.html')

@app.route('/admin', methods=['GET']) # anotaciones o decoradores
def admin():
    return render_template('admin.html')

@app.route('/menu', methods=['GET']) # anotaciones o decoradores
def menu():
    return render_template('menu.html')

# Rutas del Servidor o API
# pip install psycopg2
# pip install psycopg2-binary
@app.route('/api/login', methods=['POST']) 
def login():
    data = json.loads(request.data)
    usuario = data["usuario_usuario"]
    clave = data["clave_usuario"]
    print('login:',usuario,clave)
    dictData = {'acceso': False}
    resp = jsonify(dictData)
    try:
        connection = psycopg2.connect(user="postgres", password="1", host="127.0.0.1", port="5432", database="punto_venta_hector")
        cursor = connection.cursor()
        sql = "SELECT id_usuario, nombre_usuario, usuario_usuario FROM usuarios WHERE usuario_usuario='" + usuario + "' AND clave_usuario='"+clave+"'" 
        cursor.execute(sql)
        row_headers = [x[0] for x in cursor.description]
        record = cursor.fetchone()
        if record is None:
            print('No existe registro')
        else:
            dictData = {'acceso': True}
            resp = jsonify(dictData)
        print(sql)
    except (Exception, psycopg2.Error) as error:
        print('ERROR')
        print(error)
    finally:
        if(connection):
            cursor.close()
            connection.close()
    return resp