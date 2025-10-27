FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Establecer variable antes de compilar
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

COPY ./ .
RUN yarn build

# Crea la imagen que correra en el kubernete
FROM nginx:1.27-alpine
ENV APP_URL=http://127.0.0.1:5000/
RUN apk add --no-cache gettext

WORKDIR /app

# Copiar frontend compilado a la raíz web de Nginx
COPY --from=frontend-builder /app/frontend/build /usr/share/nginx/html

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/templates/nginx.conf.template
#RUN sed -i "s|http://127.0.0.1:5000/|${APP_URL}|g" /etc/nginx/nginx.conf

# Exponer puerto HTTP
EXPOSE 8000

# Activar el venv y lanzar FastAPI + Nginx
ENV PATH="/app/venv/bin:$PATH"
#CMD nginx -g 'daemon off;'
CMD envsubst '$APP_URL' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && \
    nginx -g 'daemon off;'
