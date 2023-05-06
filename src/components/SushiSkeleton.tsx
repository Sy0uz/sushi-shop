import { FC } from "react"
import ContentLoader from "react-content-loader"

const SushiSkeleton: FC = () => (
    <ContentLoader
        speed={2}
        width='100%'
        height='349'
        viewBox="0 0 365 349"
        backgroundColor="#d6d6d6"
        foregroundColor="#ebebeb"
    >
        <rect x="0" y="257" rx="6" ry="6" width="365" height="36" />
        <rect x="201" y="300" rx="6" ry="6" width="164" height="45" />
        <rect x="0" y="0" rx="6" ry="6" width="365" height="250" />
        <rect x="0" y="300" rx="6" ry="6" width="70" height="45" />
    </ContentLoader>
)

export default SushiSkeleton