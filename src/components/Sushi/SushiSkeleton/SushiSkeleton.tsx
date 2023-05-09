import { FC } from "react"
import SkeletonItem from "./SkeletonItem"

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const SushiSkeleton: FC = () => (
    <div className='sushiList'>
        {
            arr.map((i) => <SkeletonItem key={i} />)
        }
    </div>
)

export default SushiSkeleton