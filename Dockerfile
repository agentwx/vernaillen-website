FROM nginx:1.15.12-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/pwa /usr/share/nginx/html
