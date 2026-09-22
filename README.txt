Flores Amarillas 🌼

Sitio web en Python + Flask, personalizado para Cachetes.

Características:
- Muchas flores amarillas aparecen automáticamente al abrir.
- Lluvia continua de flores.
- Explosiones automáticas de flores y partículas.
- Diseño adaptable a celular y computadora.

Ejecución local:
1. python -m pip install -r requirements.txt
2. python app.py
3. Abre http://127.0.0.1:5000

Despliegue en Railway:
1. Crea un nuevo proyecto en Railway.
2. Selecciona Deploy from GitHub Repo.
3. Elige NoelGom/flores-amarillas.
4. Railway instalará requirements.txt automáticamente.
5. El Procfile ejecutará:
   gunicorn app:app
6. Genera un dominio público desde Settings / Networking si Railway no lo crea automáticamente.

La aplicación también reconoce automáticamente la variable PORT proporcionada por Railway.
