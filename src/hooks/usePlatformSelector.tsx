import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const usePlatformSelector = () => {
    const getPlatform = (socialMediaPlatform: string) => {
        switch (socialMediaPlatform.toLowerCase()) {
            case 'facebook':
                return <FaFacebook />
            case 'instagram':
                return <FaInstagram />
            case 'linkedin':
                return <FaLinkedin />
            case 'twitter':
                return <FaTwitter />
            default:
                break;
        }
    }
    return {
        getPlatform,
    }
}

export default usePlatformSelector