# README

## Project Setup

### Backend

#### Prerequisites
- Node.js version 16

#### Installation Steps

1. **Navigate to the Frontend Directory**
    ```sh
    cd backend
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Create Environment Variables File**
    - In the `backend` folder, create a `.env` file with the following content:
      ```env
      PORT=8080
      LIVECOINWATCH_BASE_URL=https://api.livecoinwatch.com
      API_KEY=<livecoinwatch_api_key>
      MONGODB_URI=mongodb://localhost:27017/<DB_NAME>
      ```

4. **Run the Development Server**
    ```sh
    npm run dev
    ```

    The backend server will start running.

### Frontend (crypto-dashboard-app)

#### Prerequisites
- Node.js version 18

#### Installation Steps

1. **Navigate to the Frontend Directory**
    ```sh
    cd crypto-dashboard-app
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Run the Development Server**
    ```sh
    npm run dev
    ```

    The frontend server will start running. Open your browser and go to [http://localhost:3000/](http://localhost:3000/).

---

## Demo

[Watch the demo video](videos/demo.mp4)

That's it! Your project should now be up and running.