from flask import Flask, render_template

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