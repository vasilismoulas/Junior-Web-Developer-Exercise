# Use the official Nginx image
FROM nginx:alpine

# Copy the contents of public_html to the Nginx default directory
COPY public_html /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80