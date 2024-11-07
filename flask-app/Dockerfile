FROM python

# Install vulnerable versions of libraries
RUN pip install Django==1.8.0 \
                requests==2.6.0 \
                flask==0.12 \
                numpy==1.16.0 \
                jinja2==2.7.2 \
                sqlalchemy==1.2.0 \
                pillow==4.0.0

# Create a simple Flask application
RUN mkdir /app
WORKDIR /app

# Copy app files
COPY app /app

# Run the application
CMD ["python", "app.py"]

