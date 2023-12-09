import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { API_URL } from "../constants"
import { useToast } from "@chakra-ui/react"


const DeleteContent = () => {
    const toast = useToast()
    const { mutateAsync: deleteContent, isPending } = useMutation({
        mutationKey: ['delete-Content'],
        mutationFn: async (id: string) => {
            await axios.delete(`${API_URL}openai/content/${id}`, { withCredentials: true })
        }
    })

    const handleDelete = async (id: string) => {
        deleteContent(id, {
            onSuccess: () => {
                toast({
                    title: 'successfully deleted',
                    position: 'top',
                    status: 'error',
                    isClosable: true,
                })
            },
            onError: (error) => {
                toast({
                    title: error.message,
                    position: 'top',
                    status: 'error',
                    isClosable: true,
                })
            }
        })
    }
    return {
        handleDelete,
        isPending
    }
}

export default DeleteContent