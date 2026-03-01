import { Route, Routes } from "react-router-dom"
import SearchPage from "../components/searchPage/SearchPage"
import ArtistDetail from "../components/ArtistDetail/ArtistDetail"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/artist/:aritestName' element={<ArtistDetail />} />
            <Route path='*' element={<h1>404 this page not fond</h1>} />
        </Routes>
    )
}