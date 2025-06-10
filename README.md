# Task Manager - Docker Microservices Project

## 📌 Description
A simple task manager with a Node.js backend and a MySQL database. Docker is used to containerize and deploy both services. This project demonstrates microservices communication using manual Docker commands.

## 🧱 Architecture
- **MySQL Database**: Stores user tasks.
- **Node.js Web Service**: Backend API that interacts with the MySQL database.

### Docker Components

1. **Custom Network (`app-network`)**: Enables communication between containers.
2. **MySQL Container**:
   - Runs on port `3306`
   - Uses a Docker volume to persist data
3. **Web Service Container**:
   - Runs on port `3000` (exposed as `3001` on the host)
   - Connects to the MySQL container via the shared network

## 🐳 Docker Commands (PowerShell)

Create the network:

```powershell
docker network create app-network



## 🔧 Tech Stack
- Node.js + Express
- MySQL
- Docker (containers, volumes, custom network)

## 🐳 Docker Commands

### Create network and volume:
```bash
docker network create app-network
docker volume create mysql-data



## 🚀 How to Use

### Prerequisites
- Docker installed
- Internet connection to pull images from Docker Hub

### Step-by-step Instructions

1. **Clone this repository**
```bash
git clone https://github.com/YOUR_USERNAME/docker-task-manager.git
cd docker-task-manager






Create Docker network and volume


docker network create app-network
docker volume create mysql-data






docker run -d \
  --name db-container \
  --network app-network \
  -e MYSQL_ROOT_PASSWORD=secret \
  -v mysql-data:/var/lib/mysql \
  mysql



docker run -d \
  --name web-container \
  --network app-network \
  -p 3000:3000 \
  yourdockerhubusername/web-service:v1






docker run -d \
  --name web-container-2 \
  --network app-network \
  -p 3001:3000 \
  yourdockerhubusername/web-service:v1






New-Item .gitignore -ItemType File
Add-Content .gitignore "node_modules/"
Add-Content .gitignore "*.log"
Add-Content .gitignore ".env"

