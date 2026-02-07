# Use uma imagem leve do Python
FROM python:3.11-slim

# Evita que o Python gere arquivos .pyc e permite log em tempo real
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

# Instala dependências do sistema
RUN apt-get update && apt-get install -y libpq-dev gcc

# Instala dependências do Python
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copia o projeto
COPY . /app/

# Expõe a porta do Django
EXPOSE 8000

# Comando para rodar (ajuste 'myproject' para o nome da sua pasta principal)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]