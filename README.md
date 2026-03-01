# 🎵 Music Artist Search App

A React-based web application that allows users to search for their favorite music artists and explore their discography, biography, and top tracks.

## ✨ Features

* **Artist Search**: Search for any artist by name using a dedicated search form.
* **Artist Cards**: Visual results displaying the artist's name and image.
* **Detailed Artist Page**: Deep dive into an artist's profile:
    * Artist Name and Image.
    * Full Biography.
    * **Top 3 Songs**: Displays name, album, and duration for the top tracks.
* **State Management**: Optimized data fetching with loading spinners and error handling.
* **Responsive Design**: Fully functional on both Mobile and Desktop (Tailwind CSS).

## 🛠️ Tech Stack

* **React** (Functional Components & Hooks).
* **TypeScript** for type safety and better DX.
* **TanStack Query** (React Query) for efficient data fetching and caching.
* **React Router** for seamless navigation.
* **Tailwind CSS** for modern, responsive styling.
* **Axios** for API requests.
* **API**: Powered by [TheAudioDB](https://www.theaudiodb.com/).

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (Latest LTS version recommended)
* npm or yarn

### Installation & Running

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/moti-gabay/Music_Artists.git](https://github.com/moti-gabay/Music_Artists.git)
    ```

2.  **Navigate to the project folder**
    ```bash
    cd Music_Artists
    ```

3.  **Install dependencies**
    ```bash
    npm install
    ```

4.  **Start the development server**
    ```bash
    npm run dev
    ```
    *The app should now be running at `http://localhost:3000`.*

## 📂 Project Structure

* `src/api` - API service calls using Axios.
* `src/components` - Reusable UI components (Loader, ArtistCard).
* `src/pages` - Main page components (SearchPage, ArtistDetail).
* `src/utils` - Helper functions (Duration formatting, etc.).
* `src/types` - TypeScript interfaces and types.

---
**Submitted as part of the Home Assignment - Music Artists Search.**