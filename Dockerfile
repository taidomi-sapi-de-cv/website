FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Establecer variable antes de compilar
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

COPY frontend/ .
RUN yarn build






















FROM nginx:1.27-alpine

WORKDIR /app

# Copiar frontend compilado a la raíz web de Nginx
COPY --from=frontend-builder /app/frontend/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puerto HTTP
EXPOSE 8000

# Activar el venv y lanzar FastAPI + Nginx
ENV PATH="/app/venv/bin:$PATH"
CMD nginx -g 'daemon off;'
