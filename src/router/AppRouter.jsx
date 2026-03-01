import { Route, Routes } from "react-router-dom"
import SearchPage from "../components/searchPage/SearchPage"
import ArtistDetail from "../components/ArtistDetail/ArtistDetail"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/artistDetails/:aritestName' element={<ArtistDetail />} />
        </Routes>
    )
}