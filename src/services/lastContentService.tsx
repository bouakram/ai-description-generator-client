import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../constants"
import { useToast } from "@chakra-ui/react"

type lastcontentType = [{
    plateformname: string,
    topic: {
        id: string,
        topic: string
    }
}]

const LastContentService = () => {
    const toast = useToast()
    const { data, isPending, isError, error } = useQuery({
        queryKey: ['last-content'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}openai/last-content`, { withCredentials: true })
            return response.data.content as lastcontentType
        }
    })
    if (isError) {
        toast({
            title: error.message,
            position: 'top',
            status: 'error',
            isClosable: true,
        })
    }
    return {
        data,
        isPending,
        isError,
        error
    }
}

export default LastContentService