import { useState } from 'react'

const useCopy = () => {
    const [tooltipText, setTooltipText] = useState('Copy')
    const handleCopy = async (post: string) => {
        await navigator.clipboard.writeText(post)
        setTooltipText('Copied')
        setTimeout(() => {
            setTooltipText('Copy')
        }, 3000)
    }
    return {
        handleCopy,
        tooltipText
    }
}

export default useCopy