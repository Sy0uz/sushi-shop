import { FC } from "react";
import ContentLoader from "react-content-loader";

const SkeletonItem: FC = () => (
    <ContentLoader
        speed={2}
        width='100%'
        height='348'
        viewBox="0 0 365 348"
        backgroundColor="#d6d6d6"
        foregroundColor="#ebebeb"
    >
        <rect x="0" y="257" rx="6" ry="6" width="365" height="40" />
        <rect x="234" y="304" rx="6" ry="6" width="130" height="38" />
        <rect x="0" y="0" rx="6" ry="6" width="365" height="250" />
        <rect x="0" y="304" rx="6" ry="6" width="70" height="38" />
    </ContentLoader>
)

export default SkeletonItem;