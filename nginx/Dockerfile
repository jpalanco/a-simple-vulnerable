FROM ubuntu:14.04

# Instalar paquetes vulnerables
RUN apt-get update && apt-get install -y \
    openssl=1.0.1f-1ubuntu2 \
    apache2=2.4.7-1ubuntu4 \
    bash=4.3-7ubuntu1 \
    wget=1.15-1ubuntu1.14.04.2 \
    nginx


# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
