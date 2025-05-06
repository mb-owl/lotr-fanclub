# Backend Dockerfile
FROM python:3.11-slim
# Install Python dependencies
COPY requirements.txt . 
RUN pip install -r requirements.txt  
# Copy the project code
COPY . .
# Expose port 8000 and start the Django dev server
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

