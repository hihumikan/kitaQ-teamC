import { Box } from "@chakra-ui/react"
import Navbar from "../components/Navbar"
import { useParams } from 'react-router-dom'

export default function OnePostPage() {
    const { id } = useParams();
    return (
        <div>
            <h1>個別記事 {id}</h1>
        </div>
    )
}
