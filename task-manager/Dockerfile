# Etapa 1: Crearea imaginii pentru aplicația Java
FROM openjdk:17-jdk-slim AS builder

# Setăm directorul de lucru
WORKDIR /app

# Copiem fișierele sursă în container
COPY src/ /app/src/
COPY web/ /app/web/

# Comandă pentru a compila fișierele Java
RUN javac -d /app/bin /app/src/com/taskmanager/*.java

# Etapa 2: Crearea imaginii finale
FROM nginx:alpine

# Copiem fișierele HTML și CSS în locația corespunzătoare din Nginx
COPY --from=builder /app/web /usr/share/nginx/html

# Setăm portul pe care Nginx va asculta
EXPOSE 80

